/*
 * Title: ./src/site/features/home/home.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of frameState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the homeState object
import {homeTemplate} from './home.html.js';




class homeController {
  constructor($state){this.$state = $state;};
//   openStory(){
//     console.log('heyoooo');
//   };
//
//   isActive(feature){
//     console.log('this ' + feature + ' is ' + this.$state.includes(feature));
//     return this.$state.includes(feature);
//   };
//
//
};
// homeController.$inject = ['$state'];

export const homeComponent = {
  template: homeTemplate,
  controller: homeController
};
