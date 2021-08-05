import { FETCH_RECIPES } from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_RECIPES:
      console.log('on va envoyer une requête pour récupérer les recettes');
      break;

    default:
  }

  next(action);
};

export default recipesMiddleware;
