import pool from "../config/db.js";
import pgk from "pg-format";

const format = pgk;

export const obtenerJoyas = async ({
  limit = 10,
  order_by = "id_ASC",
  page = 1,
}) => {
  const [campo, direccion] = order_by.split("_");
  const offset = Math.abs((page - 1) * limit);
  const formattedQuery = format(
    "SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s",
    campo,
    direccion,
    limit,
    offset
  );

  const { rows: inventario } = await pool.query(formattedQuery);
  return inventario;
};

export const obtenerJoyasPorFiltros = async ({
  precio_min,
  precio_max,
  categoria,
  metal,
}) => {
  let filtros = [];
  let values = [];
  let i = 1;

  if (precio_min) {
    filtros.push(`precio >= $${i++}`);
    values.push(precio_min);
  }

  if (precio_max) {
    filtros.push(`precio <= $${i++}`);
    values.push(precio_max);
  }

  if (categoria) {
    filtros.push(`categoria = $${i++}`);
    values.push(categoria);
  }

  if (metal) {
    filtros.push(`metal = $${i++}`);
    values.push(metal);
  }

  let consulta = "SELECT * FROM inventario";
  if (filtros.length > 0) {
    consulta += ` WHERE ${filtros.join(" AND ")}`;
  }

  const { rows: inventario } = await pool.query(consulta, values);
  return inventario;
};
