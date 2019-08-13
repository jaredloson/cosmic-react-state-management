import React, {createContext, useContext, useReducer} from "react";
import { bundleReducer } from "./reducer";

// This combines React's `context` with the `useReducer` hook to implement global app state.

// We export one function that is used to
// (1) create an AppStateProvider, which provides access to the app state via the React Context API
// (2) `useAppState` which is a custom hook that can be used to access app state in functional components
// (3) `AppStateConsumer` which can be used to access app state in class-based components

export const createAppState = (rawReducer, initialState) => {
  // Create a reducer suitable for use in the useReducer hook.
  // `bundleReducer` will check for any middleware functions
  // that need to run, and pass the dispatch action
  const reducer = bundleReducer(rawReducer);

  // Set up a React `context` instance to hold our app state.
  // We're making the default value equal to the apps initialState
  const AppState = createContext([initialState]);

  // Define the top-level wrapper that provides this context. This wraps the
  // entire app. In Gatsby, this means we have to use this component in gatsby-browser.js 
  // as we don't otherwise have access to the top-level component in our app.
  const AppStateProvider = ({children}) => (
    <AppState.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppState.Provider>
  );

  const AppStateConsumer = AppState.Consumer;

  // Add a wrapper to the useContext hook that specifically loads the AppState 
  const useAppState = () => useContext(AppState);

  return {
    AppStateProvider,
    AppStateConsumer,
    useAppState,
  };
};

export default { createAppState };
