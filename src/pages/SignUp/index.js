import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/icon.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const minPass = 6;

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatrório.'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail obrigatório.'),
  password: Yup.string()
    .min(
      minPass,
      `A senha precisa conter no mínimo ${minPass.toString()} caracteres.`
    )
    .required('Senha obrigatória.'),
});

export default function SignUp() {
  const dispacth = useDispatch();

  function handleSubmit({ name, email, password }) {
    // console.tron.log(data);

    dispacth(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" width={130} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
