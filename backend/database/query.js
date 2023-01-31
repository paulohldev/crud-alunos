const connection = require('./db');

const queryConsult = (query, ...rest) => {
  return connection
    .promise()
    .query(query, ...rest)
    .then((result) => result[0])
    .catch((error) => error);
};

const findAll = () => {
  return queryConsult('SELECT * FROM alunos');
};

const findById = (id) => {
  return queryConsult(`SELECT * FROM alunos WHERE id = ?`, id);
};

const addAluno = async (aluno) => {
  return queryConsult(
    `INSERT INTO alunos (nome, curso, trancado) VALUES (?,?,?)`,
    [aluno.nome, aluno.curso, aluno.trancado],
  );
};

const deleteAluno = (id) => {
  return queryConsult(`DELETE FROM alunos WHERE id = ?`, id);
};

const editAluno = (aluno, id) => {
  return queryConsult(
    `UPDATE alunos SET nome = ?, curso = ?, trancado = ? WHERE id = ?`,
    [aluno.nome, aluno.curso, aluno.trancado, id],
  );
};

module.exports = {
  findAll,
  findById,
  addAluno,
  deleteAluno,
  editAluno,
};
