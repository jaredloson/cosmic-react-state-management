// Setting up an object where we will store any extra functionality 
// that needs to run when performing particular actions on the app state.

// The keys of this middleware object map to the `type` of an action.
// When running that action.type, we check this object to see if there's
// anything else we want to do. Look in `./reducer.js` to see it being used.

export const middleware = {};


// `registerMiddleware` is how we define any middleware functions we want
// to run while updating the global state. We pass this function the name
// of the action `type`, and the middleware function we want it to run.
// The middleware functions are added as an array so we can define more than
// one if necessary.

export const registerMiddleware = ({ actionType, func }) => {
  if (Array.isArray(middleware[actionType])) {
    middleware[actionType].push(func);
  } else {
    middleware[actionType] = [func];
  }
}

export default { middleware, registerMiddleware };
