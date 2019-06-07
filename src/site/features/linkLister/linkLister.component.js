/*
 * Title: ./src/site/features/home/home.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of frameState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
console.log('linkLister.component.js');
// first need the html template for the linkListerState object
import {linkListerTemplate} from './linkLister.html';

class linkListerController {
  constructor(){
    this.name = 'Ben Merchant';
  };
};

export const linkListerComponent = {
  template: linkListerTemplate,
  controller: linkListerController
};
