// server.js

const express = require('express');
const app = express();

// Middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// Importa o roteador de agentes
const agentesRouter = require('./routes/agentesRoutes');

// Diz ao app para usar o roteador de agentes
// Todas as rotas definidas em agentesRouter serão prefixadas com nada ("/")
app.use(agentesRouter);

const PORT = process.env.PORT || 3000; // Define a porta

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em http://localhost:${PORT}`);
});