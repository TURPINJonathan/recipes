import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

// === mapStateToProps
const mapStateToProps = (state) => ({
  recipes: state.recipes.recipesList,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
