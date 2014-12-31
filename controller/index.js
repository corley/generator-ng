'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');
var path = require('path');
var utils = require('../utils.js');

module.exports = yeoman.generators.Base.extend({
    init: function() {
        this.argument('moduleName', { type: String, required: true });
        var cb = this.async();
        this.prompt([{
            type    : 'input',
            name    : 'name',
            message : "What's the controller name?",
            default : 'home'
        }], function(answers) {
            var bowerConfig = utils.getBower();
            this.uiRouter = false;
            if (bowerConfig.dependencies['angular-ui-router'] != undefined) {
                this.uiRouter = true;
            }
            this.controllerNameLower = answers.name.toLowerCase();
            this.controllerName = this.controllerNameLower.charAt(0).toUpperCase() + this.controllerNameLower.slice(1) + "Ctrl";
            this.template("controller.js", "src/app/"+this.moduleName+"/"+this.controllerNameLower+".js");
            this.template("tpl.js", "src/app/"+this.moduleName+"/"+this.controllerNameLower+".tpl.html");
            this.template("tpl.less", "src/app/"+this.moduleName+"/"+this.controllerNameLower+".less");
            this.template("spec.js", "src/app/"+this.moduleName+"/"+this.controllerNameLower+".spec.js");
            cb();
        }.bind(this));
    }
});
