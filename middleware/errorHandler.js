const errorHandler = async (err, req, res, next) => {
   console.log(err);
   return await res.status(500).json({error: true, type: err.type, message: err.message});
}
export default errorHandler;