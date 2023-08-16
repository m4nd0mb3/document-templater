const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Document Templater',
      version: '0.2.0',
      description: 'Document Templater is a powerful and flexible microservice designed to simplify the generation of complex, personalised documents from predefined templates. Combining ease of use with the ability to create highly personalised documents, this microservice is ideal for automating the process of generating reports, contracts, forms and more.',
    },
  },
  apis: ['src/routes/*.js'], // Substitua pelo caminho das suas rotas
  customfavIcon: 'src/locales/Doc.png'
};

const specs = swaggerJsdoc(options);

module.exports = specs;
