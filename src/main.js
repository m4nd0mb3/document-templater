const express = require('express');
const bodyParser = require('body-parser');
// Require the upload middleware

const serverConfig = require('../configs/server');

const documentRouter = require('./routes/document');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(serverConfig.baseUrl, documentRouter);

app.listen(serverConfig.port, () => {
  console.log(`Server running at http://localhost:${serverConfig.port}`);
});

// Encerrar o servidor corretamente quando receber um sinal SIGINT (Ctrl + C)
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  process.exit(0);
});
