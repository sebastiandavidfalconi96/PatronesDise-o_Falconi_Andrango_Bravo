const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model'); // Importamos el modelo de usuario
const { isFieldEmpty } = require('../utils/helpers'); // Función auxiliar

// Middleware de autenticación: verifica si el usuario tiene un token válido
const authenticate = async (req, res, next) => {
  // Obtener el token del header Authorization
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (isFieldEmpty(token)) {
    return res.status(403).json({ message: 'Acceso denegado: token no proporcionado' });
  }

  try {
    // Verifica si el token es válido
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yourjwtsecret');
    const user = await User.findByPk(decoded.id); // Busca al usuario en la base de datos

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Añadimos la información del usuario a la petición
    req.user = user;
    next(); // Si todo está bien, pasa al siguiente middleware o ruta
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

// Middleware de autorización: verifica si el usuario tiene el rol adecuado para acceder
const authorize = (roles) => {
  return (req, res, next) => {
    // Si el rol del usuario está incluido en la lista de roles permitidos
    if (roles.includes(req.user.userType)) {
      return next(); // Si tiene acceso, pasa al siguiente middleware o ruta
    }
    return res.status(403).json({ message: 'Acceso denegado: no tienes permiso' });
  };
};

module.exports = {
  authenticate,
  authorize,
};
