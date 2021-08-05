/* authentification's actions */

// === action types
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

// === action creators
export const updateLoginField = (newValue, name) => ({
  type: UPDATE_LOGIN_FIELD,
  newValue: newValue,
  name: name,
});
