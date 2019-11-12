import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signUpSucess, signFailure } from './actions';

// -----------------------------------------------------------------------------
const routeRedirect = '/dashboard';
// -----------------------------------------------------------------------------
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Este usuário não é um prestador.');
      yield put(signFailure());

      return;
    }

    yield put(signInSuccess(token, user));

    history.push(routeRedirect);
  } catch (err) {
    toast.error(
      'Falha na autenticação. Verifique seus dados e tente novamente.'
    );
    console.tron.log(err.response.data.error);

    yield put(signFailure());
  }
}
// -----------------------------------------------------------------------------
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    const { name: newName, email: newEmail } = response.data;

    toast.success('Cadastro realizado com sucesso!');

    yield put(signUpSucess(newName, newEmail));

    history.push(routeRedirect);
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      toast.error(err.response.data.error);
      console.tron.log(err.response.data.error);
    } else {
      toast.error('Falha ao criar cadastro. Verifique seus dados.');
      console.tron.log(err);
    }
    yield put(signFailure());
  }
}
// -----------------------------------------------------------------------------
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
