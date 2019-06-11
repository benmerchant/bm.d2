/**
* @filename src\site\features\allStories.component.js
* @fileoverview component for  GET all stories
*
* @author Ben Merchant
* @licence MIT
* @copyright 2019
*/

export const allStoriesComponent = {
  bindings: {
    stories: '<',
  },
  template: `
    <p ng-repeat="story in $ctrl.stories">
      <span>{{story.title}}</span>
    </p>
  `,
  controller: class AllStoriesComponent {
    constructor($state){
      this.$state = $state;
    };
  };
};
