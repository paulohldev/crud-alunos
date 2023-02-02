import React from 'react';
import { Form, Label, Input } from '../styles';

const Formulario = () => {
  const [nome, setNome] = React.useState('');
  const [curso, setCurso] = React.useState('');
  const [trancado, setTrancado] = React.useState('');

  const handleChange = ({ target }) => {
    setTrancado(target.value);
  };

  const handleNome = ({ target }) => {
    setNome(target.value);
  };

  const handleCurso = ({ target }) => {
    setCurso(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fetch('http://localhost:3000/alunos/adicionar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, curso, trancado }),
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" type={'text'} onChange={handleNome} />
        <Label htmlFor="curso">Curso</Label>
        <Input id="curso" type={'text'} onChange={handleCurso} />
        <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>Trancado?</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Label htmlFor="sim">Sim</Label>
          <Input
            value="Sim"
            checked={trancado === 'Sim'}
            id="sim"
            type={'radio'}
            onChange={handleChange}
            radio
          />
          <Label htmlFor="nao">Não</Label>
          <Input
            value="Não"
            checked={trancado === 'Não'}
            id="nao"
            type={'radio'}
            onChange={handleChange}
            radio
          />
        </div>
        <button onClick={handleClick}>Enviar</button>
      </Form>
    </>
  );
};

export default Formulario;
