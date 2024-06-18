const express = require('express');
const { connectToDatabase } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});