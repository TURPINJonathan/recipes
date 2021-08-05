import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { updateLoginField, logIn } from '../../actions/auth';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateLoginField(newValue, name);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
