/*
 * Title: ./src/site/shared/frame/frame.component.js
 *
 * Description: - Defining the StateDeclaration object for the parent state
          - frameState is the highest level state
          - frameState is the 2nd highest level view next to index.html
          - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
console.log('frame.component.js');
// first need the html template for the frameState object
import {frameTemplate} from './frame.html.js';

class frameController {
  constructor(){
    this.name = 'Ben Merchant';
  };
};

export const frameComponent = {
  template: frameTemplate,
  controller: frameController
};
