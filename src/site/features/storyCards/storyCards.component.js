/*
 * Title: ./src/site/features/storyCards/storyCards.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of frameState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the storyCardsState object
import {storyCardsTemplate} from './storyCards.html.js';




class StoryCardsController {
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
// storyCardsController.$inject = ['$state'];

export const storyCardsComponent = {
  template: storyCardsTemplate,
  controller: StoryCardsController
};
