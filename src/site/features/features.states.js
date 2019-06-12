/*
 * Title: ./src/site/features/features.states.js
 *
 * Description: - Defining states with the StateDeclaration object
 *              - These must be registered with $uiRouter.stateRegistry.register()
 *
 * Author: Ben Merchant
*/
// don't need to import the components here... why???
// @because they're just string names!!!!

// define the states

// these are all nested states of homeState
const aboutState = {
  name: 'home.about',
  component: 'aboutComponent',
  url: '/about'
};
const tutorialsState = {
  name: 'home.tutorials',
  component: 'tutorialsComponent',
  url: '/tutorials'
};
const projectsState = {
  name: 'home.projects',
  component: 'projectsComponent',
  url: '/projects'
};
const articlesState = {
  name: 'home.articles',
  component: 'articlesComponent',
  url: '/articles'
};
const blogState = {
  name: 'home.blog',
  component: 'blogComponent',
  url: '/blog'
};
const blogPost = {
  name: 'blog.post',
  url: '/blog/:blogId',
  templateUrl: 'blog.story.html',
  controller: function($stateParams){
    console.log($stateParams);
  }
};

// if they actually click SEARCH take to search results
const searchState = {
  name: 'frame.search',
  template: '<h1 style="font-size:9rem"; class="text-white">seaarch results go here!</h1>'
};



export const FeaturesStates = [
  aboutState,tutorialsState,projectsState,articlesState,blogState,searchState


];
