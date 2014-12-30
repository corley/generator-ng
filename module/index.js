'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    init: function() {
        this.argument('moduleName', { type: String, required: true });
        this.mkdir("src/"+this.moduleName);
    }
});
