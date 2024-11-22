const subscriptionService = require('../services/subscription.service');
const courseService = require('../services/course.service');

const subscribeToCourse = async (req, res) => {
  try {
    const course = await courseService.getCourse(req.body.courseId);
    if (!course || course.state !== 'active') {
      throw new Error('El curso no está disponible para suscripción.');
    }

    const subscription = await subscriptionService.subscribe(req.user.id, req.body.courseId);
    res.status(201).json(subscription);  // Devolvemos la suscripción creada
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const cancelSubscription = async (req, res) => {
  try {
    await subscriptionService.cancelSubscription(req.user.id, req.params.courseId);
    res.status(200).json({ message: 'Suscripción cancelada exitosamente' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getSubscription = async (req, res) => {
  try {
    const subscription = await subscriptionService.getSubscription(req.user.id, req.params.courseId);
    if (!subscription) throw new Error('No se encontró la suscripción');
    res.status(200).json(subscription);  // Devolvemos la suscripción encontrada
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  subscribeToCourse,
  cancelSubscription,
  getSubscription,
};
