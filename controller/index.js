'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    init: function() {
        this.argument('moduleName', { type: String, required: true });
        var cb = this.async();
        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Write list of controllers separated by ,',
            default : 'Home'
        }, function (answers) {
            var controllersName = answers.name.split(',');
            console.log(controllersName);
            cb();
        }.bind(this));
    }
});
