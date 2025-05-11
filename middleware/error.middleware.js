const errorMiddleware = (err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).json({ status, message: err.message });
  };
  
  export default errorMiddleware;
  