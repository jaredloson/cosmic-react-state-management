"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.bundleReducer = void 0;

var _middleware = require("./middleware");

var bundleReducer = function bundleReducer(reducer) {
  return function (state, action) {
    // First check if this action has any "middleware" functionality we want to run
    if (Array.isArray(_middleware.middleware[action.type])) {
      _middleware.middleware[action.type].forEach(function (func) {
        return func(action);
      });
    }

    var newState = {}; // Then return the new object state based on the results
    // of our individual reducers

    Object.keys(reducer).forEach(function (key) {
      newState[key] = reducer[key](state[key], action);
    });
    return newState;
  };
};

exports.bundleReducer = bundleReducer;
var _default = {
  bundleReducer: bundleReducer
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImJ1bmRsZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJBcnJheSIsImlzQXJyYXkiLCJtaWRkbGV3YXJlIiwidHlwZSIsImZvckVhY2giLCJmdW5jIiwibmV3U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPO0FBQUEsU0FBSSxVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekQ7QUFDQSxRQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsdUJBQVdILE1BQU0sQ0FBQ0ksSUFBbEIsQ0FBZCxDQUFKLEVBQTRDO0FBQzFDRCw2QkFBV0gsTUFBTSxDQUFDSSxJQUFsQixFQUF3QkMsT0FBeEIsQ0FBZ0MsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ04sTUFBRCxDQUFSO0FBQUEsT0FBcEM7QUFDRDs7QUFFRCxRQUFNTyxRQUFRLEdBQUcsRUFBakIsQ0FOeUQsQ0FPekQ7QUFDQTs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlYLE9BQVosRUFBcUJPLE9BQXJCLENBQTZCLFVBQUFLLEdBQUcsRUFBSTtBQUNsQ0gsTUFBQUEsUUFBUSxDQUFDRyxHQUFELENBQVIsR0FBZ0JaLE9BQU8sQ0FBQ1ksR0FBRCxDQUFQLENBQWFYLEtBQUssQ0FBQ1csR0FBRCxDQUFsQixFQUF5QlYsTUFBekIsQ0FBaEI7QUFDRCxLQUZEO0FBSUEsV0FBT08sUUFBUDtBQUNELEdBZG1DO0FBQUEsQ0FBN0I7OztlQWdCUTtBQUFFVixFQUFBQSxhQUFhLEVBQWJBO0FBQUYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1pZGRsZXdhcmUgfSBmcm9tIFwiLi9taWRkbGV3YXJlXCI7IFxuXG5leHBvcnQgY29uc3QgYnVuZGxlUmVkdWNlciA9IHJlZHVjZXIgPT4gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBhY3Rpb24gaGFzIGFueSBcIm1pZGRsZXdhcmVcIiBmdW5jdGlvbmFsaXR5IHdlIHdhbnQgdG8gcnVuXG4gIGlmIChBcnJheS5pc0FycmF5KG1pZGRsZXdhcmVbYWN0aW9uLnR5cGVdKSkge1xuICAgIG1pZGRsZXdhcmVbYWN0aW9uLnR5cGVdLmZvckVhY2goZnVuYyA9PiBmdW5jKGFjdGlvbikpO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7fTtcbiAgLy8gVGhlbiByZXR1cm4gdGhlIG5ldyBvYmplY3Qgc3RhdGUgYmFzZWQgb24gdGhlIHJlc3VsdHNcbiAgLy8gb2Ygb3VyIGluZGl2aWR1YWwgcmVkdWNlcnNcbiAgT2JqZWN0LmtleXMocmVkdWNlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgIG5ld1N0YXRlW2tleV0gPSByZWR1Y2VyW2tleV0oc3RhdGVba2V5XSwgYWN0aW9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1N0YXRlOyAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGJ1bmRsZVJlZHVjZXIgfTtcbiJdfQ==