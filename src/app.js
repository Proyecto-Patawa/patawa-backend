import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./api/routes/user.routes.js";
import dogRoutes from "./api/routes/dog.routes.js";
import walkRoutes from "./api/routes/walk.routes.js";

dotenv.config();

const app = express(); // inicializa la aplicación express

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(helmet()); // Añade seguridad básica con varios headers HTTP
app.use(express.json()); // Permite al servidor entender y parsear JSON en el cuerpo de la petición

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/dogs", dogRoutes);
app.use("/api/walks", walkRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send("Sorry cant find that!");
});

// Inicialización del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
