/*
 * Title: ./src/site/site.states.js
 *
 * Description: - Defining states with the StateDeclaration object
 *              - These must be registered with $uiRouter.stateRegistry.register()
 *
 * Author: Ben Merchant
*/
// import components
import {frameComponent} from './shared/frame/frame.component';
import {homeComponent} from './features/home/home.component';
import {linkListerComponent} from './features/home/home.component';

// define states

// parent state - the 'frame' for entire app
// viewport goes here, 'ui-view'
const frameState = {
  name: 'frame',
  redirectTo: 'home',
  component: 'frameComponent'
};

// home state - first thing you see when you type in the url
// also where the site redirects you if you 404
const homeState = {
  parent: 'frame',
  name: 'home',
  url: '/home',
  component: 'homeComponent'
}
// one more state to test the transitions
// we're only gonna have one other state later anyways
const linkListState = {
  parent: 'frame',
  name: 'linkList',
  url: '/linkList',
  component: `linkListerComponent`
}

// export all together
export const AllStates = [
  frameState,
  homeState,
  linkListState
];
