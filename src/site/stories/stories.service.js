/**
* @filename
* @fileoverview the CRUD functions for stories
*
* @author Ben Merchant
* @licence MIT
* @copyright 2019
*/

export class StoryService {
  constructor($http){
    this.$http = $http;
    this.url = 'http://localhost:3001/api/stories';
  }
  /**
    * send a story object to be saved in MongoDB
    *
    * @param {Object} story {
                              title: String,
                              bodyCopy: String,
                              storyType: String Enum
                            }
    * @returns {Object} {
                            "message": "Success - url & description",
                            "story": {
                                "_id": ObjectId,
                                "title": String,
                                "bodyCopy": String
                                "storyType": String,
                                "dateAdded": DateString,
                                "__v": 0 <- if successful
                            }
                        }
    *
    */
  createNewStory(story) {
    return (story, cb) => {
      this.$http.post(`${this.url}`,story)
            .then((responseData) => {
              console.log('api call successful. Response:');
              console.log(response.data);
              cb(response.data);
            }, (errorCallback) => {
              console.log('api call failure. Response:');
              if(errorCallback.status === 400){
                console.log(errorCallback.data);
                cb('error');
              }
            });
    }
  }
}
