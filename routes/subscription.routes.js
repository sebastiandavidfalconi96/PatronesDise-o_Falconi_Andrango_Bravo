const express = require('express');
const subscriptionController = require('../controllers/subscription.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

const router = express.Router();

// Rutas de gestión de suscripciones
router.post('/', authenticate, authorize(['Consumer']), subscriptionController.subscribeToCourse); // Solo Consumer puede suscribirse a cursos
router.delete('/:courseId', authenticate, authorize(['Consumer']), subscriptionController.cancelSubscription); // Solo Consumer puede cancelar suscripciones
router.get('/:courseId', authenticate, authorize(['Consumer']), subscriptionController.getSubscription); // Solo Consumer puede consultar suscripciones

module.exports = router;
