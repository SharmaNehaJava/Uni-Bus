const jwt = require("jsonwebtoken");
const key = "helllo";

async function middleware(req, res, next) {
  let token = req.headers.authorization;
  // console.log(token)

  if (!token || !token.startsWith("Bearer")) {
    return res.status(400).json({
      message: "user not found",
    });
  }
  token = token.split(" ")[1];

  try {
    const verified = jwt.verify(token, key);
    req.userId = verified.userId;
    next();
  } catch {
      return res.status(400).json({
        message: "user not found",
      });
  }
}

module.exports = {
  middleware,
};
