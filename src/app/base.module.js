/**
* @filename src\app\base.module.js
* @fileoverview refactoring according to GitHub/toddmotto
* This is the starting point of the entiree application
*
* @author Ben Merchant
* @licence MIT
* @copyright 2019
*/
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { baseComponent } from './base.component'; // updated for ngMotto
import './base.scss'; // updated for ngMotto
import '../imgs/black5k.jpg'; // still need my background img
// import the states for registration
// import {AllStates} from './site/site.states';
// import {FeaturesStates} from './site/features/features.states';
// import the other modules to register with Angular top-level module
import {AppModule} from './shared/app.module';
import {FeaturesModule} from './features/features.module';
// import {FeaturesModule} from './site/features/features.module';
// new module testing out to get the stories
// import {StoryModule} from './site/features/story.module'


// create the app-level module and inject ui-router
//// added the export to be more like Mr. Motto
export const base = angular.module('base', [
  uiRouter //FeaturesModule.name,SharedModule.name, StoryModule
])
.component('baseComponent', baseComponent)
.config(['$uiRouterProvider', '$locationProvider',($uiRouterProvider, $locationProvider)=>{
  // enable tracing the State Transitions in the console
  // $uiRouter.trace.enable(1);
  // basically a 404, later we'll make a state with custom page
  // $uiRouter.urlService.rules.otherwise({state: 'poe'});
  // register the imported states
  // AllStates.forEach((state) => {$uiRouter.stateRegistry.register(state);});
  // FeaturesStates.forEach((state) => {$uiRouter.stateRegistry.register(state);});


  $locationProvider.html5Mode(true);
}]).name;
