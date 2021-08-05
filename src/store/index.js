import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import recipesMiddleware from '../middlewares/recipesMiddlewares';
import authMiddleware from '../middlewares/authMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
    authMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
