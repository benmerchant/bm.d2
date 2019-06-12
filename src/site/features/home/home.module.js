/**
* @filename home.module.js
* @fileoverview register home.component
*
* @author Ben Merchant
* @licence MIT
* @copyright 2019
*/

import uiRouter from '@uirouter/angularjs';
import {homeComponent} from './home.component';

export const homeModule = angular.module('home', [uiRouter])
  .component('homeComponent', homeComponent)
  .config(['$uiRouterProvider',($uiRouter) => {
    // home state - first thing you see when you type in the url
    const homeState = {
      parent: 'frame',
      name: 'home',
      url: '/home',
      component: 'homeComponent'
    }
    $uiRouter.stateRegistry.register(homeState);
  }])
  .name;
