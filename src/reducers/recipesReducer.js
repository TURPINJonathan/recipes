import recipes from 'src/data';

const initialState = {
  recipesList: recipes,
};

function recipesReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default recipesReducer;
