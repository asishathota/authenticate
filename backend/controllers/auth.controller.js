import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getTransporter from "../config/nodeMailer.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const isUserExists = await User.findOne({
            $or: [{ username }, { email }],
        });

        if (isUserExists) {
            return res.status(400).json({
                success: false,
                message: "user found with this username/email",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            username, email, password: hashedPassword
        });

        const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: user.email,
            subject: 'welcome to Nothing',
            text: `Hi ${user.username},\n\nWelcome to Nothing! your account has been created with email: ${user.email}\n\nBest regards,\nThe Nothing Team`
        }

        const transporter = getTransporter;

        await transporter.sendMail(mailOptions);

        return res.status(201).json({
            success: true,
            message: "user created successfully",
            user,
        });

    } catch (error) {
        console.log("error in user creation", error);
        return res.status(400).json({
            success: false,
            message: "error occured in user creation"
        })
    }
};

export const signin = async (req, res) => {
    const identifier = req.body.email || req.body.username;
    const { password } = req.body;

    try {
        const user = await User.findOne({
            $or: [{ username: identifier }, { email: identifier }],
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "no user found with this username/email",
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "invalid credentials",
            });
        }

        const refreshToken = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: '7d' });

        const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);

        await User.findByIdAndUpdate(user._id, { refreshToken: hashedRefreshToken });

        const accessToken = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: '15m' });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: "user signed in successfully",
            accessToken,
            user,
        });
    } catch (error) {
        console.log("error in user sign-in", error);
        return res.json({
            success: false,
            message: "error occured in user sign-in"
        })
    }
};


export const signout = async (req, res) => {
    try {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        });
        return res.status(200).json({
            success: true,
            message: "user signed out successfully"
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "error occured in user sign-out"
        })
    }
}

export const sendVerifyEmailOTP = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "no user found with this id",
            });
        }
        if (user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "user is already verified",
            });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
        user.verifyOTP = otp;
        user.verifyOTPExpiresAt = otpExpiresAt;
        await user.save();

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: user.email,
            subject: 'Account Verification OTP',
            text: `Your otp for account verification is ${otp}. It is valid for 10 minutes.`
        }
        const transporter = getTransporter;
        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: "verification otp sent to email",
        });
    } catch (error) {
        console.log("error in sending verify email otp", error);
        return res.status(500).json({
            success: false,
            message: "error occured in sending verify email otp"
        })
    }
};


export const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;

    if (!otp || otp.length !== 6) {
        return res.status(400).json({
            success: false,
            message: "invalid otp",
        });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "no user found with this id",
            });
        }

        if (user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "user is already verified",
            });
        }
        if (user.verifyOTP !== otp) {
            return res.status(400).json({
                success: false,
                message: "invalid otp",
            });
        }
        if (user.verifyOTPExpiresAt < new Date()) {
            return res.status(400).json({
                success: false,
                message: "otp expired",
            });
        }
        user.isVerified = true;
        user.verifyOTP = '';
        user.verifyOTPExpiresAt = undefined;
        await user.save();
        return res.status(200).json({
            success: true,
            message: "email verified successfully",
        });
    } catch (error) {
        console.log("error in verifying email", error);
        return res.status(500).json({
            success: false,
            message: "error occured in verifying email"
        })
    }
};