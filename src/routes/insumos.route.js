import { Router } from "express";
const router = Router();
import {
  getInsumos,
  postInsumos,
  putInsumos,
  deleteInsumos,
} from "../controllers/insumos.controller.js";

router.get("/insumos", getInsumos);
router.post("/insumos", postInsumos);
router.put("/insumos/:id", putInsumos);
router.delete("/insumos/:id", deleteInsumos);

export default router;
