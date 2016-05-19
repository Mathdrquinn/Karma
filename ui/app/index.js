console.log('App loaded.');

import angular from 'angular';
import appCtrl from './app.controller';
import appFactory from './app.factory';
import subMod from './features/subMod/subMod.module';
import uirouter from 'angular-ui-router';

export default angular.module('Karma', [uirouter, subMod])
    .config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');
    }])
    .config(['$stateProvider', ($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('root', {
                url: '/',
                views: {
                    'main': {
                        template: '<p>root</p><p><button ng-click="App.incrementCounter()">Increment++</button>&nbsp;&nbsp;{{ App.counter}}</p>',
                    },
                },
            })

    }])
    .controller('appCtrl', appCtrl)
    .factory('appFactory', appFactory);