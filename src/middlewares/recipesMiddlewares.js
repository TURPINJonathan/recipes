import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_RECIPES:
      // console.log('on va envoyer une requête pour récupérer les recettes');
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          const newAction = saveRecipes(response.data);
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  next(action);
};

export default recipesMiddleware;
