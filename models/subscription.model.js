const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Subscription = sequelize.define('Subscription', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,  // Cambiado a UUID
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    courseId: {
        type: DataTypes.UUID,  // Cambiado a UUID
        allowNull: false,
        references: {
            model: 'courses',
            key: 'id',
        },
    },
    subscriptionDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'subscriptions',
    timestamps: true,
});

module.exports = Subscription;
