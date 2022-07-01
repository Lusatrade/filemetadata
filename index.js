var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended:false}))




app.post("/api/fileanalyse",upload.single('upfile'), (req, res) => {
  const result = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  }
  res.json(result)
});



app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
