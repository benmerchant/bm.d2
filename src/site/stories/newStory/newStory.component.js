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
    };
    saveStory(){
      console.log('saveStory');
      this.onSave({ $event: { story: this.story } });
    };
    updateStoryModel(){
      console.log('updateStoryModel');
      this.onUpdate({ $event: { story: this.story } });
    };
    createNewStory(event){
      return this.storyService
        .createNewStory(event.story)
        .then((story) => { this.$state.go('home')} );
    }
  },
  bindings: {
    story: '<',
    onUpdate: '&',
    onSave: '&'
  }
}
