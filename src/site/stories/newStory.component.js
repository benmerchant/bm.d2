import {newStoryTemplate} from './newStory.html.js';

export const newStoryComponent = {
  template: newStoryTemplate,
  controller: class NewStoryComponent {
    constructor(StoryService, $state) {
      this.storyService = StoryService;
      this.$state = $state;
    }
    $onInit(){
      this.story = {
        title: '',
        bodyCopy: '',
        storyType: ''
      };
    }
    createNewStory(event){
      return this.contactService
        .createNewStory(event.story)
        .then((story) => {
          $this.$state.go('home',{
            theNewStoryObj: story
          });
        });
    };
  }
}
