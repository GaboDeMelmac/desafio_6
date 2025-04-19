export const logger = (req, res, next) => {
  const fecha = new Date().toISOString();
  console.log(
    `[${fecha}] Se hizo una consulta a ${req.method} ${req.originalUrl}`
  );
  next();
};
