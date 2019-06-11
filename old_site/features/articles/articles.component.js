/*
 * Title: ./src/site/features/articles/articles.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of homeState
    - should be registerd with StateRegistry
 *
 * Author: Ben Merchant
*/
// first need the html template for the articlesState object
import {articlesTemplate} from './articles.html';

class articlesController {
  constructor(){};


};

export const articlesComponent = {
  template: articlesTemplate,
  controller: articlesController
};
