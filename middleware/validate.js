import ApiError from '../utils/apiError.js';

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: true });

  if (error) {
    const message = error.details[0].message;
    return next(new ApiError(422, message));
  }

  next();
};

export default validate;
