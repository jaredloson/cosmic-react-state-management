# App State

This is a redux-like approach to state management using React's [Context API](https://reactjs.org/docs/context.html) and the [useReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer). Basic understanding of these concepts is helpful.

## Inspired by this blog post
[State Management with React Hooks and Context API in 10 lines of code!](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c)

## Basic Idea
We set up a `context` provider that wraps the entire app. The `value` of that context provider is the result of the `useReducer` hook, which includes the current state, plus a `dispatch` function for updating the state.

## Installation notes
`yarn add https://github.com/jaredloson/cosmic-react-state-management.git`

> Currently, this requires the repo to be `public`

## How to Use

1. Set up your `initialState` and `reducer`, and pass these to the `createAppState` function.
```
// src/state.js

import { createAppState } from "cosmic-react-state-management";

// Redux-like switch statement reducer 
const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        color: action.newTheme,
      };
      
    default:
      return state;
  }
};

// An object with the initial app state
const initialState = {
  theme: "light",
};

// After passing the reducer and initial state, `createAppState` returns a
// React Context provider, consumer, and hook for getting/setting the app state
export const { AppStateProvider, AppStateConsumer, useAppState } = createAppState(reducer, initialState);

export default {
  AppStateProvider,
  AppStateConsumer,
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

3. Get/set state using `useAppState` in functional components.
```
// src/components/ThemeChanger.js

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

4. Get/set state using `AppStateConsumer` in class-based components
```
// src/components/ThemeChangerClass.js

import { AppStateConsumer } from "../state";

class ThemeChangerClass extends React.Component {

  constructor() {
    super();
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme({ theme }, dispatch) {
    dispatch({
      type: "changeTheme",
      newTheme: theme === "light" ? "dark" : "light",
    });
  }

  render() {
    return (
      <AppStateConsumer>
        {([ state, dispatch ]) => {
          return(
            <button 
              type="button"
              onClick={() => this.changeTheme(state, dispatch)}
            >Change Theme</button>
          );
        }}
      </AppStateConsumer>
    );
  }
}

export default ThemeChangerClass;
```

5. Multiple reducers 
```
// combine the reducers and initialState into single objects before passing to `createAppState`

const reducer = {
  theme: // theme reducer,
  user: // user reducer, e.g., logged-in status,
  nav: // nav reducer, e.g., mobile nav showing
}

const initialState = {
  theme: // theme initial state,
  user: // user initial state,
  nav: // nav initial state,
}

export const { AppStateProvider, AppStateConsumer, useAppState } = createAppState(reducer, initialState);
```


6. Running "middleware" functions before changing state
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
- move repo to `@designbycosmic` org
