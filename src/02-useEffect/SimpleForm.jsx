import { useState, useEffect } from 'react';
import { Message } from './Message';
//EL useEffect se usa para dispara efectos secundarios
export const Simpleform = () => {
  const [formState, setFormState] = useState({
    username: 'Rodrigo',
    email: 'rodrigomalegre',
  });

  // useEffect(() => { Montamos y desmontamos el componente
  //   first aca creamos algun tipo de obserbable  para evitar que siga cosumiendo memoria

  //   return () => {
  //     second
  //   }
  // }, [third]) Arreglo de dependencias

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    // es unasimple funcion que tiene un callback
    console.log('useEffect called');
  }, []);

  useEffect(() => {
    // es unasimple funcion que tiene un callback
    console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    // es unasimple funcion que tiene un callback
    console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Formulario F</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <br />
      <input
        type="email"
        className="form-control"
        placeholder="rodrigomalegre@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {/* <Message /> mostrar este mensaje si existe el usuario  */}
      {username === 'Rodrigo' && <Message />}
    </>
  );
};
