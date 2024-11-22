const User = require('./user.model');
const Course = require('./course.model');
const Subscription = require('./subscription.model');

// Relación entre User y Course
User.hasMany(Course, { foreignKey: 'creatorId' }); // Un usuario puede crear muchos cursos
Course.belongsTo(User, { foreignKey: 'creatorId' }); // Un curso pertenece a un usuario

// Relación entre User y Subscription
User.belongsToMany(Course, { through: Subscription, foreignKey: 'userId' }); // Un usuario puede estar suscrito a muchos cursos
Course.belongsToMany(User, { through: Subscription, foreignKey: 'courseId' }); // Un curso puede ser suscrito por muchos usuarios

module.exports = { User, Course, Subscription };
