/*
 * Title: ./src/site/features/home/home.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of frameState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
console.log('home.component.js');
// first need the html template for the homeState object
import {homeTemplate} from './home.html.js';

// need a service in a moment lets just get ng-repeat working
import {newStories} from './storiesInFakeMongo';

class homeController {
  constructor(){
    this.name = 'Ben Merchant';
  };
  $onInit(){
    this.stories = newStories;
    console.log(this.stories);
  };
};

export const homeComponent = {
  template: homeTemplate,
  controller: homeController
};
