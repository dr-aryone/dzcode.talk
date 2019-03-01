(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

/* Package-scope variables */
var React, ReactDOM, ReactDOMServer;

var require = meteorInstall({"node_modules":{"meteor":{"react-runtime":{"react-runtime.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/react-runtime/react-runtime.js                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({                                                      // 1
  React: function () {                                               // 1
    return React;                                                    // 1
  },                                                                 // 1
  ReactDOM: function () {                                            // 1
    return ReactDOM;                                                 // 1
  },                                                                 // 1
  ReactDOMServer: function () {                                      // 1
    return ReactDOMServer;                                           // 1
  }                                                                  // 1
});                                                                  // 1
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
                                                                     //
var _ = void 0;                                                      // 1
                                                                     //
module.watch(require("meteor/underscore"), {                         // 1
  _: function (v) {                                                  // 1
    _ = v;                                                           // 1
  }                                                                  // 1
}, 1);                                                               // 1
var checkNpmVersions = void 0;                                       // 1
module.watch(require("meteor/tmeasday:check-npm-versions"), {        // 1
  checkNpmVersions: function (v) {                                   // 1
    checkNpmVersions = v;                                            // 1
  }                                                                  // 1
}, 2);                                                               // 1
var requiredPackages = {                                             // 4
  react: '15.x',                                                     // 5
  'react-dom': '15.x',                                               // 6
  'react-addons-transition-group': '15.x',                           // 7
  'react-addons-css-transition-group': '15.x',                       // 8
  'react-addons-linked-state-mixin': '15.x',                         // 9
  'react-addons-create-fragment': '15.x',                            // 10
  'react-addons-update': '15.x',                                     // 11
  'react-addons-pure-render-mixin': '15.x'                           // 12
};                                                                   // 4
                                                                     //
if (Meteor.isDevelopment) {                                          // 15
  _.extend(requiredPackages, {                                       // 16
    'react-addons-test-utils': '15.x',                               // 17
    'react-addons-perf': '15.x'                                      // 18
  });                                                                // 16
}                                                                    // 20
                                                                     //
checkNpmVersions(requiredPackages, 'react-runtime');                 // 23
                                                                     //
var React = require('react');                                        // 25
                                                                     //
var ReactDOM = require('react-dom');                                 // 26
                                                                     //
React.addons = {                                                     // 28
  TransitionGroup: require('react-addons-transition-group'),         // 29
  CSSTransitionGroup: require('react-addons-css-transition-group'),  // 30
  LinkedStateMixin: require('react-addons-linked-state-mixin'),      // 31
  createFragment: require('react-addons-create-fragment'),           // 32
  update: require('react-addons-update'),                            // 33
  PureRenderMixin: require('react-addons-pure-render-mixin')         // 34
};                                                                   // 28
                                                                     //
if (Meteor.isDevelopment) {                                          // 37
  React.addons.TestUtils = require('react-addons-test-utils');       // 38
  React.addons.Perf = require('react-addons-perf');                  // 39
}                                                                    // 40
                                                                     //
var ReactDOMServer = void 0;                                         // 42
                                                                     //
if (Meteor.isServer) {                                               // 43
  module.runSetters(ReactDOMServer = require('react-dom/server'));   // 44
}                                                                    // 45
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});
var exports = require("./node_modules/meteor/react-runtime/react-runtime.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['react-runtime'] = exports, {
  React: React,
  ReactDOM: ReactDOM,
  ReactDOMServer: ReactDOMServer
});

})();

//# sourceMappingURL=react-runtime.js.map
