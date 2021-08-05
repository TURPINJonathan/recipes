import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { updateLoginField } from '../../actions/auth';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateLoginField(newValue, name);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
