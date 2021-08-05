import { connect } from 'react-redux';

import Recipe from 'src/components/Recipe';

// === mapStateToProps
const mapStateToProps = (state) => ({
  recipes: state.recipes.recipesList,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
