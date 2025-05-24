import { Router } from "express";
import {
  getMascotas,
  postMascotas,
  updateMascota,
  deleteMascota
} from "../controllers/mascotas.controller.js";

const router = Router();

router.get("/mascotas", getMascotas);
router.post("/mascotas", postMascotas);
router.put("/mascotas/:id", updateMascota);
router.delete("/mascotas/:id", deleteMascota);

export default router;
