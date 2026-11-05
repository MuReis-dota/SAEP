import { Router } from "express";
import ClienteController  from "../controllers/ClienteController.js";
import VeiculoController from "../controllers/VeiculoController.js";
import AgendamentoController from "../controllers/AgendamentoController.js";

const router = Router();
//rouer.use(authMiddleware);

router.get('/clientes', (req,res) => ClienteController.listar(req,res));
router.post('/clientes', (req,res) => ClienteController.criar(req,res));
//router.put('/clientes', (req,res) => ClienteController.atualizar(req,res));


router.get('/veiculos', (req,res) => VeiculoController.listar(req,res));


router.get('/agendamentos', (req,res) => AgendamentoController.listar(req,res));

export default router;