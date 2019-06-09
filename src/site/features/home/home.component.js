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
  constructor(){
    this.hideForm = true;

  };
  $onInit(){
    this.toggleHideForm = (valueFromView)=>{
      // for now just hard code the button name to send it back here
      // later do it programattically. lets just get it running
        this.hideForm ? this.hideForm = false : this.hideForm = true;
        !this.hideForm ? this.storyType = valueFromView : this.storyType = null;
    };
  };
};


export const homeComponent = {
  template: homeTemplate,
  controller: HomeController
};
