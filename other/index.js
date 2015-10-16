var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  init: function(name) {
    global.donejsTestPluginLoaded = name || "other";
  }
});