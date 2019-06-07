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

const FAKE_GLOBAL_SNIPPET_CHARACTER_LIMIT = "Some quick example text to build on the card title and make up the bulk of the card's content.".length-17;

class homeController {
  constructor(){};

  $onInit(){
    // make some programatticly created dates
    const storyMap = newStories.map(story => {
      let newYear = story.date.getFullYear();
      story['year'] = newYear;
      story['snippet'] = story.body_copy.substring(0,FAKE_GLOBAL_SNIPPET_CHARACTER_LIMIT)+'...';
    });
    this.stories = newStories;
    console.log(this.stories);
  };
};

export const homeComponent = {
  template: homeTemplate,
  controller: homeController
};
