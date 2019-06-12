import uiRouter from '@uirouter/angularjs';
import { storiesAllComponent } from './storiesAll.component';

export const storiesAll = angular.module('storiesAll', [
  uiRouter
]).component('storiesAllComponent', storiesAllComponent)
.config(($stateProvider) => {
  $stateProvider.state('storiesAllState', {
    parent: 'mainAppState',
    url: '/stories',
    component: 'storiesAllComponent',
    resolve: {
      storiesAll(StoriesService){
        return StoriesService.getAllStoriesList();
      }
    }
  })
}).name;
