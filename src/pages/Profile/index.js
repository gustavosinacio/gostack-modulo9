import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { logout } from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSumit(data) {
    console.tron.log(data);
    dispatch(updateProfileRequest(data));
  }

  function handleLogout() {
    history.push('/dashboard');
    dispatch(logout());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSumit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />
        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleLogout}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
