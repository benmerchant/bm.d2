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
import {AppModule} from './shared/app.module';
import {FeaturesModule} from './features/features.module';
// create the app-level module and inject ui-router
//// added the export to be more like Mr. Motto
export const base = angular.module('base', [uiRouter])
  .component('baseComponent', baseComponent)
  .config(['$uiRouterProvider', '$locationProvider',($uiRouterProvider, $locationProvider)=>{
  $locationProvider.html5Mode(true);
}]).name;
