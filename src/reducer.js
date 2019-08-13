import { middleware } from "./middleware"; 

const bundleReducer = reducer => (state, action) => {
  // First check if this action has any "middleware" functionality we want to run
  if (Array.isArray(middleware[action.type])) {
    middleware[action.type].forEach(func => func(action));
  }

  const newState = {};
  // Then return the new object state based on the results
  // of our individual reducers
  Object.keys(reducer).forEach(key => {
    newState[key] = reducer[key](state[key], action);
  });

  return newState;  
};

export default bundleReducer;
