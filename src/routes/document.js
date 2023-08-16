const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');
const { Document } = require('../schemas/document');

// Require controller modules.
const document_controller = require("../controllers/documentController");

/// DOCUMENT ROUTES ///

/**
 * @swagger
 * components:
 *   schemas:
 *     Document:
 *       type: object
 *       properties:
 *         reference:
 *           type: string
 *           description: Document reference
 *         name:
 *           type: string
 *           description: Document's name
 *         tests_data:
 *           type: string
 *           description: Test data that will be used to sandbox and more...
 *         extension:
 *           type: string
 *           description: Document Extension...
 */


// POST request for creating Document.
router.post("/document/create", upload.single('document'), document_controller.document_create_post);

// POST request to delete Document.
/**
 * @swagger
 * /api/v1/document/{reference}/delete:
 *   delete:
 *     summary: Delete Document
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: true
 *         description: Document's reference
 *     responses:
 *       '200':
 *         description: Delete Document
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Document'
 */
router.delete("/document/:reference/delete", document_controller.document_delete_post);

// POST request to update Document.
router.put("/document/:reference/update", document_controller.document_update_post);

/**
 * @swagger
 * /api/v1/document/{reference}/generate:
 *   get:
 *     summary: Generate Document
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: true
 *         description: Document's reference
 *     responses:
 *       '200':
 *         description: Generate Documents
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get("/document/:reference/generate", document_controller.document_generate_get);

/**
 * @swagger
 * /api/v1/document/{reference}/sandbox:
 *   get:
 *     summary: SandBox Document
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: false
 *         description: Document's reference
 *     responses:
 *       '200':
 *         description: SandBox Documents
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get("/document/:reference/sandbox", document_controller.document_sandbox_get);

/**
 * @swagger
 * /api/v1/document/{reference}:
 *   get:
 *     summary: Get Document
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: true
 *         description: Document's reference
 *     responses:
 *       '200':
 *         description: Get Documents
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *             example:
 *               name: Jessica Smith
 *               reference: ...
 *               test_data: ...
 *               extension: odt
 */
router.get("/document/:reference", document_controller.document_detail);

/**
 * @swagger
 * /api/v1/documents:
 *   get:
 *     summary: Get list of all Documents
 *     responses:
 *       '200':
 *         description: List of all Documents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Document'
 */
router.get("/documents", document_controller.document_list);

module.exports = router;