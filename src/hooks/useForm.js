import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  // username: 'Rodrigo',
  // email: 'rodrigomalegre@gmail.com',
  // password: '123456',

  const [formState, setFormState] = useState(initialForm);

  // const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return (
    //le retornamos el formState

    formState, onInputChange, onResetForm
  );
};
