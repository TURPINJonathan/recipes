import { UPDATE_LOGIN_FIELD } from '../actions/auth';

const initialState = {
  email: '',
  password: '',
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    default:
      return state;
  }
}

export default authReducer;
