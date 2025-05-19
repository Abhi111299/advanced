import { registerUser, loginUser,  handleSendOtp,
  handleVerifyOtpAndGenerateUUID,
  handlePasswordReset,} from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const result = await registerUser(req.body);
    res.status(201).json({ message: 'Registered successfully', ...result });
  } catch (err) {
    next(err);
  }
};

export const registerByAdmin = async (req, res, next) => {
  try{
    const currentUserRole = req.body?.role;
    console.log("currentUserRole======>", req.body?.role);
    if (currentUserRole !== 'ADMIN') {
      return res.status(403).json({ message: 'Only admin can register users with roles' });
    }
    const result = await registerUser(req.body);
    res.status(201).json({ message: 'Registered successfully', ...result });
  } catch(err) {
    next(err);
  }
}

export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await handleSendOtp(email);
    res.json({ success: true, message: 'Reset email sent.', result });

  } catch (err){
    next(err);
  }

}

export const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const result = await handleVerifyOtpAndGenerateUUID(email, otp);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { uuid, password, confirmPassword } = req.body;
    const result = await handlePasswordReset(uuid, password, confirmPassword);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const sendForgotPasswordOtp = async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await handleSendOtp(email);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
