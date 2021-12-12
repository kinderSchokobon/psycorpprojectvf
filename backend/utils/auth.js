const jwt = require("jsonwebtoken");
exports.createJWT = (mail, userId, duration) => {
   const payload = {
      mail,
      userId,
      duration
   };
   return jwt.sign(payload, process.env.TOKEN_SECRET, {
     expiresIn: duration,
   });
};