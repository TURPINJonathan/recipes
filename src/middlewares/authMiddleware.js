import axios from 'axios';
import { LOG_IN } from '../actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware auth: ', action);

  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().auth;

      axios.post(
        'http://localhost:3001/login',
        {
          email: email,
          password: password,
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
  }

  next(action);
};

export default authMiddleware;
