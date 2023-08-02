const Document = require("../models/document");
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
  const reference = req.params.id;
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
  const tests_data = JSON.stringify(req.body);
  const name = req.file.originalname.split('.')[0];

  new Document(name, reference, tests_data).save()
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

});

// Handle document delete on POST.
exports.document_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: document delete POST");
});

// Handle document update on PUT.
exports.document_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: document update PUT");
});
