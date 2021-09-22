require('dotenv').config();

const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

  if (!bearerToken) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(bearerToken, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;