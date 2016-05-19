console.log('subMod loaded.');

import angular from 'angular';
import subModCtrl from './subMod.controller.js';
import routes from './subMod.routes';
import uirouter from "angular-ui-router";

export default angular.module('subMod', [uirouter])
    .config(routes)
    .controller('subModCtrl', subModCtrl)
    .name;