angular.module(
        '<%= appname %>',
        [
            'templates-common', <% if (uiRouter) { %>
            'ui.router', <% } %><% if (ngCookie) { %>
            'ngCookies', <% } %><% if (ngUtils) { %>
            'cr-session',
            'cr-auth', <% } %>
            'templates-app'
        ]
)
.config(function myAppConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
})
.run(function run() {

})
.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    });
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    });
});
