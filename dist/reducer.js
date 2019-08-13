"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _default = bundleReducer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImJ1bmRsZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJBcnJheSIsImlzQXJyYXkiLCJtaWRkbGV3YXJlIiwidHlwZSIsImZvckVhY2giLCJmdW5jIiwibmV3U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPO0FBQUEsU0FBSSxVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDbEQ7QUFDQSxRQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsdUJBQVdILE1BQU0sQ0FBQ0ksSUFBbEIsQ0FBZCxDQUFKLEVBQTRDO0FBQzFDRCw2QkFBV0gsTUFBTSxDQUFDSSxJQUFsQixFQUF3QkMsT0FBeEIsQ0FBZ0MsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ04sTUFBRCxDQUFSO0FBQUEsT0FBcEM7QUFDRDs7QUFFRCxRQUFNTyxRQUFRLEdBQUcsRUFBakIsQ0FOa0QsQ0FPbEQ7QUFDQTs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlYLE9BQVosRUFBcUJPLE9BQXJCLENBQTZCLFVBQUFLLEdBQUcsRUFBSTtBQUNsQ0gsTUFBQUEsUUFBUSxDQUFDRyxHQUFELENBQVIsR0FBZ0JaLE9BQU8sQ0FBQ1ksR0FBRCxDQUFQLENBQWFYLEtBQUssQ0FBQ1csR0FBRCxDQUFsQixFQUF5QlYsTUFBekIsQ0FBaEI7QUFDRCxLQUZEO0FBSUEsV0FBT08sUUFBUDtBQUNELEdBZDRCO0FBQUEsQ0FBN0I7O2VBZ0JlVixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWlkZGxld2FyZSB9IGZyb20gXCIuL21pZGRsZXdhcmVcIjsgXG5cbmNvbnN0IGJ1bmRsZVJlZHVjZXIgPSByZWR1Y2VyID0+IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgYWN0aW9uIGhhcyBhbnkgXCJtaWRkbGV3YXJlXCIgZnVuY3Rpb25hbGl0eSB3ZSB3YW50IHRvIHJ1blxuICBpZiAoQXJyYXkuaXNBcnJheShtaWRkbGV3YXJlW2FjdGlvbi50eXBlXSkpIHtcbiAgICBtaWRkbGV3YXJlW2FjdGlvbi50eXBlXS5mb3JFYWNoKGZ1bmMgPT4gZnVuYyhhY3Rpb24pKTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge307XG4gIC8vIFRoZW4gcmV0dXJuIHRoZSBuZXcgb2JqZWN0IHN0YXRlIGJhc2VkIG9uIHRoZSByZXN1bHRzXG4gIC8vIG9mIG91ciBpbmRpdmlkdWFsIHJlZHVjZXJzXG4gIE9iamVjdC5rZXlzKHJlZHVjZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICBuZXdTdGF0ZVtrZXldID0gcmVkdWNlcltrZXldKHN0YXRlW2tleV0sIGFjdGlvbik7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdTdGF0ZTsgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVuZGxlUmVkdWNlcjtcbiJdfQ==