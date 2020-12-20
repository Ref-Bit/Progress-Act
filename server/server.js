const express = require('express');
const cors = require('cors');
const multer = require('multer');

const upload = multer();
const app = express();
const PORT = process.env.PORT || 5000;
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

// Transfer request body into JSON
app.use(express.json());

// Allow cross origin from client localhost
app.use(cors());

// Creating POST endpoint

app.post('/file', upload.single('file'), (req, res) => {
  // Here you can do anything you want with the file i.e. Save it to database
  res.json({
    success: true,
    status: 200,
    message: 'File Uploaded Successfully',
    data: {
      fileName: req.file.originalname,
      size: formatBytes(req.file.size),
      mimetype: req.file.mimetype,
    },
  });
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server is live on port ${PORT}...🚀🚀🚀`);
});
