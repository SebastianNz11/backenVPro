import {Router} from 'express'
import {enviarCorreo} from '../controllers/sendEmail.controller.js'

const router = Router();
router.post("/sendcorreo", enviarCorreo);

export default router;