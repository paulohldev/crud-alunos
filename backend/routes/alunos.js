const express = require('express');
const router = express.Router();

const query = require('../database/query');

router.get('/', async (req, res) => {
  try {
    const result = await query.findAll();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const paramsID = req.params.id;
  res.send(await query.findById(paramsID));
});

router.post('/adicionar', async (req, res) => {
  const body = req.body;

  if (!req.body.nome || !req.body.curso || !req.body.trancado) {
    return res
      .status(400)
      .json({ error: 'Erro, os dados não foram preenchidos corretamente.' });
  }
  await query.addAluno(body);
  res.status(200).send(body);
});

router.delete('/:id', async (req, res) => {
  const paramsID = req.params.id;

  await query.deleteAluno(paramsID);
  res.status(200).send('Aluno Deletado');
});

router.put('/editar/:id', async (req, res) => {
  const paramsID = req.params.id;
  console.log(paramsID);
  console.log(req.body);
  if (!req.body.nome || !req.body.curso || !req.body.trancado) {
    return res
      .status(400)
      .json({ error: 'Erro, os dados não foram preenchidos corretamente.' });
  }

  await query.editAluno(req.body, paramsID);
  res.status(200).send('Aluno Editado');
});

module.exports = router;
