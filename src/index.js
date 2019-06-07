/*
 * Title: ./index.js
 *
 * Description: Starting point for webpack to bundle the app
 *              Import other modules
 *              create root AngularJS module and export
 *
 * Author: Ben Merchant


 // just like last time, i'm going to work with ui-router
 // https://github.com/ui-router/sample-app-angularjs
 // doing my best not to copy and paste. just trying to be transparent
 // also referenceing benmerchant.dev v1 repo cuz i got much right on that
 // https://github.com/benmerchant/benmerchant.dev/
 // and my WebDev Journal #1 & #2
 // #1 is when i learned AngularJS
 // #2 is from working on bmdd 1.0
 // add this to README later

 // this will be VERY scaled down to make sure it I understand whats exactly going on
 // only one js file for now

*/
// import scss
// for now, leave this here, can move it later to where it makes more sense
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './index.scss';

import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// create the app-level module and inject ui-router
console.log('<bmddApp> - module definition');
angular.module('bmddApp', [uiRouter])
        .config(['$uiRouterProvider',($uiRouter)=>{
          console.log('<bmddApp> - module config');

          // define states

          // parent state - the 'frame' for entire app
          // viewport goes here, 'ui-view'
          const frameState = {
            name: 'frame',
            redirectTo: 'home',
            template:  `
            <h3 style='color:red;'>Frame State</h3><br><br>
            <button class="btn btn-success" ui-sref="home">Home</button>
            <button class="btn btn-success" ui-sref="linkList">Link List</button>
            <br><br>
            <div ui-view></div>
            `
          };

          // home state - first thing you see when you type in the url
          // also where the site redirects you if you 404
          const homeState = {
            parent: 'frame',
            name: 'home',
            url: '/home',
            template: `<h2>Home State</h2>`
          }
          // one more state to test the transitions
          // we're only gonna have one other state later anyways
          const linkListState = {
            parent: 'frame',
            name: 'linkList',
            url: '/linkList',
            template: `<h2>Link List State</h2>`
          }

          // enable tracing the State Transitions in the console
          $uiRouter.trace.enable(1);

          // basically a 404, later we'll make a state with custom page
          $uiRouter.urlService.rules.otherwise({state: 'home'});

          // register the states
          $uiRouter.stateRegistry.register(frameState);
          $uiRouter.stateRegistry.register(homeState);
          $uiRouter.stateRegistry.register(linkListState);



        }]);
