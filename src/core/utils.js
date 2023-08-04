
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
