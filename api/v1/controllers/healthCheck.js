const healthCheck = async (req, res, next) => {
  const health = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.status(200).send(health);
  } catch (e) {
    health.message = e;
    res.status(503).send();
  }
};

export default healthCheck;
