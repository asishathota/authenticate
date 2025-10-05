import express from 'express'
import { validateInput } from '../middlewares/validateInput.js';
import { signinInputValidator, signupInputValidator } from '../validations/inputValidation.js';
import { signin, signout, signup } from '../controllers/auth.controller.js';

const authRouter = express.Router()

authRouter.post('/signup', validateInput(signupInputValidator), signup)

authRouter.post('/signin', validateInput(signinInputValidator), signin)

authRouter.post('/signout', signout)

export default authRouter;