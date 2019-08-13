"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  var reducer = (0, _reducer["default"])(rawReducer); // Set up a React `context` instance to hold our app state.
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

var _default = createAppState;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHBTdGF0ZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBcHBTdGF0ZSIsInJhd1JlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwiQXBwU3RhdGUiLCJBcHBTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJBcHBTdGF0ZUNvbnN1bWVyIiwiQ29uc3VtZXIiLCJ1c2VBcHBTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsRUFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLHlCQUFjRixVQUFkLENBQWhCLENBSm1ELENBTW5EO0FBQ0E7O0FBQ0EsTUFBTUcsUUFBUSxHQUFHLDBCQUFjLENBQUNGLFlBQUQsQ0FBZCxDQUFqQixDQVJtRCxDQVVuRDtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLFdBQ3ZCLGdDQUFDLFFBQUQsQ0FBVSxRQUFWO0FBQW1CLE1BQUEsS0FBSyxFQUFFLHVCQUFXSCxPQUFYLEVBQW9CRCxZQUFwQjtBQUExQixPQUNHSSxRQURILENBRHVCO0FBQUEsR0FBekI7O0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUdILFFBQVEsQ0FBQ0ksUUFBbEMsQ0FuQm1ELENBcUJuRDs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU0sdUJBQVdMLFFBQVgsQ0FBTjtBQUFBLEdBQXBCOztBQUVBLFNBQU87QUFDTEMsSUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFESztBQUVMRSxJQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUZLO0FBR0xFLElBQUFBLFdBQVcsRUFBWEE7QUFISyxHQUFQO0FBS0QsQ0E3QkQ7O2VBK0JlVCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlcn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYnVuZGxlUmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5cbi8vIFRoaXMgY29tYmluZXMgUmVhY3QncyBgY29udGV4dGAgd2l0aCB0aGUgYHVzZVJlZHVjZXJgIGhvb2sgdG8gaW1wbGVtZW50IGdsb2JhbCBhcHAgc3RhdGUuXG5cbi8vIFdlIGV4cG9ydCBvbmUgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvXG4vLyAoMSkgY3JlYXRlIGFuIEFwcFN0YXRlUHJvdmlkZXIsIHdoaWNoIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgYXBwIHN0YXRlIHZpYSB0aGUgUmVhY3QgQ29udGV4dCBBUElcbi8vICgyKSBgdXNlQXBwU3RhdGVgIHdoaWNoIGlzIGEgY3VzdG9tIGhvb2sgdGhhdCBjYW4gYmUgdXNlZCB0byBhY2Nlc3MgYXBwIHN0YXRlIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuLy8gKDMpIGBBcHBTdGF0ZUNvbnN1bWVyYCB3aGljaCBjYW4gYmUgdXNlZCB0byBhY2Nlc3MgYXBwIHN0YXRlIGluIGNsYXNzLWJhc2VkIGNvbXBvbmVudHNcblxuY29uc3QgY3JlYXRlQXBwU3RhdGUgPSAocmF3UmVkdWNlciwgaW5pdGlhbFN0YXRlKSA9PiB7XG4gIC8vIENyZWF0ZSBhIHJlZHVjZXIgc3VpdGFibGUgZm9yIHVzZSBpbiB0aGUgdXNlUmVkdWNlciBob29rLlxuICAvLyBgYnVuZGxlUmVkdWNlcmAgd2lsbCBjaGVjayBmb3IgYW55IG1pZGRsZXdhcmUgZnVuY3Rpb25zXG4gIC8vIHRoYXQgbmVlZCB0byBydW4sIGFuZCBwYXNzIHRoZSBkaXNwYXRjaCBhY3Rpb25cbiAgY29uc3QgcmVkdWNlciA9IGJ1bmRsZVJlZHVjZXIocmF3UmVkdWNlcik7XG5cbiAgLy8gU2V0IHVwIGEgUmVhY3QgYGNvbnRleHRgIGluc3RhbmNlIHRvIGhvbGQgb3VyIGFwcCBzdGF0ZS5cbiAgLy8gV2UncmUgbWFraW5nIHRoZSBkZWZhdWx0IHZhbHVlIGVxdWFsIHRvIHRoZSBhcHBzIGluaXRpYWxTdGF0ZVxuICBjb25zdCBBcHBTdGF0ZSA9IGNyZWF0ZUNvbnRleHQoW2luaXRpYWxTdGF0ZV0pO1xuXG4gIC8vIERlZmluZSB0aGUgdG9wLWxldmVsIHdyYXBwZXIgdGhhdCBwcm92aWRlcyB0aGlzIGNvbnRleHQuIFRoaXMgd3JhcHMgdGhlXG4gIC8vIGVudGlyZSBhcHAuIEluIEdhdHNieSwgdGhpcyBtZWFucyB3ZSBoYXZlIHRvIHVzZSB0aGlzIGNvbXBvbmVudCBpbiBnYXRzYnktYnJvd3Nlci5qcyBcbiAgLy8gYXMgd2UgZG9uJ3Qgb3RoZXJ3aXNlIGhhdmUgYWNjZXNzIHRvIHRoZSB0b3AtbGV2ZWwgY29tcG9uZW50IGluIG91ciBhcHAuXG4gIGNvbnN0IEFwcFN0YXRlUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4gKFxuICAgIDxBcHBTdGF0ZS5Qcm92aWRlciB2YWx1ZT17dXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcFN0YXRlLlByb3ZpZGVyPlxuICApO1xuXG4gIGNvbnN0IEFwcFN0YXRlQ29uc3VtZXIgPSBBcHBTdGF0ZS5Db25zdW1lcjtcblxuICAvLyBBZGQgYSB3cmFwcGVyIHRvIHRoZSB1c2VDb250ZXh0IGhvb2sgdGhhdCBzcGVjaWZpY2FsbHkgbG9hZHMgdGhlIEFwcFN0YXRlIFxuICBjb25zdCB1c2VBcHBTdGF0ZSA9ICgpID0+IHVzZUNvbnRleHQoQXBwU3RhdGUpO1xuXG4gIHJldHVybiB7XG4gICAgQXBwU3RhdGVQcm92aWRlcixcbiAgICBBcHBTdGF0ZUNvbnN1bWVyLFxuICAgIHVzZUFwcFN0YXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXBwU3RhdGU7XG4iXX0=