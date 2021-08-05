import { SAVE_RECIPES } from 'src/actions/recipes';

const initialState = {
  recipesList: [],
};

function recipesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipesList: action.recipes,
      };

    default:
      return state;
  }
}

export default recipesReducer;
