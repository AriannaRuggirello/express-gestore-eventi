module.exports = function (err, req, res, next) {
 

    res.status(500).json({
      message: "error 500!internal server",
      error: err.message,

    });


}