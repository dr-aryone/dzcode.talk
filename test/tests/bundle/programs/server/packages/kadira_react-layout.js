(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var ReactLayout;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/kadira_react-layout/packages/kadira_react-layout.js            //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/kadira:react-layout/lib/react_layout.js                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
ReactLayout = {};                                                    // 1
ReactLayout._domLoaded = false;                                      // 2
                                                                     // 3
ReactLayout._getRootNode = function() {                              // 4
  var rootNode = document.getElementById('react-root');              // 5
                                                                     // 6
  if(rootNode) {                                                     // 7
    return rootNode;                                                 // 8
  } else {                                                           // 9
    rootNode = document.createElement("div");                        // 10
    rootNode.id = "react-root";                                      // 11
    document.getElementsByTagName('body')[0].appendChild(rootNode);  // 12
    return rootNode;                                                 // 13
  }                                                                  // 14
};                                                                   // 15
                                                                     // 16
ReactLayout.render = function(layoutClass, regions) {                // 17
  if(Meteor.isClient) {                                              // 18
    return ReactLayout._renderClient(layoutClass, regions);          // 19
  } else {                                                           // 20
    return ReactLayout._renderServer(layoutClass, regions);          // 21
  }                                                                  // 22
};                                                                   // 23
                                                                     // 24
ReactLayout._renderServer = function(layoutClass, regions) {         // 25
  var el = React.createElement(layoutClass, regions);                // 26
  var html = React.renderToString(el);                               // 27
                                                                     // 28
  if(Package['kadira:flow-router-ssr']) {                            // 29
    var FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;   // 30
    var ssrContext = FlowRouter.ssrContext.get();                    // 31
    ssrContext.setHtml(html);                                        // 32
  }                                                                  // 33
};                                                                   // 34
                                                                     // 35
ReactLayout._renderClient = function(layoutClass, regions) {         // 36
  this._ready(function() {                                           // 37
    var rootNode = ReactLayout._getRootNode();                       // 38
    var el = React.createElement(layoutClass, regions);              // 39
    React.render(el, rootNode);                                      // 40
  });                                                                // 41
};                                                                   // 42
                                                                     // 43
ReactLayout._ready = function(cb) {                                  // 44
  var self = this;                                                   // 45
  if(self._domLoaded) {                                              // 46
    cb();                                                            // 47
    return;                                                          // 48
  }                                                                  // 49
                                                                     // 50
  // wait for DOM is loading                                         // 51
  Meteor.startup(function() {                                        // 52
    setTimeout(function() {                                          // 53
      cb();                                                          // 54
      self._domLoaded = true;                                        // 55
    }, 0);                                                           // 56
  });                                                                // 57
};                                                                   // 58
///////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['kadira:react-layout'] = {}, {
  ReactLayout: ReactLayout
});

})();
