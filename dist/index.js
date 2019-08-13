"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createAppState = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reducer = require("./reducer");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// This combines React's `context` with the `useReducer` hook to implement global app state.
// We export one function that is used to
// (1) create an AppStateProvider, which provides access to the app state via the React Context API
// (2) `useAppState` which is a custom hook that can be used to access app state in functional components
// (3) `AppStateConsumer` which can be used to access app state in class-based components
var createAppState = function createAppState(rawReducer, initialState) {
  // Create a reducer suitable for use in the useReducer hook.
  // `bundleReducer` will check for any middleware functions
  // that need to run, and pass the dispatch action
  var reducer = (0, _reducer.bundleReducer)(rawReducer); // Set up a React `context` instance to hold our app state.
  // We're making the default value equal to the apps initialState

  var AppState = (0, _react.createContext)([initialState]); // Define the top-level wrapper that provides this context. This wraps the
  // entire app. In Gatsby, this means we have to use this component in gatsby-browser.js 
  // as we don't otherwise have access to the top-level component in our app.

  var AppStateProvider = function AppStateProvider(_ref) {
    var children = _ref.children;
    return _react["default"].createElement(AppState.Provider, {
      value: (0, _react.useReducer)(reducer, initialState)
    }, children);
  };

  var AppStateConsumer = AppState.Consumer; // Add a wrapper to the useContext hook that specifically loads the AppState 

  var useAppState = function useAppState() {
    return (0, _react.useContext)(AppState);
  };

  return {
    AppStateProvider: AppStateProvider,
    AppStateConsumer: AppStateConsumer,
    useAppState: useAppState
  };
};

exports.createAppState = createAppState;
var _default = {
  createAppState: createAppState
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBcHBTdGF0ZSIsInJhd1JlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwiQXBwU3RhdGUiLCJBcHBTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJBcHBTdGF0ZUNvbnN1bWVyIiwiQ29uc3VtZXIiLCJ1c2VBcHBTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLEVBQThCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBRyw0QkFBY0YsVUFBZCxDQUFoQixDQUowRCxDQU0xRDtBQUNBOztBQUNBLE1BQU1HLFFBQVEsR0FBRywwQkFBYyxDQUFDRixZQUFELENBQWQsQ0FBakIsQ0FSMEQsQ0FVMUQ7QUFDQTtBQUNBOztBQUNBLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxRQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxXQUN2QixnQ0FBQyxRQUFELENBQVUsUUFBVjtBQUFtQixNQUFBLEtBQUssRUFBRSx1QkFBV0gsT0FBWCxFQUFvQkQsWUFBcEI7QUFBMUIsT0FDR0ksUUFESCxDQUR1QjtBQUFBLEdBQXpCOztBQU1BLE1BQU1DLGdCQUFnQixHQUFHSCxRQUFRLENBQUNJLFFBQWxDLENBbkIwRCxDQXFCMUQ7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNLHVCQUFXTCxRQUFYLENBQU47QUFBQSxHQUFwQjs7QUFFQSxTQUFPO0FBQ0xDLElBQUFBLGdCQUFnQixFQUFoQkEsZ0JBREs7QUFFTEUsSUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFGSztBQUdMRSxJQUFBQSxXQUFXLEVBQVhBO0FBSEssR0FBUDtBQUtELENBN0JNOzs7ZUErQlE7QUFBRVQsRUFBQUEsY0FBYyxFQUFkQTtBQUFGLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJ1bmRsZVJlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5cbi8vIFRoaXMgY29tYmluZXMgUmVhY3QncyBgY29udGV4dGAgd2l0aCB0aGUgYHVzZVJlZHVjZXJgIGhvb2sgdG8gaW1wbGVtZW50IGdsb2JhbCBhcHAgc3RhdGUuXG5cbi8vIFdlIGV4cG9ydCBvbmUgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvXG4vLyAoMSkgY3JlYXRlIGFuIEFwcFN0YXRlUHJvdmlkZXIsIHdoaWNoIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgYXBwIHN0YXRlIHZpYSB0aGUgUmVhY3QgQ29udGV4dCBBUElcbi8vICgyKSBgdXNlQXBwU3RhdGVgIHdoaWNoIGlzIGEgY3VzdG9tIGhvb2sgdGhhdCBjYW4gYmUgdXNlZCB0byBhY2Nlc3MgYXBwIHN0YXRlIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuLy8gKDMpIGBBcHBTdGF0ZUNvbnN1bWVyYCB3aGljaCBjYW4gYmUgdXNlZCB0byBhY2Nlc3MgYXBwIHN0YXRlIGluIGNsYXNzLWJhc2VkIGNvbXBvbmVudHNcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcFN0YXRlID0gKHJhd1JlZHVjZXIsIGluaXRpYWxTdGF0ZSkgPT4ge1xuICAvLyBDcmVhdGUgYSByZWR1Y2VyIHN1aXRhYmxlIGZvciB1c2UgaW4gdGhlIHVzZVJlZHVjZXIgaG9vay5cbiAgLy8gYGJ1bmRsZVJlZHVjZXJgIHdpbGwgY2hlY2sgZm9yIGFueSBtaWRkbGV3YXJlIGZ1bmN0aW9uc1xuICAvLyB0aGF0IG5lZWQgdG8gcnVuLCBhbmQgcGFzcyB0aGUgZGlzcGF0Y2ggYWN0aW9uXG4gIGNvbnN0IHJlZHVjZXIgPSBidW5kbGVSZWR1Y2VyKHJhd1JlZHVjZXIpO1xuXG4gIC8vIFNldCB1cCBhIFJlYWN0IGBjb250ZXh0YCBpbnN0YW5jZSB0byBob2xkIG91ciBhcHAgc3RhdGUuXG4gIC8vIFdlJ3JlIG1ha2luZyB0aGUgZGVmYXVsdCB2YWx1ZSBlcXVhbCB0byB0aGUgYXBwcyBpbml0aWFsU3RhdGVcbiAgY29uc3QgQXBwU3RhdGUgPSBjcmVhdGVDb250ZXh0KFtpbml0aWFsU3RhdGVdKTtcblxuICAvLyBEZWZpbmUgdGhlIHRvcC1sZXZlbCB3cmFwcGVyIHRoYXQgcHJvdmlkZXMgdGhpcyBjb250ZXh0LiBUaGlzIHdyYXBzIHRoZVxuICAvLyBlbnRpcmUgYXBwLiBJbiBHYXRzYnksIHRoaXMgbWVhbnMgd2UgaGF2ZSB0byB1c2UgdGhpcyBjb21wb25lbnQgaW4gZ2F0c2J5LWJyb3dzZXIuanMgXG4gIC8vIGFzIHdlIGRvbid0IG90aGVyd2lzZSBoYXZlIGFjY2VzcyB0byB0aGUgdG9wLWxldmVsIGNvbXBvbmVudCBpbiBvdXIgYXBwLlxuICBjb25zdCBBcHBTdGF0ZVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IChcbiAgICA8QXBwU3RhdGUuUHJvdmlkZXIgdmFsdWU9e3VzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BcHBTdGF0ZS5Qcm92aWRlcj5cbiAgKTtcblxuICBjb25zdCBBcHBTdGF0ZUNvbnN1bWVyID0gQXBwU3RhdGUuQ29uc3VtZXI7XG5cbiAgLy8gQWRkIGEgd3JhcHBlciB0byB0aGUgdXNlQ29udGV4dCBob29rIHRoYXQgc3BlY2lmaWNhbGx5IGxvYWRzIHRoZSBBcHBTdGF0ZSBcbiAgY29uc3QgdXNlQXBwU3RhdGUgPSAoKSA9PiB1c2VDb250ZXh0KEFwcFN0YXRlKTtcblxuICByZXR1cm4ge1xuICAgIEFwcFN0YXRlUHJvdmlkZXIsXG4gICAgQXBwU3RhdGVDb25zdW1lcixcbiAgICB1c2VBcHBTdGF0ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlQXBwU3RhdGUgfTtcbiJdfQ==