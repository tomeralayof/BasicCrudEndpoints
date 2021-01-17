const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect('mongodb://localhost/rest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

const router = require("./routers/users");
app.use("/api/users", router); 

const PORT = 8181;
app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`)});