/**
  * @filename ~/src/site/features/story.service.js
  * @fileoverview define the CRRUD functions for stories
  *
  * @author Ben Merchant
  * @licence MIT
  * @copyright June 11, 2019
*/

export class StoryService {
  constructor($mongodbArray){
    this.$mongodbArray = $mongodbArray;
  };

  getAllStoriesList() {
    return this.$mongodbArray;
  }
};
