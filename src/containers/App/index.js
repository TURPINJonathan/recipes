import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchRecipes } from '../../actions/recipes';

// === mapStateToProps
const mapStateToProps = (state) => ({
  recipesLoaded: state.recipes.recipesLoaded,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadRecipes: () => {
    dispatch(fetchRecipes());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
