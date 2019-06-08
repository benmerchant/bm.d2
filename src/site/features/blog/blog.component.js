/*
 * Title: ./src/site/features/blog/blog.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of homeState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the blogState object
import {blogTemplate} from './blog.html';

class blogController {
  constructor(){};


};

export const blogComponent = {
  template: blogTemplate,
  controller: blogController
};
