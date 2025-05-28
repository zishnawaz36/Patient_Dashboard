import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token invalid" });
    req.userId = decoded.id;
    next();
  });
};
