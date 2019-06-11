/**
* @filename src\site\features\allStories.module.js
* @fileoverview register allStories state
*
* @author Ben Merchant
* @licence MIT
* @copyright 2019
*/

import uiRouter from '@uirouter/angularjs';
import { AllStoriesComponent } from './allStories.component';

export const allStories = angular.module('allStoriesModule', [uiRouter])
      .component('allStories', AllStoriesComponent)
      .config(($stateProvider) => {
        $stateProvider.state('allStories', {
          parent: 'frame',
          url: '/stories',
          resolve: {
            allStories(AllStoriesComponent){
              return AllStoriesComponent.getAllStoriesList();
            }
          }
        })
      }).name;
