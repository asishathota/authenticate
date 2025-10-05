import nodemailer from 'nodemailer';

const getTransporter = () => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER, pass: process.env.SMTP_PASS,
        },
    });
}

export default getTransporter();