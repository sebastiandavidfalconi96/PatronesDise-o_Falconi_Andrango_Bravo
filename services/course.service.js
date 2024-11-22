const { Course } = require('../models');

const CourseDTOBuilder = require('../dtos/courses.dto'); // Importamos el Builder

const createCourse = async (data) => {
  // Usamos el builder para construir el DTO del curso
  const courseDTO = new CourseDTOBuilder()
    .setName(data.name)
    .setDescription(data.description)
    .setState(data.state)
    .setCreatorId(data.creatorId)
    .build();  // Aquí construimos el DTO final

  const course = await Course.create(courseDTO); // Usamos el DTO para crear el curso en la base de datos
  return course;  // Devolvemos el curso creado
};

const updateCourse = async (id, data) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Curso no encontrado');

  // Usamos el builder para actualizar el DTO
  const courseDTO = new CourseDTOBuilder()
    .setName(data.name)
    .setDescription(data.description)
    .setState(data.state)
    .setCreatorId(data.creatorId)
    .build();  // Aquí construimos el DTO final

  const updatedCourse = await course.update(courseDTO); // Actualizamos el curso con el DTO
  return updatedCourse;
};

const deleteCourse = async (id) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Curso no encontrado');
  return course.destroy();
};

const getCourse = async (id) => {
  const course = await Course.findByPk(id);
  if (!course) throw new Error('Curso no encontrado');
  return course;
};

module.exports = { createCourse, updateCourse, deleteCourse, getCourse };
