import express from 'express'
import { validateInput } from '../middlewares/validateInput.js';
import { signinInputValidator, signupInputValidator } from '../validations/inputValidation.js';
import { sendVerifyEmailOTP, signin, signout, signup, verifyEmail } from '../controllers/auth.controller.js';
import userAuth from '../middlewares/userAuth.js';

const authRouter = express.Router()

authRouter.post('/signup', validateInput(signupInputValidator), signup)

authRouter.post('/signin', validateInput(signinInputValidator), signin)

authRouter.post('/signout', signout)


authRouter.post('/send-verify-email-otp',userAuth, sendVerifyEmailOTP)

authRouter.post('/verify-email',userAuth, verifyEmail)

export default authRouter;