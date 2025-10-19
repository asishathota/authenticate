export const validateInput = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true
  })
  if (error) {
    const errorMessages = error.details.map((detail) => {
      return detail.message.replace(/['"]+/g, '');
    });

    return res.status(400).json({
      status: 'Validation Error',
      errors: errorMessages
    });
  }
  req.validatedBody = value;

  next();
}
