const express = require('express');
const cors = require('cors');
const multer = require('multer');

const upload = multer();
const app = express();
const PORT = process.env.PORT || 5000;

// Transfer request body into JSON
app.use(express.json());

// Allow cross origin from client localhost
app.use(cors());

// Creating POST endpoint

app.post('/file', upload.single('file'), (req, res) => {
  console.log('body', req.file.length, req.file);

  // Here you can do anything you want with the file i.e. Save it to database
  res.json({ success: true, status: 200 });
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server is live on port ${PORT}...🚀🚀🚀`);
});
