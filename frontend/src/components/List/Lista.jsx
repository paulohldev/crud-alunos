import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Link';
import { Table, TableRow, Thead, Tdata, Tbody } from '../styles';

const Lista = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const dados = await fetch('http://localhost:3000/alunos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await dados.json();
    setData(json);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const removeAluno = async (id) => {
    await fetch(`http://localhost:3000/alunos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigate('/alunos');
  };

  return (
    <>
      <Button />
      <Table>
        <Tbody>
          <TableRow>
            <Thead>ID</Thead>
            <Thead>Nome</Thead>
            <Thead>Curso</Thead>
            <Thead>Trancado</Thead>
            <Thead colSpan={2}>Opções</Thead>
          </TableRow>
          {data.map((aluno, index) => {
            return (
              <TableRow key={index}>
                <Tdata>{aluno.id}</Tdata>
                <Tdata>{aluno.nome}</Tdata>
                <Tdata>{aluno.curso}</Tdata>
                <Tdata>{aluno.trancado}</Tdata>

                <Tdata>
                  <Link to={`editar/${aluno.id}`}>Editar</Link>
                </Tdata>

                <Tdata>
                  <Link to={'/alunos'} onClick={() => removeAluno(aluno.id)}>
                    Remover
                  </Link>
                </Tdata>
              </TableRow>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default Lista;
