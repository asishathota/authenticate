import joi from 'joi'


// signup
export const signupInputValidator = joi.object({
    username: joi.string()
        .min(5)
        .max(20)
        .required(),
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .min(6)
        .required()
})

// signin
const emailSchema = joi.object({
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .min(6)
        .required(),
    username: joi.forbidden()
})

const usernameSchema = joi.object({
    username: joi.string()
        .min(5)
        .max(20)
        .required(),
    password: joi.string()
        .min(6)
        .required(),
    email: joi.forbidden()
})

export const signinInputValidator = joi.alternatives().try(
    emailSchema,
    usernameSchema
).required().messages({
    'alternatives.match': 'Sign-in requires EITHER a valid email OR a valid username, along with a password.'
})
