import { SAVE_RECIPES, SAVE_FAVORITES } from 'src/actions/recipes';

const initialState = {
  recipesList: [],
  favorites: [],
  recipesLoaded: false,
};

function recipesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipesList: action.recipes,
        recipesLoaded: true,
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
