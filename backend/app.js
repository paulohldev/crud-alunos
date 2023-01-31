const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json());

// headers
app.use((req, res, next) => {
  res.header({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  });
  next();
});

// Rotas
const indexRouter = require('./routes/index');
const alunosRouter = require('./routes/alunos');

app.use('/', indexRouter);
app.use('/alunos', alunosRouter);

app.listen(3000);
