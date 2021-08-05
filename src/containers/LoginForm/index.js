import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
