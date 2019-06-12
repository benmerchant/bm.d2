/**
* @filename src\app\shared\app.module.js
* @fileoverview contains first {StateDeclarationObject}
* - registers itself with AngularJS
* @author Ben Merchant
* @licence MIT
* @copyright June 11, 2019
*/

import uiRouter from '@uirouter/angularjs';
import { appComponent } from './app.component';
import './app.scss';

export const app = angular.module('app', [uiRouter])
  .component('appComponent', appComponent)
  .config(['$stateprovider', ($stateprovider) => {
    $stateProvider.state('mainAppState', {
      redirectTo: 'storiesAllState',
      url: '/app',
      component: appComponent
    });
  }]).name;
