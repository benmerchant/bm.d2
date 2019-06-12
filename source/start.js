import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import newStories from './storiesInFakeMongo';

class StoryService {
  constructor(allStoriesFromDB){
    this.getAllStoriesList = allStoriesFromDB;
  }
  getAllStoriesList(){
    return this.getAllStoriesList;
  }
}

const ground = angular.module('application', [uiRouter]);

const groundState = {
  name: 'ground',
  redirectTo: 'app',
  component: 'groundComponent'
}
const appState = {
  parent: 'ground',
  name: 'app',
  url: '/app',
  component: 'mainAppComponent'
}

ground.config(['$uiRouterProvider', ($uiRouter) => {
  $uiRouter.trace.enable(1);
  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({ state: 'app' });

  const $stateRegistry = $uiRouter.stateRegistry;
  $stateRegistry.register(groundState);
  $stateRegistry.register(appState);

}]);

ground.component('groundComponent',{
    template: `<div class="one">
      <div ui-view>Hey inside ui-view</div>
    </div>`
  });
ground.component('mainAppComponent', {
      template: `
      <div class="">
        <nav-component></nav-component>
          <div class="main">
            <div ui-view>Hey inside ui-view 2</div
          </div>
      </div>`
    });



// const app = angular.module('mainApp',[uiRouter])
// .config(($stateProvider) => {
  //   $stateProvider('mainAppState', {
  //     redirectTo: 'allStoriesState',
  //     url: '/app',
  //     component: mainAppComponent
  //   });
  // });
//
// const allStories = angular.module('allStories',[uiRouter])
//   .component('allStories', {
//     bindings: {
//       allStories: '<'
//     },
//     template: `
//     <div class="stories"> <h1>Stories </h1>
//     <ul class="stories-list">
//       <li ng-repeat="story in $ctrl.stories">
//         {{story.title}}
//       </li>
//     </ul>
//     </div>`,
//     controller: class AllStoriesComponent {
//       constructor($state){
//         this.$state = $state;
//         console.log($state);
//       }
//     }
//   }).config(($stateProvider) => {
//     $stateProvider.state('allStoriesState', {
//       parent: 'mainAppState',
//       url: '/allStories',
//       component: 'allStories',
//       resolve: {
//         stories(StoryService){
//           console.log(StoryService.getAllStoriesList());
//           return StoryService.getAllStoriesList();
//         }
//       }
//     });
//   }).service('StoryService', StoryService);
