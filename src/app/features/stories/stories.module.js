import { storiesAll } from './storiesAll/storiesAll.module';
import { StoriesService } from './stories.service';


export const stories = angular.module('features.stories',[
  storiesAll
]).service('StoriesService', StoriesService).name;;
