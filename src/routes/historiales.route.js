import { Router } from "express";
const router = Router();
import {
  getHistoriales,
  postHistoriales,
  putHistoriales,
  deleteHistoriales,
} from "../controllers/historiales.controllers.js";

router.get("/historiales", getHistoriales);
router.post("/historiales", postHistoriales);
router.put("/historiales/:id", putHistoriales);
router.delete("/historiales/:id",deleteHistoriales);

export default router;
