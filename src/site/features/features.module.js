/*
 * Title: ./src/site/features/features.module.js
 *
 * Description: gather all features and export to be more easily registered
 *
 * Author: Ben Merchant
*/

// import features
import {homeComponent} from './home/home.component';

import {aboutComponent} from './about/about.component';
import {tutorialsComponent} from './tutorials/tutorials.component';
import {projectsComponent} from './projects/projects.component';
import {articlesComponent} from './articles/articles.component';
import {blogComponent} from './blog/blog.component';

import {storyCardsComponent} from './storyCards/storyCards.component';


import {linkListerComponent} from './linkLister/linkLister.component';
import {LinkListerService} from './linkLister/linkLister.service';

export const FeaturesModule = angular.module('features',[]);

FeaturesModule.component('homeComponent',homeComponent);

FeaturesModule.component('blogComponent',blogComponent);
FeaturesModule.component('aboutComponent',aboutComponent);
FeaturesModule.component('articlesComponent',articlesComponent);
FeaturesModule.component('tutorialsComponent',tutorialsComponent);
FeaturesModule.component('projectsComponent',projectsComponent);

FeaturesModule.component('storyCardsComponent',storyCardsComponent);


FeaturesModule.component('linkListerComponent',linkListerComponent);
FeaturesModule.service('LinkListerService', LinkListerService);
