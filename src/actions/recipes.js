// === action types
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';

// action creators
export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes: recipes,
});

export const fetchFavorites = () => ({
  type: FETCH_FAVORITES,
});
