/*
 * Title: ./index.js
 *
 * Description: Starting point for webpack to bundle the app
 *              Import other modules
 *              create root AngularJS module and export
 *
 * Author: Ben Merchant
*/
// import scss
// for now, leave this here, can move it later to where it makes more sense

import './index.scss';

import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// import the states for registration
import {AllStates} from './site/site.states';
import {FeaturesStates} from './site/features/features.states';

// import the other modules to register with Angular top-level module
import {SharedModule} from './site/shared/shared.module';
import {FeaturesModule} from './site/features/features.module';

// create the app-level module and inject ui-router
const BMDD_MODULE = angular.module('bmddApp', [
  uiRouter,
  FeaturesModule.name,
  SharedModule.name
]);
BMDD_MODULE.config(['$uiRouterProvider',($uiRouter)=>{
  // enable tracing the State Transitions in the console
  $uiRouter.trace.enable(1);

  // basically a 404, later we'll make a state with custom page
  $uiRouter.urlService.rules.otherwise({state: 'home'});

  // register the imported states
  AllStates.forEach((state) => {$uiRouter.stateRegistry.register(state);});
  FeaturesStates.forEach((state) => {$uiRouter.stateRegistry.register(state);});

}]);
