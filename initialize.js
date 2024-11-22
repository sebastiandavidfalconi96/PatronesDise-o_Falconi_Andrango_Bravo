const { User } = require('./models');

const initializeUsers = async () => {
  try {
    // Verifica si el administrador ya existe para evitar duplicados
    const admin = await User.findOne({ where: { email: 'admin@admin.com' } });
    if (!admin) {
      await User.create({
        firstName: 'Administrador',
        lastName: 'Sistema',
        email: 'admin@admin.com',
        password: '12345678',  // En un entorno real, debes usar un hash para las contraseñas
        userType: 'admin',
      });
    }

    // Creador de cursos
    const creator = await User.findOne({ where: { email: 'creator@creator.com' } });
    if (!creator) {
      await User.create({
        firstName: 'Creador',
        lastName: 'Cursos',
        email: 'creator@creator.com',
        password: '12345678',
        userType: 'creator',
      });
    }

    // Consumidor
    const consumer = await User.findOne({ where: { email: 'consumer@consumer.com' } });
    if (!consumer) {
      await User.create({
        firstName: 'Consumidor',
        lastName: 'Cursos',
        email: 'consumer@consumer.com',
        password: '12345678',
        userType: 'consumer',
      });
    }

    console.log('Usuarios inicializados correctamente');
  } catch (error) {
    console.error('Error al inicializar usuarios:', error);
  }
};

module.exports.initializeUsers = initializeUsers;
