/*
 * Title: ./src/site/shared/frame/frame.component.js
 *
 * Description: - Defining the StateDeclaration object for the parent state
          - frameState is the highest level state
          - frameState is the 2nd highest level view next to index.html
          - should be registerd with StateRegistry

          update: need to move cards here. so <nav> scope can see them
 *
 * Author: Ben Merchant
*/
// first need the html template for the frameState object
import {frameTemplate} from './frame.html.js';
// need a service in a moment lets just get ng-repeat working
import {newStories} from './storiesInFakeMongo';
const FAKE_GLOBAL_SNIPPET_CHARACTER_LIMIT = "Some quick example text to build on the card title and make up the bulk of the card's content.".length-17;


class frameController {
  constructor($state){
    this.name = 'Ben Merchant';
    this.$state = $state;
    console.log($state.params);
  };
  $onInit(){
    // make some programatticly created dates
    // map probably isn't the best choice
    const storyMap = newStories.map(story => {
      let newYear = story.date.getFullYear();
      story['year'] = newYear;
      story['snippet'] = story.body_copy.substring(0,FAKE_GLOBAL_SNIPPET_CHARACTER_LIMIT)+'...';
      story['id'] = newStories.indexOf(story);
    });
    this.stories = newStories;
  };
  isActive(feature){
    console.log('this ' + feature + ' is ' + this.$state.includes(feature));
    return this.$state.includes(feature);
  }
};
frameController.$inject = ['$state'];

export const frameComponent = {
  template: frameTemplate,
  controller: frameController,
  bindings: {name: '@'}
};
