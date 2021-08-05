import { combineReducers } from 'redux';

import recipesReducer from './recipesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  auth: authReducer,
});

export default rootReducer;
