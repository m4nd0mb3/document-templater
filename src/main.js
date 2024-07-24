const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const specs = require('../configs/swagger'); // Substitua pelo caminho do seu arquivo swagger.js
const schemas= require('./schemas/document');
const cors = require('cors')
// Require the upload middleware

const serverConfig = require('../configs/server');

const documentRouter = require('./routes/document');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit:'100mb' }));
app.use(bodyParser.json({ limit:'100mb'}));

app.use(serverConfig.baseUrl, documentRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(serverConfig.port, () => {
  console.log(`Server running at http://localhost:${serverConfig.port}`);
});

// Encerrar o servidor corretamente quando receber um sinal SIGINT (Ctrl + C)
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  process.exit(0);
});
