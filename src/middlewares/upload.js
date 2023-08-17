const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/templates/uploads/');
  },
  filename: (req, file, cb) => {
    // let extension = file.originalname.split('.')
    // extension = extension[extension.length-1];
    cb(null, uuidv4() );
    // cb(null, uuidv4() + '.' + extension);
    // cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;