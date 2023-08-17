
const carbone = require('carbone');

function hasSameStructure(obj1, obj2) {
  // Se os dois objetos não forem do mesmo tipo, eles têm estruturas diferentes
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Se forem primitivos (números, strings, booleans, etc.), têm a mesma estrutura
  if (typeof obj1 !== 'object' || obj1 === null) {
    return true;
  }

  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return true; // Ambos os dicionários estão vazios
  }

  // Verificar se os objetos têm as mesmas chaves
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (keys1.join() !== keys2.join()) {
    return false;
  }

  // Verificar a estrutura recursivamente para os valores das chaves
  for (const key of keys1) {
    if (!hasSameStructure(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

async function generateDocument(params) {
    try {
        const {template, data, options} = params;
        const result = await new Promise((resolve, reject) => {
            carbone.render(template, data, options, (err, file) => {
                if (err) {
                    reject(err);
                }
                resolve(file);
            });
        });

        return result;
    } catch (err) {
        throw Error('Error generating document | '+ err);
    }
    
}

function isDictEmpty(dict) {
    return dict === null || dict === undefined || Object.keys(dict).length === 0
}

exports.documentFormats = () =>{ return [
    'xml',
    'html',
    'odt',
    'ods',
    'odp',
    'docx',
    'xlsx',
    'pptx',
    'odg',
    'idml'
  ];
}

exports.validOutputs = () =>{ return {
    xml: ['xml'],
    html: ['pdf', 'html'],
    odt: ['odt', 'doc', 'docx', 'pdf', 'txt', 'jpg', 'png', 'epub'],
    ods: ['ods', 'xlsx', 'xls', 'csv', 'pdf', 'txt'],
    odp: ['odp', 'ppt', 'pptx', 'pdf', 'jpg', 'png'],
    docx: ['odt', 'doc', 'docx', 'pdf', 'txt', 'jpg', 'png', 'epub'],
    xlsx: ['ods', 'xlsx', 'xls', 'csv', 'pdf', 'txt'],
    pptx: ['odp', 'ppt', 'pptx', 'pdf'],
    odg: ['pdf', 'jpg', 'png'],
    idml: ['idml'],
    // ... e assim por diante para cada formato
  };
}

exports.getContentType = (format) => {
  let contentType = '';

  switch (format) {
    case 'pdf':
      contentType = 'application/pdf';
      break;
    case 'doc':
    case 'docx':
      contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      break;
    case 'txt':
      contentType = 'text/plain';
    case 'html':
      contentType = 'text/html';
      break;
    case 'jpg':
    case 'jpeg':
      contentType = 'image/jpeg';
      break;
    case 'png':
      contentType = 'image/png';
      break;
    case 'epub':
      contentType = 'application/epub+zip';
      break;
    case 'ods':
    case 'xlsx':
    case 'xls':
      contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      break;
    case 'csv':
      contentType = 'text/csv';
      break;
    case 'odp':
    case 'pptx':
    case 'ppt':
      contentType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
      break;
    default:
      contentType = null;
      break;
      // res.status(400).send('Formato de documento inválido');
      // return;
  }
  return contentType
}

exports.hasSameStructure = hasSameStructure;
exports.generateDocument = generateDocument;
exports.isDictEmpty = isDictEmpty;

// // Exemplo de uso para test:
// const obj1 = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     country: 'USA',
//   },
// };

// const obj2 = {
//   name: 'Jane',
//   age: 25,
//   address: {
//     city: 'San Francisco',
//     country: 'USA',
//   },
// };

// const obj3 = {
//   name: 'Alice',
//   age: 28,
//   address: {
//     city: 'Los Angeles',
//     country: 'USA',
//   },
// };

// console.log(hasSameStructure(obj1, obj2)); // true
// console.log(hasSameStructure(obj1, obj3)); // true
// console.log(hasSameStructure(obj2, obj3)); // true
