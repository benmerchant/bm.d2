/*
 * Title: ./src/site/features/features.states.js
 *
 * Description: - Defining states with the StateDeclaration object
 *              - These must be registered with $uiRouter.stateRegistry.register()
 *
 * Author: Ben Merchant
*/
// don't need to import the components here... why???
// define the states

// these are all nested states of homeState
const aboutState = {
  name: 'home.about',
  component: 'aboutComponent'
};
const tutorialsState = {
  name: 'home.tutorials',
  component: 'tutorialsComponent'
};
const projectsState = {
  name: 'home.projects',
  component: 'projectsComponent'
};
const articlesState = {
  name: 'home.articles',
  component: 'articlesComponent'
};
const blogState = {
  name: 'home.blog',
  component: 'blogComponent'
};
export const FeaturesStates = [
  aboutState,tutorialsState,projectsState,articlesState,blogState
];
