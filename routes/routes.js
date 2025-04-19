import express from "express";
import { getJoyas, getJoyasPorFiltros } from "../controller/joyasController.js";

const router = express.Router();

router.get("/", getJoyas);
router.get("/filtros", getJoyasPorFiltros);

export default router;
