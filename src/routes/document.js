const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');

// Require controller modules.
const document_controller = require("../controllers/documentController");

/// DOCUMENT ROUTES ///

// POST request for creating Document.
router.post("/document/create", upload.single('document'), document_controller.document_create_post);

// POST request to delete Document.
router.post("/document/:reference/delete", document_controller.document_delete_post);

// POST request to update Document.
router.put("/document/:reference/update", document_controller.document_update_post);

// GET request to generate Document.
router.get("/document/:reference/generate", document_controller.document_generate_get);

// GET request to sandbox Document.
router.get("/document/:reference/sandbox", document_controller.document_sandbox_get);

// GET request for one Document.
router.get("/document/:reference", document_controller.document_detail);

// GET request for list of all Document items.
router.get("/documents", document_controller.document_list);

module.exports = router;