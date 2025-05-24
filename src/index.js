import express from "express";
import cors from "cors";
import "dotenv/config";
import routeCorreo from "./routes/postEmail.route.js";
import routeClientes from "./routes/clientes.route.js";
import routeMascotas from "./routes/mascotas.route.js";
import routeCitas from "./routes/citas.route.js";
import routeInsumos from "./routes/insumos.route.js";
import routeServicios from "./routes/servicios.route.js";
import routeEmpleados from "./routes/empleados.route.js";
import routeHistoriales from "./routes/historiales.route.js";
import routeFacturas from "./routes/facturas.route.js";
import routeRoles from "./routes/roles.route.js";
import routeMetodos from "./routes/metodos.route.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://landingvetpro.onrender.com", "http://localhost:5173", , "http://localhost:5174", "https://frontend-vp.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(routeCorreo);
app.use(routeClientes);
app.use(routeMascotas);
app.use(routeCitas);
app.use(routeInsumos);
app.use(routeServicios);
app.use(routeEmpleados);
app.use(routeHistoriales);
app.use(routeFacturas);
app.use(routeRoles);
app.use(routeMetodos);
const main = () => {
  app.listen(process.env.PORTPC, () => {
    console.log("Servidor escuchando en el puerto 4000");
  });
};

main();
