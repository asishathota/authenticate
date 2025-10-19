import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken:{
        type: String,
        default: ''
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verifyOTP: {
        type: String,
        default: ''
    },
    verifyOTPExpiresAt: {
        type: Date,
        default: undefined,
    },
    resetOTP: {
        type: String,
        default: '',
    },
    resetOTPExpiresAt: {
        type: Date,
        default: undefined,
    }
})

export const User = mongoose.model("user", userSchema)