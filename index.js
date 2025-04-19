import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import { logger } from "./middleware/logger.js";

// crear servidor de expres
const app = express();

app.use("/joyas", routes);
app.use(logger);
app.listen(3000, console.log("ejecutado en el puerto 3000"));
