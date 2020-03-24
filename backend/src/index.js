const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

mongoose.connect(
  "mongodb+srv://goweek:goweek123@estudos-tiagoga-n0n6h.mongodb.net/test?retryWrites=true&w=majority",
  {useNewUrlParser:true}
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
  console.log('E funciona')
});