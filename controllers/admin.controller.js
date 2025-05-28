import { registerUser } from '../services/auth.service.js';

export const registerByAdmin = async (req, res, next) => {
  try{
    const currentUserRole = req.user?.role;
    console.log("currentUserRole======>", req.user);
    if (currentUserRole !== 'ADMIN') {
      return res.status(403).json({ message: 'Only admin can register users with roles' });
    }
    const result = await registerUser(req.body);
    res.status(201).json({ message: 'Registered successfully', ...result });
  } catch(err) {
    next(err);
  }
}
