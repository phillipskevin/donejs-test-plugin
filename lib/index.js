var Q = require('q');

exports.default = function() {
  global.donejsTestPluginLoaded = "default";
};

exports.async = function() {
  var deferred = Q.defer();
  setTimeout(function() {
    global.donejsTestPluginLoaded = "async";
    deferred.resolve(true);
  }, 500);
  return deferred.promise;
};