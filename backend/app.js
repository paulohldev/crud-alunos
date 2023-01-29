const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Rotas
const indexRouter = require('./routes/index');
const alunosRouter = require('./routes/alunos');

// middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/alunos', alunosRouter);
app.use((req, res) => {
  res.header({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  });
});

app.listen(3000);
