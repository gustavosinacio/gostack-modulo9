import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }

      case '@auth/SIGN_UP_SUCCESS': {
        console.tron.log('SIGN UP SUCCESS');
        break;
      }

      case '@auth/SIGN_UP_FAILURE': {
        console.tron.log('SIGN UP FAILURE');
        break;
      }

      default:
        return state;
    }
  });
}
