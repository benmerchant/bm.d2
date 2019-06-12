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

class HomeController {
  constructor($state){
    this.hideForm = true;
    this.$state = $state;
  };
  $onInit($state){
    /**
      * show/hide the form to submit a new story to DB
      * @param {String} valueFromView // one of the storyTypes
      */
    this.toggleHideForm = (valueFromView)=>{
      this.hideForm ? this.hideForm = false : this.hideForm = true;
      !this.hideForm ? this.storyType = valueFromView : this.storyType = null;
      // console.log(this.$state.get());
    };
  };
};


export const homeComponent = {
  template: homeTemplate,
  controller: HomeController
};
