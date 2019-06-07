/*
 * Title: ./src/site/shared/shared.module.js
 *
 * Description: gather all shared and export to be more easily registered
 *
 * Author: Ben Merchant
*/

// import shared
import {frameComponent} from './frame/frame.component';


export const SharedModule = angular.module('shared',[]);

SharedModule.component('frameComponent',frameComponent);
