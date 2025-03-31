import express from "express";
import cors from "cors";
import "dotenv/config";
import routeCorreo from "./routes/postEmail.route.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://landingvetpro.onrender.com", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(routeCorreo);
const main = () => {
  app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en el puerto 4000");
  });
};

main();
