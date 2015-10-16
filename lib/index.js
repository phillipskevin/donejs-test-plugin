var Q = require('q');

exports.default = function() {
  global.donejsTestPluginLoaded = "default";
};

exports.async = function() {
  var deferred = Q.defer();
  global.donejsTestPluginLoaded = "async";
  deferred.resolve(true);
  return deferred.promise;
};