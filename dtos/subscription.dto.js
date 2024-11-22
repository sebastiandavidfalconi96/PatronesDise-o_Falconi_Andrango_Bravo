class SubscriptionDTOBuilder {
  constructor() {
    this.subscription = {};  // Inicia el DTO vacío
  }

  setUserId(userId) {
    this.subscription.userId = userId;
    return this;  // Devuelve el objeto builder para encadenar más métodos
  }

  setCourseId(courseId) {
    this.subscription.courseId = courseId;
    return this;  // Devuelve el objeto builder para encadenar más métodos
  }

  setSubscriptionDate(subscriptionDate = new Date()) {
    this.subscription.subscriptionDate = subscriptionDate;
    return this;  // Devuelve el objeto builder para encadenar más métodos
  }

  build() {
    // Aquí puedes agregar validaciones o transformaciones adicionales antes de devolver el DTO
    if (!this.subscription.userId || !this.subscription.courseId) {
      throw new Error('El ID de usuario y el ID de curso son obligatorios');
    }

    return this.subscription;  // Devuelve el DTO final construido
  }
}

module.exports = SubscriptionDTOBuilder;
