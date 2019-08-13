# App State

This is a redux-like approach to state management using React's [Context API](https://reactjs.org/docs/context.html) and the [useReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer). Basic understanding of these concepts is required.

## Inspired by this blog post
[State Management with React Hooks and Context API in 10 lines of code!](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c)

## Basic Idea
We set up a `context` provider that wraps the entire app. The `value` of that context provider is the result of the `useReducer` hook, which includes the current state, plus a `dispatch` function for updating the state.

## How to Use

1. Set up your `initialState` and `reducer`, and pass these to the `createAppState` function.
```
// src/state.js

import { createAppState } from "cosmic-react-state-management";

const initialState = {
  theme: 'light',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        color: action.newTheme,
      };
      
    default:
      return state;
  }
};

export const { AppStateProvider, useAppState } = createAppState(reducer, initialState);

export default {
  AppStateProvider,
  useAppState,
};
```

2.  Wrap the app in the AppStateProvider. To do this in Gatsby, we have to export a function named `wrapRootElement` in `gatsby-browser.js`
```
// gatsby-browser.js

import React from 'react';
import { AppStateProvider } from "./src/state";

export const wrapRootElement = ({ element }) => {
  return (
    <AppStateProvider>{element}</AppStateProvider>
  );
}
```

3. Use app state in your components.
```
// src/ThemeChanger.js

import React, { useContext } from "react";
import { useAppState } from "../state";

const ThemeChanger = () => {
  const [{ theme }, dispatch] = useAppState();
  
  const changeTheme = dispatch({
    type: "changeTheme",
    newTheme: theme === "light" ? "dark" : "light",
  });

  return (     
    <Button type="button" onPress={changeTheme}>Change Theme</button> 
  );
};

export default ThemeChanger;
```

4. If needed, register a middleware function to run before updating state. This is useful if there's extra functionality that is always related to a particular state change.
```
// src/state.js

import { registerMiddleware } from "cosmic-react-state-management";

registerMiddleware({
  actionType: "changeTheme",
  func: ({ newTheme }) => {
    // track theme changes in Google Analytics
    ga.send("userChangedTheme", newTheme);
  },
});

```
> It makes sense to call `registerMiddleware` from wherever you define your reducer.

## TODO
- Add examples (basic, multiple reducers)
- Add tests?
