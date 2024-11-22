const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Función para encriptar una contraseña
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Función para verificar la contraseña
const verifyPassword = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};

// Función para generar un token JWT
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    userType: user.userType,
  };

  const secret = process.env.JWT_SECRET || 'yourjwtsecret'; // Clave secreta para firmar el token
  const options = {
    expiresIn: '1h', // El token expira en 1 hora
  };

  const token = jwt.sign(payload, secret, options);
  return token;
};

// Función para verificar si un campo está vacío
const isFieldEmpty = (field) => {
  return !field || field.trim() === '';
};

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  isFieldEmpty,
};
