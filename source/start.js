import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

angular.module('application', [uiRouter])
  .component('ground', {
    template: `<div class="">Hey</div>`
  }).config([() => {

  }]);
