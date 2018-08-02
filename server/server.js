const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/index.js')


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.listen(3000, () => console.log('server is connected'));
