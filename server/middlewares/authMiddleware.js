const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    //get token from header
    const token = req.header("authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.jwt_secret); // verify method for decrypting the jwt token
    req.body.userId = decryptedToken.userId; // an object with propert userId = decryptedToken
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
