'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    bowerSetup: function() {
        this.argument('appname', { type: String, required: false });
        this.appname = this.appname || path.basename(process.cwd());
        this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

        var cb = this.async();
        var prompts = [{
            type: 'checkbox',
            name: 'modules',
            message: 'Which modules would you like to include?',
            choices: [
                {
                    value: 'bootstrap',
                    name: 'Bootstrap',
                    checked: true
                }, {
                    value: 'ngResource',
                    name: 'angular-resource.js',
                    checked: false
                }, {
                    value: 'uiRouter',
                    name: 'ui-router.js',
                    checked: true
                }, {
                    value: 'ngCookie',
                    name: 'angular-cookie.js',
                    checked: true
                }, {
                    value: 'ngUtils',
                    name: 'cr-team.js',
                    checked: false
                }
            ]
        }];

        this.prompt(prompts, function (props) {
            var hasMod = function (mod) {
                return props.modules.indexOf(mod) !== -1;
            };
            this.bootstrap = hasMod('bootstrap');
            this.ngResource = hasMod('ngResource');
            this.uiRouter = hasMod('uiRouter');
            this.ngCookie= hasMod('ngCookie');
            this.ngUtils = hasMod('ngUtils');
            cb();
        }.bind(this));
    },
    initApplication: function () {
        this.copy('gitignore', '.gitignore');
        this.template('bower.json');
        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.copy('module.prefix', 'module.prefix');
        this.copy('module.suffix', 'module.suffix');
        this.copy('configuration.json.dist', 'configuration.json');
        this.template('build.config.js', 'build.config.js');
        this.mkdir("src");
        this.mkdir("src/app");
        this.template('package.json');
        /*************************
         * Don't read this lines *
         ************************/
        this.styles = '<% styles.forEach( function ( file ) { %><link rel="stylesheet" type="text/css" href="<%= file %>" /><% }); %>';
        this.scripts = '<% scripts.forEach( function ( file ) { %><script type="text/javascript" src="<%= file %>"></script><% }); %>';
        this.template('index.html', 'src/index.html');

        this.template('app.js', "src/app.js");
        this.mkdir("karma");
        this.copy('karma-unit.tpl.js', 'karma/karma-unit.tpl.js');
    },
    createFirstModule: function () {
        var cb = this.async();
        var prompts = [{
            name: 'generateHomeModule',
            message: 'Would you generate home module?',
            type: 'confirm'
        }];
        this.prompt(prompts, function (answers) {
            console.log(answers.generateHomeModule);
            if (answers.generateHomeModule == true) {
                this.invoke('ng:module', {
                    arguments: ['home']
                });
            }
            cb();
        }.bind(this));
    }
});
