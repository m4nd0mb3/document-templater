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
 *           type: object
 *           description: Test data that will be used to sandbox and more...
 *         extension:
 *           type: string
 *           description: Document Extension...
 *         default_output:
 *           type: string
 *           enum:
 *           - pdf
 *           - docx
 *           - txt
 *           description: Default Output Document format if no one was provided...
 *       required:
 *       - reference
 *       - name
 *       - tests_data
 *       - extension
 */


// POST request for creating Document.
/**
 * @swagger
 * /api/v1/document/create:
 *   post:
 *     summary: Creating Document
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               tests_data:
 *                 type: object
 *               default_output:
 *                 type: string
 *                 enum:
 *                 - pdf
 *                 - docx
 *                 - xml
 *                 - html
 *                 - odt
 *                 - doc
 *                 - docx
 *                 - txt
 *                 - jpg
 *                 - png
 *                 - epub
 *                 - ods
 *                 - xlsx
 *                 - xls
 *                 - csv
 *                 - odp
 *                 - ppt
 *                 - pptx
 *                 - idml
 *               document:
 *                 type: string
 *                 format: binary
 *             required:
 *               - document
 *               - tests_data
 *               - default_output
 *     responses:
 *       '200':
 *         description: Creating Document
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 */
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
 *   post:
 *     summary: Generate Document
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: true
 *         description: Document's reference
 *       - in: query
 *         name: output_format
 *         schema:
 *           type: string
 *           enum:
 *             - pdf
 *             - docx
 *             - xml
 *             - html
 *             - odt
 *             - doc
 *             - docx
 *             - txt
 *             - jpg
 *             - png
 *             - epub
 *             - ods
 *             - xlsx
 *             - xls
 *             - csv
 *             - odp
 *             - ppt
 *             - pptx
 *             - idml
 *         required: false
 *         description: Document's output format
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *             required:
 *               - data
 *     responses:
 *       '200':
 *         description: Generate Documents
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */
router.post("/document/:reference/generate", document_controller.document_generate_get);

/**
 * @swagger
 * /api/v1/document/{reference}/sandbox:
 *   post:
 *     summary: SandBox Document
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: false
 *         description: Document's reference
 *       - in: query
 *         name: output_format
 *         schema:
 *           type: string
 *           enum:
 *             - pdf
 *             - docx
 *             - xml
 *             - html
 *             - odt
 *             - doc
 *             - docx
 *             - txt
 *             - jpg
 *             - png
 *             - epub
 *             - ods
 *             - xlsx
 *             - xls
 *             - csv
 *             - odp
 *             - ppt
 *             - pptx
 *             - idml
 *         required: false
 *         description: Document's output format
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *     responses:
 *       '200':
 *         description: SandBox Documents
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: file
 *               format: binary
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: base64
 */
router.post("/document/:reference/sandbox", document_controller.document_sandbox_get);

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