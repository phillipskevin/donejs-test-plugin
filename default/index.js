var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  init: function() {
    global.donejsTestPluginLoaded = "default";
  }
});