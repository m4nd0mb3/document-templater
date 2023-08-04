const express = require('express');
const bodyParser = require('body-parser');
const carbone = require('carbone');
const axios = require('axios');
const fs = require('fs');
const db = require("./core/database")
// Require the upload middleware
const upload = require('./middlewares/upload');

const serverConfig = require('../configs/server');

const documentRouter = require('./routes/document');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(serverConfig.baseUrl, documentRouter);


// Rota para processar o modelo Carbone
app.get('/api/generate/:reference', (req, res) => {
  // const { templatePath, data } = req.body;
  const reference = req.params.reference;
  // res.send(`-- ${reference}`);

  const data = req.body;
  let convertTo = 'pdf';
  var options = {
      convertTo : convertTo, //can be docx, txt, pdf, odt ...
  };

  const template = `./templates/uploads/${reference}`

  carbone.render(template, data, options, (err, result) => {
  // carbone.render('./simple.odt', data, options, (err, result) => {
    if (err) {
      console.error('Error generating document:', err);
      res.status(500).send('Error generating document');
      return;
    }
    // let filename = `result.${convertTo}`;
    // fs.writeFileSync(filename, result);
    // const file = `${__dirname}/${filename}`;
    // res.download(file);
    // fs.writeFileSync('result.odt', result);

    res.contentType('application/pdf');
    // res.contentType('text/html');
    res.send(result);
    // process.exit()
  });
});

// Rota para processar o modelo Carbone
app.get('/api/sandbox/:reference', (req, res) => {
  const reference = req.params.reference;
  let convertTo = 'pdf';
  var options = {
      convertTo : convertTo, //can be docx, txt, pdf, odt ...
  };

  const template = `./templates/uploads/${reference}`

  const sql = "select * from document_templates where reference = ?"
  const params = [req.params.reference]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      const data = JSON.parse(row.tests_data)
      carbone.render(template, data, options, (err, result) => {
        if (err) {
          console.error('Error generating document:', err);
          res.status(500).send('Error generating document | '+ err);
          return;
        }

        res.contentType('application/pdf');
        res.send(result);
      });
    });

  
});


// app.post('/api/login', (req, res) => {
//     console.log(req.body);
//     console.log(req.body.email);
//     console.log(req.body.password);

//     // validate email and password here

//     res.redirect('/dashboard');
// });


// Insert data with a UUID
app.post('/api/documents', upload.single('document'), (req, res) => {
  const reference = req.file.filename;
  const tests_data = JSON.stringify(req.body);
  const name = req.file.originalname.split('.')[0];

  console.log(reference,tests_data, name);

  db.run('INSERT INTO document_templates (reference, name, tests_data) VALUES (?, ?, ?)', [reference, name, tests_data], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to insert data' });
    }

    res.json({ message: 'Data inserted successfully' });
  });
});

app.listen(serverConfig.port, () => {
  console.log(`Server running at http://localhost:${serverConfig.port}`);
});

// Encerrar o servidor corretamente quando receber um sinal SIGINT (Ctrl + C)
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  process.exit(0);
});
