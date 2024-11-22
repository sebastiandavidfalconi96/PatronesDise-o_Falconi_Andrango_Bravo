const express = require('express');
const courseController = require('../controllers/course.controller'); // Verifica que esta línea sea correcta
const { authenticate, authorize } = require('../middleware/auth.middleware');

const router = express.Router();

// Rutas de gestión de cursos
router.post('/', authenticate, authorize(['Creator']), courseController.createCourse); // Solo Creator puede crear cursos
router.put('/:id', authenticate, authorize(['Creator']), courseController.updateCourse); // Solo Creator puede actualizar sus cursos
router.delete('/:id', authenticate, authorize(['Admin']), courseController.deleteCourse); // Solo Admin puede eliminar cursos
router.get('/:id', authenticate, authorize(['Admin', 'Creator', 'Consumer']), courseController.getCourse); // Todos los roles pueden consultar cursos
router.patch('/:id/status', authenticate, authorize(['Creator']), courseController.changeCourseStatus); // Creator cambia el estado del curso

module.exports = router;
