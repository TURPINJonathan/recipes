import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA } from '../actions/auth';

const initialState = {
  email: '',
  password: '',
  // user is connect ?
  logged: false,
  // user's nickname
  nickname: null,
  // token
  token: null,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        logged: action.logged,
        token: action.token,
        nickname: action.nickname,
      };

    default:
      return state;
  }
}

export default authReducer;
