import { UPDATE_LOGIN_FIELD } from '../actions/auth';

const initialState = {
  email: '',
  password: '',
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      if (action.name === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
      };

    default:
      return state;
  }
}

export default authReducer;
