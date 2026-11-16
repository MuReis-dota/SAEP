import { Router } from "express";
import ClienteController  from "../controllers/ClienteController.js";
import VeiculoController from "../controllers/VeiculoController.js";
import AgendamentoController from "../controllers/AgendamentoController.js";
import DashboardController from "../controllers/DashboardController.js"
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();
//rouer.use(authMiddleware);

//Dashboard
router.get('/dashboard/resumo', (req,res) => DashboardController.resumo(req,res))

//Login precisa estar fora da rota Auth pois não precisa de autenticação
router.post('/login', (req, res)=> AuthController.login(req, res));

//Rotas para Auth
router.use(authMiddleware);

router.post('/logout', (req, res)=> AuthController.logout(req, res));
router.get('/me', (req, res)=> AuthController.me(req, res));

//Clientes
router.get('/clientes', (req,res) => ClienteController.listar(req,res));
router.post('/clientes', (req,res) => ClienteController.criar(req,res));
router.put('/clientes/:id', (req,res) => ClienteController.atualizar(req,res));

//Veiculos
router.get('/veiculos', (req,res) => VeiculoController.listar(req,res));
router.post('/veiculos', (req, res)=> VeiculoController.criar(req, res));

//Agendamentos
router.get('/agendamentos', (req,res) => AgendamentoController.listar(req,res));
router.post('/agendamentos', (req, res) => AgendamentoController.criar(req, res));
router.patch('/agendamentos/:id/data', (req, res)=> AgendamentoController.atualizarData(req, res));

export default router;