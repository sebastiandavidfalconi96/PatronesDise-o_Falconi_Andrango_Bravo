const { Subscription } = require('../models');
const SubscriptionDTOBuilder = require('../dtos/subscription.dto'); // Importamos el Builder

const subscribe = async (userId, courseId) => {
  // Usamos el builder para construir el DTO de la suscripción
  const subscriptionDTO = new SubscriptionDTOBuilder()
    .setUserId(userId)
    .setCourseId(courseId)
    .build();  // Aquí construimos el DTO final

  const subscription = await Subscription.create(subscriptionDTO); // Usamos el DTO para crear la suscripción en la base de datos
  return subscription;  // Devolvemos la suscripción creada
};

const cancelSubscription = async (userId, courseId) => {
  const subscription = await Subscription.findOne({ where: { userId, courseId } });
  if (!subscription) throw new Error('Suscripción no encontrada');
  return subscription.destroy(); // Cancelamos la suscripción
};

const getSubscription = async (userId, courseId) => {
  const subscription = await Subscription.findOne({ where: { userId, courseId } });
  return subscription;  // Devolvemos la suscripción encontrada
};

module.exports = { subscribe, cancelSubscription, getSubscription };
