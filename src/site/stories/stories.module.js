/**
* @filename
* @fileoverview gather all modules for CRUDing stories
* also, get the stories.service module
* @author Ben Merchant
* @licence MIT
* @copyright 2019
*/

import {newStoryModule} from './newStory/newStory.module';
import {StoryService} from './stories.service';

export const storiesModule = angular.module('stories', [
  newStoryModule
]).service('StoryService', StoryService).name;
