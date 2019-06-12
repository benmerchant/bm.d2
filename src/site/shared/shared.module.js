/*
 * Title: ./src/site/shared/shared.module.js
 *
 * Description: gather all shared and export to be more easily registered
 *
 * Author: Ben Merchant
*/

// import shared
import {frameComponent} from './frame/frame.component';
// 404 Componenet
import {poeComponent} from './pie/poe.component';

export const SharedModule = angular.module('shared',[]);

SharedModule.component('frameComponent',frameComponent);

SharedModule.component('poeComponent',poeComponent);
