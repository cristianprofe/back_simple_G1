import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY; // Cambia esto por una clave segura

// Crear un token JWT
function crearToken(payload, expiresIn = "1h") {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Validar un token JWT
//devolver el payload!!
function validarToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
}

export function middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }

  const user = validarToken(token);
  if (!user) {
    return res.status(403).json({ mensaje: "Token inválido o expirado" });
  }

  req.user = user;
  next();
}

module.exports = {
  crearToken,
  validarToken,
};
