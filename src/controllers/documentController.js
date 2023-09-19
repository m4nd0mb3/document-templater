const Document = require("../models/document");
const utils = require("../core/utils");
const fs = require('fs');
const asyncHandler = require("express-async-handler");


// Display list of all documents.
exports.document_list = asyncHandler(async (req, res, next) => {
  await Document.findAllDocument()
    .then(rows => {
        res.json({
          "message":"success",
          "data":rows || []
        })
    })
    .catch(error => {
        console.error(error);
    });
  
});

// Display detail page for a specific document.
exports.document_detail = asyncHandler(async (req, res, next) => {
  // res.send(`NOT IMPLEMENTED: document detail: ${req.params.id}`);
  const reference = req.params.reference;
  await Document.findOneDocument(reference)
    .then(row => {
        res.json({
          "message":"success",
          "data":row || []
        })
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({
          "message":error.message,
        })
    });
});

// Handle document create on POST.
exports.document_create_post = asyncHandler(async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: document create POST");
  const reference = req.file.filename;
  // const tests_data = JSON.stringify(req.body.tests_data);
  const tests_data = JSON.stringify(req.body.tests_data, (key, value) => {
    // Verifica se o valor é um objeto vazio e mantém como objeto
    if (Object.keys(value).length === 0) {
      return value;
    }
    // Caso contrário, deixa o JSON.stringify() transformar o valor em string
    return value;
  });
  const name = req.file.originalname.split('.')[0];
  const extension = req.file.originalname.split('.')[1];
  const default_output = req.body.default_output || null;
  console.log(utils.documentFormats(), default_output);
  // return

  if (utils.documentFormats().includes(extension)){
    if (utils.validOutputs()[extension].includes(default_output)) {
      new Document(name, reference, tests_data, extension, default_output).save()
        .then(row => {
            res.json({
              "message":"Data inserted successfully!",
            })
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
              "error":"Failed to insert data"
            })
        });
    }
    else {
      res.status(422).json({
        "error": `${default_output} is not a valid default output for ${extension}.`
      })
    }
  }
  else {
    res.status(422).json({
      "error": `${extension} is not a valid document format to be a document templater. Must be one of ${utils.documentFormats()}.`
    })
  }

});

// Handle document delete on POST.
exports.document_delete_post = asyncHandler(async (req, res, next) => {
    try {
        const reference = req.params.reference;

        await Document.findOneDocument(reference).then(document => {

          const filePath = `src/templates/uploads/${document.reference}`;

          fs.unlink(filePath, async (err) => {
              if (err) {
                  console.error(err);
                  return res.status(500).json({ message: 'Error deleting file' });
              }

              await Document.deleteDocument(reference).then(deleteResult => {
                return res.status(200).json({ message: 'File and document deleted successfully' });  
              }).catch(error => {
                  console.error(error);
                  res.status(500).json({
                    "error":"Error deleting document'"
                  })
              });
               // Exclua o documento no banco de dados

          });
      })
      .catch(error => {
          console.error(error);
          res.status(500).json({
            "error":"Document not found"
          })
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
});

// Handle document update on PUT.
exports.document_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: document update PUT");
});

// Handle document generate on GET.
exports.document_generate_get = asyncHandler(async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: document generate GET");
  const reference = req.params.reference;
  const output_format = req.query.output_format || null;
  let data = typeof(req.body) == 'string' ? JSON.parse(req.body): req.body;
  data = typeof(data) == 'string' ? JSON.parse(data): data;
  await Document.findOneDocument(reference)
    .then(async row => {
        // res.json({
        //   "message":"success",
        //   "data":row || []
        // })
      const default_output = output_format || row.default_output
      if (utils.validOutputs()[row.extension].includes(default_output)) {
        const tests_data = JSON.parse(JSON.parse(row.tests_data))
        // data = typeof(data.data) == 'string' ? JSON.parse(data.data): data.data;
        // if (utils.isDictEmpty(data)){
        //   return res.status(400).json({
        //     "message":"The body of the requisition is empty.",
        //   })
        // }
        console.log(typeof data, typeof tests_data);
        console.log( data,  tests_data);
        // if (!utils.hasSameStructure(data, tests_data)){
        //   return res.status(422).json({
        //     "message":"Could not process because the structure of the input data is incompatible. Based on the example below:\n"+row.tests_data,
        //   })
        // }
        const params = {
          template: `src/templates/uploads/${row.reference}`,
          data: data,
          options: {
            convertTo : default_output, //can be docx, txt, pdf, odt ...
          }
        }
        utils.generateDocument(params)
          .then(result => {
            res.contentType(utils.getContentType(default_output));
            res.send(result);
          })
          .catch(error => {
            res.status(500).json({
              "message":error.message,
            })
          })
        }
        else {
          res.status(422).json({
            "error": `${default_output} is not a valid default output for ${row.extension}.`
          })
        }
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({
          "message":error.message,
        })
    });
});

// Handle document sandbox on GET.
exports.document_sandbox_get = asyncHandler(async (req, res, next) => {
  // res.send("NOT IMPLEMENTED: document sandbox GET");
  const reference = req.params.reference;
  const output_format = req.query.output_format || null;
  let data = typeof(req.body) == 'string' ? JSON.parse(req.body): req.body;
  data = typeof(data) == 'string' ? JSON.parse(data): data;
  console.log(data);
  // console.log(JSON.parse(req.body));
  // return
  await Document.findOneDocument(reference)
    .then(row => {
        // res.json({
        //   "message":"success",
        //   "data":row || []
        // })
      const default_output = output_format || row.default_output
      if (utils.validOutputs()[row.extension].includes(default_output)) {
        const tests_data = JSON.parse(JSON.parse(row.tests_data))
        data = typeof(data.data) == 'string' ? JSON.parse(data.data): data.data;
        console.log(tests_data.lines, typeof row.tests_data);
        // console.log(typeof(data), data);
        console.log(utils.isDictEmpty(tests_data));
        if (!utils.isDictEmpty(data) && !utils.hasSameStructure(data, tests_data)){
          return res.status(422).json({
            "message":"Could not process because the structure of the input data is incompatible. Based on the example below:\n"+row.tests_data,
          })
        }
        const params = {
          template: `src/templates/uploads/${row.reference}`,
          data: !utils.isDictEmpty(data) ? data : tests_data,
          options: {
            convertTo : default_output //can be docx, txt, pdf, odt ...
          }
        }
        utils.generateDocument(params)
          .then(result => {
            res.contentType(utils.getContentType(default_output));
            res.send(result);
          })
          .catch(error => {
            res.status(500).json({
              "message":error.message,
            })
          })
        }
        else {
          res.status(422).json({
            "error": `${default_output} is not a valid default output for ${row.extension}.`
          })
        }
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({
          "message":error.message,
        })
    });
});
