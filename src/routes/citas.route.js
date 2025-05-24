import { Router } from "express";
import {
  getCitas,
  postCitas,
  putCitas,
  deleteCitas,
} from "../controllers/citas.controllers.js";
const router = Router();

router.get("/citas", getCitas);
router.post("/citas", postCitas);
router.put("/citas/:id", putCitas);
router.delete("/citas/:id", deleteCitas);
export default router;
