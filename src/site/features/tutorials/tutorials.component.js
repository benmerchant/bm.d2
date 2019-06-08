/*
 * Title: ./src/site/features/tutorials/tutorials.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of homeState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the tutorialsState object
import {tutorialsTemplate} from './tutorials.html';

class tutorialsController {
  constructor(){};
};

export const tutorialsComponent = {
  template: tutorialsTemplate,
  controller: tutorialsController
};
