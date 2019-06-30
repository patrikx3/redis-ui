require('angular/angular');
require('angular-aria');
require('angular-animate');
require('angular-messages');
require('angular-material');

global.p3xre.ng = angular.module('p3x-redis-ui', [
    'ngMaterial', 'ngMessages'
]);
require('./angular/toast');

global.p3xre.ng.run((p3xToast) => {
    global.p3xre.toast = p3xToast;
})

angular.element(document).ready(() => {
    const bootstrapElement = document.getElementById('p3x-redis-ui');
    angular.bootstrap(bootstrapElement, ['p3x-redis-ui']);
})
