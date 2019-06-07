/*
 * Title: ./src/site/features/features.module.js
 *
 * Description: gather all features and export to be more easily registered
 *
 * Author: Ben Merchant
*/

// import features
import {homeComponent} from './home/home.component';
import {linkListerComponent} from './linkLister/linkLister.component';

export const FeaturesModule = angular.module('features',[]);

FeaturesModule.component('homeComponent',homeComponent);
FeaturesModule.component('linkListerComponent',linkListerComponent);
