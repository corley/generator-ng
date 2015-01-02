'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    init: function() {
        this.argument('moduleName', { type: String, required: true });
        this.mkdir("src/app/"+this.moduleName);
        var cb = this.async();
        this.prompt([{
            type    : 'confirm',
            name    : 'createController',
            message : "Would you create base controller?",
        }], function(answers) {
            if (answers.createController){
                this.invoke("ng:controller", {
                    arguments: [this.moduleName]
                });
            }
            cb();
        }.bind(this));
    }
});
