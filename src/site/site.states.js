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
import {poeComponent} from './shared/pie/poe.component';
import {createForm,theActualListOfLinks} from './features/linkLister/linkList.createForm.html.js';

// define states

// parent state - the 'frame' for entire app
// viewport goes here, 'ui-view'
const frameState = {
  name: 'frame',
  redirectTo: 'home',
  component: 'frameComponent'
};

// redirect 404
const poeState = {
  name: 'poe',
  url: '/poe',
  component: 'poeComponent'
}

const linkListState = {
  parent: 'frame',
  name: 'linkList',
  url: '/linkList',
  component: `linkListerComponent`
}

// just do it the long, ugly way for now
// remember: MVP, that's it
const createLinkFormState = {
  parent: 'linkList',
  name: 'createLink',
  url: '/new-link',
  template: createForm
}
const listLinkState = {
  parent: 'linkList',
  name: 'listLinks',
  url: '/view-links',
  template: theActualListOfLinks
}

const viewOneLinkState = {
  parent: 'linkList',
  name: 'viewOneLink',
  url: '/view-link/:linkId',
  template: '<h1>EDIT AND DELETE STUFF HERE</h1>'
}





// export all together
export const AllStates = [
  frameState,
  linkListState,
  createLinkFormState,
  listLinkState,
  viewOneLinkState,
  poeState
];
