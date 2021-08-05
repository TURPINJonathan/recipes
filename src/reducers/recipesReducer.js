import { SAVE_RECIPES, SAVE_RECIPES } from 'src/actions/recipes';

const initialState = {
  recipesList: [],
  favorites: [],
};

function recipesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipesList: action.recipes,
      };

    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };

    default:
      return state;
  }
}

export default recipesReducer;
