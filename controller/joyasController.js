import { obtenerJoyas, obtenerJoyasPorFiltros } from "../models/joyasModels.js";

const formatearHATEOAS = (joyas) => {
  const totalJoyas = joyas.length;
  const stockTotal = joyas.reduce((acc, j) => acc + j.stock, 0);

  const result = joyas.map((j) => ({
    name: j.nombre,
    href: `/joyas/${j.id}`,
  }));

  return {
    totalJoyas,
    stockTotal,
    result,
  };
};

const getJoyas = async (req, res) => {
  try {
    const resultado = await obtenerJoyas(req.query);
    res.status(200).json(formatearHATEOAS(resultado));
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al obtener el inventario" });
  }
};

const getJoyasPorFiltros = async (req, res) => {
  try {
    const resultado = await obtenerJoyasPorFiltros(req.query);
    res.status(200).json(formatearHATEOAS(resultado));
  } catch (error) {
    console.error(error); // <-- Agrega esto para ver el error real en consola
    res.status(400).json({ message: "Error al obtener el inventario" });
  }
};

export { getJoyas, getJoyasPorFiltros };
