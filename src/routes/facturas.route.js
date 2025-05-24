import { Router } from "express";
const router = Router();
import {
  getFacturas,
  postFactura,
  putFactura,
  deleteFactura,
} from "../controllers/facturas.controllers.js";

router.get("/facturas", getFacturas);
router.post("/facturas", postFactura);
router.put("/facturas/:id", putFactura);
router.delete("/facturas/:id", deleteFactura);

export default router;
