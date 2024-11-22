const courseService = require('../services/course.service');

const createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse({ ...req.body, creatorId: req.user.id });
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await courseService.updateCourse(req.params.id, req.body);
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    await courseService.deleteCourse(req.params.id);
    res.status(200).json({ message: 'Curso eliminado exitosamente' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await courseService.getCourse(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const changeCourseStatus = async (req, res) => {
  try {
    const updatedCourse = await courseService.updateCourse(req.params.id, { status: req.body.status });
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourse,
  changeCourseStatus,  // Asegúrate de exportarlo
};
