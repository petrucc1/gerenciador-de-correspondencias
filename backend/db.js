const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URL; // Exemplo: 'mongodb://localhost:27017'
const dbName = process.env.DB_NAME; // Exemplo: 'meuBancoDeDados'

let db;

const connectToDatabase = async () => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  db = client.db(dbName);
  console.log('Conectado ao banco de dados MongoDB:', dbName);
};

const getDb = () => db;

module.exports = { connectToDatabase, getDb };