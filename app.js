/** @format */

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
//mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected,,'))
  .catch(err => console.log(err));
// middleware

//app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

//app.use(notFound);
//app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
