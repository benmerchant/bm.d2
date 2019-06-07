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

// need a service in a moment lets just get ng-repeat working
import {newStories} from './storiesInFakeMongo';

class homeController {
  constructor(){};

  $onInit(){
    // make some programatticly created dates
    const storyMap = newStories.map(story => {
      let newYear = story.date.getFullYear();
      story['year'] = newYear;
    });
    this.stories = newStories;
    console.log(this.stories);
    this.tryStories = angular.copy(this.stories);
    console.log(this.tryStories);
  };
};

export const homeComponent = {
  template: homeTemplate,
  controller: homeController
};
