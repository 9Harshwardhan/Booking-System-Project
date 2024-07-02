const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// Middleware function to authenticate JWT token
async function authMiddleware(req, res, next) {
  // Extract token from headers
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: 'Authorization denied, token required' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user exists in database
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'Authorization denied, user not found' });
    }

    // Attach user object to request for further handling
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = authMiddleware;
