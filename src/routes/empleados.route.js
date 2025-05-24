import { Router } from "express";
import {
  getEmpleados,
  postEmpleados,
  putCliente,
  deleteEmpleados,
  login
} from "../controllers/empleados.controller.js";
const router = Router();

router.get("/empleados", getEmpleados);
router.post("/empleados", postEmpleados);
router.put("/empleados/:id", putCliente);
router.delete("/empleados/:id", deleteEmpleados);
router.post("/login", login);


export default router;
