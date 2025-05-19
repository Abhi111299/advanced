import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId, role) => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Generate Refresh Token (long-lived)
export const generateRefreshToken = (userId, role) => {
  return jwt.sign({ userId, role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

// Verify token (optional helper)
export const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};