/*
 * Title: ./src/site/features/about/about.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of homeState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the aboutState object
import {aboutTemplate} from './about.html';

class aboutController {
  constructor(){};


};

export const aboutComponent = {
  template: aboutTemplate,
  controller: aboutController
};
