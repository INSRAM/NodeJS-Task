const sendError = (err, req, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
  });
};

const globalHandler = (err, req, res, next) => {
  // console.log(err)
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  sendError(err, req, res);
  // console.log("Gloabal handeler is calling");
  // console.log(err);
  // return res.status(500).send({ message: "Hi  this is error" });
};

export { globalHandler };
