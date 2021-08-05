import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import recipesMiddleware from '../middlewares/recipesMiddlewares';

const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
