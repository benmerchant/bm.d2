import { StoryService } from './story.service';
import { allStories } from './allStories.module';

export const story = angular.module('story', [allStories])
        .service('StoryService', StoryService).name;
