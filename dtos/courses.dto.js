class CourseDTOBuilder {
  constructor() {
    this.course = {};  // Inicia el DTO vacío
  }

  setName(name) {
    this.course.name = name;
    return this;  // Devuelve el objeto builder para encadenar más métodos
  }

  setDescription(description) {
    this.course.description = description;
    return this;  // Devuelve el objeto builder para encadenar más métodos
  }

  setState(state = 'in_progress') {
    // Si no se pasa un estado, se asigna 'in_progress' por defecto
    this.course.state = state;
    return this;  // Devuelve el objeto builder para encadenar más métodos
  }

  setCreatorId(creatorId) {
    this.course.creatorId = creatorId;
    return this;  // Devuelve el objeto builder para encadenar más métodos
  }

  build() {
    // Aquí puedes agregar validaciones o transformaciones adicionales antes de devolver el DTO
    if (!this.course.name || !this.course.creatorId) {
      throw new Error('El nombre y el creador del curso son obligatorios');
    }

    return this.course;  // Devuelve el DTO final construido
  }
}

module.exports = CourseDTOBuilder;
