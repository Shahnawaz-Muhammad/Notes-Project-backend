const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./routes/Users');
require('dotenv/config');
app.use(bodyParser.json());
app.use(express.json());

app.use('/users', userRoute);
const DB =
  'mongodb+srv://shani:shani@firstcluster.ktzd6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('COnnected to DB');
  })
  .catch((err) => console.log('no Connection' + err));

app.listen(8008, () => console.log('Listening'));
