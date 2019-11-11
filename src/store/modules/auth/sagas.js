import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signUpSucess, signUpFailure } from './actions';

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

    history.push('/dashboard');
  } catch (err) {
    toast.error(
      'Falha na autenticação. Verifique seus dados e tente novamente.'
    );
    console.log(err.response);
    yield put(signFailure());
  }
}
// -----------------------------------------------------------------------------

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    const { name: newName, email: newEmail } = response.data;

    // toast.success('Provedor cadastrado com sucesso');

    yield put(signUpSucess(newName, newEmail));

    history.push('/dashboard');
  } catch (err) {
    yield put(signUpFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
