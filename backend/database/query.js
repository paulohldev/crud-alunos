const connection = require('./db');

const findAll = () => {
  return connection
    .promise()
    .query('SELECT * FROM alunos')
    .then((result) => result[0])
    .catch((error) => error);
};

const findById = (id) => {
  return connection
    .promise()
    .query(`SELECT * FROM alunos WHERE id = ?`, [id])
    .then((result) => result[0])
    .catch((error) => error);
};

const addAluno = async (aluno) => {
  return connection
    .promise()
    .query(`INSERT INTO alunos (nome, curso, trancado) VALUES (?,?,?)`, [
      aluno.nome,
      aluno.curso,
      aluno.trancado,
    ])
    .then((result) => result[0])
    .catch((err) => err);
};

const deleteAluno = (id) => {
  return connection
    .promise()
    .query(`DELETE FROM alunos WHERE id = ?`, [id])
    .then((result) => result[0])
    .catch((err) => err);
};

const editAluno = (aluno, id) => {
  return connection
    .promise()
    .query(`UPDATE alunos SET nome = ?, curso = ?, trancado = ? WHERE id = ?`, [
      aluno.nome,
      aluno.curso,
      aluno.trancado,
      id,
    ])
    .then((result) => result)
    .catch((err) => err);
};

module.exports = {
  findAll,
  findById,
  addAluno,
  deleteAluno,
  editAluno,
};
