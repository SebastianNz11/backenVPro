import {Router} from 'express'
import {getClientes,postClientes,deleteCliente, putCliente} from '../controllers/clientes.controller.js'

const router = Router();

router.get("/clientes", getClientes);
router.post("/clientes", postClientes);
router.delete("/clientes/:id", deleteCliente);
router.put("/clientes/:id", putCliente);
export default router;
