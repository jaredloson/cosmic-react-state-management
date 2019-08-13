"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.registerMiddleware = exports.middleware = void 0;
// Setting up an object where we will store any extra functionality 
// that needs to run when performing particular actions on the app state.
// The keys of this middleware object map to the `type` of an action.
// When running that action.type, we check this object to see if there's
// anything else we want to do. Look in `./reducer.js` to see it being used.
var middleware = {}; // `registerMiddleware` is how we define any middleware functions we want
// to run while updating the global state. We pass this function the name
// of the action `type`, and the middleware function we want it to run.
// The middleware functions are added as an array so we can define more than
// one if necessary.

exports.middleware = middleware;

var registerMiddleware = function registerMiddleware(_ref) {
  var actionType = _ref.actionType,
      func = _ref.func;

  if (Array.isArray(middleware[actionType])) {
    middleware[actionType].push(func);
  } else {
    middleware[actionType] = [func];
  }
};

exports.registerMiddleware = registerMiddleware;
var _default = {
  middleware: middleware,
  registerMiddleware: registerMiddleware
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJyZWdpc3Rlck1pZGRsZXdhcmUiLCJhY3Rpb25UeXBlIiwiZnVuYyIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsRUFBbkIsQyxDQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BQTBCO0FBQUEsTUFBdkJDLFVBQXVCLFFBQXZCQSxVQUF1QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDMUQsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNMLFVBQVUsQ0FBQ0UsVUFBRCxDQUF4QixDQUFKLEVBQTJDO0FBQ3pDRixJQUFBQSxVQUFVLENBQUNFLFVBQUQsQ0FBVixDQUF1QkksSUFBdkIsQ0FBNEJILElBQTVCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xILElBQUFBLFVBQVUsQ0FBQ0UsVUFBRCxDQUFWLEdBQXlCLENBQUNDLElBQUQsQ0FBekI7QUFDRDtBQUNGLENBTk07OztlQVFRO0FBQUVILEVBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjQyxFQUFBQSxrQkFBa0IsRUFBbEJBO0FBQWQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNldHRpbmcgdXAgYW4gb2JqZWN0IHdoZXJlIHdlIHdpbGwgc3RvcmUgYW55IGV4dHJhIGZ1bmN0aW9uYWxpdHkgXG4vLyB0aGF0IG5lZWRzIHRvIHJ1biB3aGVuIHBlcmZvcm1pbmcgcGFydGljdWxhciBhY3Rpb25zIG9uIHRoZSBhcHAgc3RhdGUuXG5cbi8vIFRoZSBrZXlzIG9mIHRoaXMgbWlkZGxld2FyZSBvYmplY3QgbWFwIHRvIHRoZSBgdHlwZWAgb2YgYW4gYWN0aW9uLlxuLy8gV2hlbiBydW5uaW5nIHRoYXQgYWN0aW9uLnR5cGUsIHdlIGNoZWNrIHRoaXMgb2JqZWN0IHRvIHNlZSBpZiB0aGVyZSdzXG4vLyBhbnl0aGluZyBlbHNlIHdlIHdhbnQgdG8gZG8uIExvb2sgaW4gYC4vcmVkdWNlci5qc2AgdG8gc2VlIGl0IGJlaW5nIHVzZWQuXG5cbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlID0ge307XG5cblxuLy8gYHJlZ2lzdGVyTWlkZGxld2FyZWAgaXMgaG93IHdlIGRlZmluZSBhbnkgbWlkZGxld2FyZSBmdW5jdGlvbnMgd2Ugd2FudFxuLy8gdG8gcnVuIHdoaWxlIHVwZGF0aW5nIHRoZSBnbG9iYWwgc3RhdGUuIFdlIHBhc3MgdGhpcyBmdW5jdGlvbiB0aGUgbmFtZVxuLy8gb2YgdGhlIGFjdGlvbiBgdHlwZWAsIGFuZCB0aGUgbWlkZGxld2FyZSBmdW5jdGlvbiB3ZSB3YW50IGl0IHRvIHJ1bi5cbi8vIFRoZSBtaWRkbGV3YXJlIGZ1bmN0aW9ucyBhcmUgYWRkZWQgYXMgYW4gYXJyYXkgc28gd2UgY2FuIGRlZmluZSBtb3JlIHRoYW5cbi8vIG9uZSBpZiBuZWNlc3NhcnkuXG5cbmV4cG9ydCBjb25zdCByZWdpc3Rlck1pZGRsZXdhcmUgPSAoeyBhY3Rpb25UeXBlLCBmdW5jIH0pID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWlkZGxld2FyZVthY3Rpb25UeXBlXSkpIHtcbiAgICBtaWRkbGV3YXJlW2FjdGlvblR5cGVdLnB1c2goZnVuYyk7XG4gIH0gZWxzZSB7XG4gICAgbWlkZGxld2FyZVthY3Rpb25UeXBlXSA9IFtmdW5jXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IG1pZGRsZXdhcmUsIHJlZ2lzdGVyTWlkZGxld2FyZSB9O1xuIl19