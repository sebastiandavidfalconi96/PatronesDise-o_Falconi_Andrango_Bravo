const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Course = sequelize.define('Course', {
  id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  state: {
    type: DataTypes.ENUM('in_progress', 'active', 'inactive'),
    defaultValue: 'in_progress',
    allowNull: false,
  },
  creatorId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users', // Relacionado con la tabla 'users'
      key: 'id',
    },
    onDelete: 'CASCADE', // Asegúrate de mantener la integridad referencial
    onUpdate: 'CASCADE',
  }
}, {
  tableName: 'courses',
  timestamps: true,
});

module.exports = Course;
