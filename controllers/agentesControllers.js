// controllers/agentesController.js

const agentesRepository = require('../repositories/agentesRepository');

// Função que lida com a rota GET /agentes
function getAllAgentes(req, res) {
    const agentes = agentesRepository.findAll();
    res.status(200).json(agentes); // Retorna 200 OK e o JSON com os agentes
}

// Futuramente, adicionaremos os outros métodos (getAgenteById, createAgente, etc.)

module.exports = {
    getAllAgentes
};