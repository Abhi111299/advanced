import Joi from 'joi';

export const registerSchema = Joi.object({
    username: Joi.string().min(3).required().messages({
      'any.required': 'Username is required',
      'string.min': 'Username must be at least 3 characters',
    }),
    password: Joi.string().min(6).required().messages({
      'any.required': 'Password is required',
      'string.min': 'Password must be at least 6 characters',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Email must be a valid email',
    }),
    gender: Joi.string().valid('male', 'female', 'other').optional(),
    age: Joi.number().integer().min(1).optional().strict().messages({
      'number.base': 'Age must be a number',
      'number.integer': 'Age must be an integer',
    }),
    location: Joi.string().optional(),
    role: Joi.string().valid('ADMIN', 'EMPLOYEE', 'CUSTOMER').optional()
  });

export const loginSchema = Joi.object({
  password: Joi.string().min(6).required().messages({
      'any.required': 'Password is required',
      'string.min': 'Password must be at least 6 characters',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email',
  })
})