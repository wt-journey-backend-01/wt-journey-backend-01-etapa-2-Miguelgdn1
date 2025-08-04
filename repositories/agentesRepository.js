// repositories/agentesRepository.js

const { v4: uuidv4 } = require('uuid'); // Importa a função para gerar UUIDs

// Nosso "banco de dados" em memória
const agentes = [
    {
        id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
        nome: "Rommel Carneiro",
        dataDeIncorporacao: "1992-10-04",
        cargo: "delegado"
    },
    {
        id: "a28f8139-441f-4551-9359-54b6796c34a2",
        nome: "Clarice Starling",
        dataDeIncorporacao: "2018-03-15",
        cargo: "inspetor"
    }
];

// Função para listar todos os agentes
function findAll() {
    return agentes;
}

// Futuramente, adicionaremos aqui as funções findById, save, update, remove, etc.

module.exports = {
    findAll
};