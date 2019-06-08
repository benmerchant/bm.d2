/*
 * Title: ./src/site/features/projects/projects.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of homeState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the projectsState object
import {projectsTemplate} from './projects.html';

class projectsController {
  constructor(){};


};

export const projectsComponent = {
  template: projectsTemplate,
  controller: projectsController
};
