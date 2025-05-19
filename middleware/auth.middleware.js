import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError.js'

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next(new ApiError(401, 'Token missing or invalid'));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Contains userId and role
    next();
  } catch (err) {
    next(new ApiError(401, 'Invalid token'));
  }
};
