const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from header
    let token = req.headers.authorization;

    // Check if token exists
    if (!token) {
      return res.status(401).json({ msg: "No token" });
    }

    // If token starts with "Bearer", remove it
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    // Move to next middleware/controller
    next();

  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;