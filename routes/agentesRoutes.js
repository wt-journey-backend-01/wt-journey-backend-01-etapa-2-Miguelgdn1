// routes/agentesRoutes.js

const express = require('express');
const router = express.Router();
const agentesController = require('../controllers/agentesControllers');

// Define a rota GET para /agentes
// Quando uma requisição GET chegar em /agentes, a função getAllAgentes do controller será chamada
router.get('/agentes', agentesController.getAllAgentes);

// Futuramente, definiremos aqui as rotas GET/:id, POST, PUT, etc.

module.exports = router;