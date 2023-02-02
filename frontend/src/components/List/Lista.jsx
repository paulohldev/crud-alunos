import React from 'react';
import Button from '../Link';
import { Table, TableRow, Thead, Tdata, Tbody } from '../styles';

const Lista = () => {
  const [data, setData] = React.useState([]);

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
    console.log(data);
  }, []);

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
                <Tdata>Editar</Tdata>
                <Tdata>Remover</Tdata>
              </TableRow>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default Lista;
