import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Label, Input } from '../styles';

const Formulario = () => {
  const [nome, setNome] = React.useState('');
  const [curso, setCurso] = React.useState('');
  const [trancado, setTrancado] = React.useState('');
  const [dados, setDados] = React.useState();
  const navigate = useNavigate();
  const ref = React.useRef();
  const params = useParams();

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
    navigate('/alunos');
  };

  const handleClick = async () => {
    if (params.id) {
      await fetch(`http://localhost:3000/alunos/editar/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, curso, trancado }),
      });
    } else {
      await fetch('http://localhost:3000/alunos/adicionar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, curso, trancado }),
      });
    }
  };

  if (params.id) {
    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          `http://localhost:3000/alunos/${params.id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const data = await response.json();
        setDados(data);
        setNome(data[0].nome);
        setCurso(data[0].curso);
        setTrancado(data[0].trancado);
        ref.current.nome.value = data[0].nome;
        ref.current.curso.value = data[0].curso;
      }
      fetchData();
    }, [params.id]);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} ref={ref}>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" type={'text'} onChange={handleNome} />
        <Label htmlFor="curso">Curso</Label>
        <Input id="curso" type={'text'} onChange={handleCurso} />
        <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>Trancado?</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Label htmlFor="sim">Sim</Label>
          <Input
            value="Sim"
            id="sim"
            checked={trancado === 'Sim'}
            type={'radio'}
            onChange={handleChange}
            radio
          />
          <Label htmlFor="nao">Não</Label>
          <Input
            value="Não"
            id="nao"
            checked={trancado === 'Não'}
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
