const Joi = require('joi');

const document = Joi.object({
  reference: Joi.string().description("Document reference").required(),
  name: Joi.string().description("Document's name").required(),
  tests_data: Joi.string().min(6).description("Test data that will be used to sandbox and more...").required(),
  extension: Joi.string().min(1).description("Document Extension").required(),
});

module.exports = document;
