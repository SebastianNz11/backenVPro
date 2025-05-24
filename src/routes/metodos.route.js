import { Router } from "express";
import { getMetodos } from "../controllers/metodos.controllers.js";
const router = Router();

router.get("/metodos", getMetodos);

export default router;