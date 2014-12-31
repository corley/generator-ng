angular.module(
    '<%= appname %>.<%= controllerNameLower %>',
    [<% if(uiRouter) { %>
        'ui.router.state'<% } %>
    ])
.config(function config(<% if(uiRouter) { %>$stateProvider <% } %>) {
    <% if(uiRouter) { %>$stateProvider.state( '<%=controllerNameLower%>', {
        url: '/<%=controllerNameLower%>',
        views: {
            "main": {
                controller: '<%= controllerName %>',
                templateUrl: '<%= moduleName %>/<%= controllerNameLower %>.tpl.html'
            }
        },
        data:{ pageTitle: '' }
    });<% } %>
})
.controller('<%= controllerName %>', ["$scope", function($scope) {
}]);
