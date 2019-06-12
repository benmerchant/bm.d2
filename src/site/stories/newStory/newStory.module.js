/**
* @filename
* @fileoverview gather all components for sending a new
* story to the API and register the components
*
* @author Ben Merchant
* @licence MIT
* @copyright 2019
*/
import uiRouter from '@uirouter/angularjs';
import {newStoryComponent} from './newStory.component';

export const newStoryModule = angular.module('newStory',[uiRouter])
.component('newStoryComponent', newStoryComponent)
.config(['$uiRouterProvider',($uiRouter) => {
  $uiRouter.stateRegistry
    .register({
      name: 'home.newStory',
      url: '/story/new',
      component: 'newStoryComponent'
    });
}])
.name;
