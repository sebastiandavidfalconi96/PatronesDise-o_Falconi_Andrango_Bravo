const express = require('express');
const { connectDB, sequelize } = require('./config/database');
const userRoutes = require('./routes/user.routes');
const courseRoutes = require('./routes/course.routes');
const subscriptionRoutes = require('./routes/subscription.routes');

const { initializeUsers } = require('./initialize');  // Importa el script de inicialización
const app = express();
initializeUsers();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Conectar a la base de datos y levantar el servidor
const PORT = process.env.PORT || 3000;

const main = async () => {
  await connectDB(); // Conectar a PostgreSQL

  // Sincronizar las tablas de la base de datos
  try {
    // Sincronizar todos los modelos (incluyendo relaciones)
    await sequelize.sync({ force: false }); // `force: false` significa que no eliminará las tablas existentes
    console.log('Tablas sincronizadas correctamente');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al sincronizar las tablas:', error);
  }
};

main();
