import { connect } from 'react-redux';

import Home from 'src/components/Home';

// === mapStateToProps
const mapStateToProps = (state) => ({
  recipes: state.recipes.recipesList,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
