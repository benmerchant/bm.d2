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



// const tutorialsCardsState = {
//   name: 'home.tutorialsCards',
//   component: 'tutorialsCardsComponent'
// };
// const projectsCardsState = {
//   name: 'home.projectsCards',
//   component: 'projectsCardsComponent'
// };
// const articlesCardsState = {
//   name: 'home.articlesCards',
//   component: 'articlesCardsComponent'
// };
// const blogCardsState = {
//   name: 'home.blogCards',
//   component: 'blogCardsComponent'
// };



export const FeaturesStates = [
  aboutState,tutorialsState,projectsState,articlesState,blogState,searchState


];
