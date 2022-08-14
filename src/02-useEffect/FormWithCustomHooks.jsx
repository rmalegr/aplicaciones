//import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
//import { Message } from './Message';
//EL useEffect se usa para dispara efectos secundarios

export const FormWithCustomHooks = () => {
  const { onResetForm, onInputChange, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  });

  //const { username, password, email } = formState;

  // useEffect(() => {
  //   // es unasimple funcion que tiene un callback
  //   console.log('useEffect called');
  // }, []);

  // useEffect(() => {
  //   // es unasimple funcion que tiene un callback
  //   console.log('formState changed');
  // }, [formState]);

  // useEffect(() => {
  //   // es unasimple funcion que tiene un callback
  //   console.log('email changed');
  // }, [email]);

  return (
    <>
      <h1>Formulario con custom Hooks </h1>
      <hr />
      <input
        type="text"
        className="form-control-lg"
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

      <input
        type="password"
        className="form-control"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      {/* <Message /> mostrar este mensaje si existe el usuario  */}
      {/* {username === 'Rodrigo' && <Message />} */}
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
