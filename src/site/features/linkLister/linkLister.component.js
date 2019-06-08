/*
 * Title: ./src/site/features/home/home.component.js
 *
 * Description:
    - Defining the StateDeclaration object for a child state of frameState
    - should be registerd with StateRegistry
    - need this to take form data and send to API to consume for DB
 *
 * Author: Ben Merchant
*/
// first need the html template for the linkListerState object
import {linkListerTemplate} from './linkLister.html';


// need the linknListerService to get links from MongoDB
// right now, tho, its just a local module containing an array
// inject it into the controller
class linkListerController {
  constructor(LinkListerService, $stateParams){
    this.LinkListerService = LinkListerService;
    this.$stateParams = $stateParams
  };
  $onInit(){
    this.showWarning = false;
    // empty model for new links
    this.newLinkForTheList = {url: ''};
    // need a service to retrieve links from DB

    // get array of links from Service
    // (testing now so just importing locally; no DB yet)
    this.allLinks = this.LinkListerService.getLinksFromFAKEMongo();

  };
  // when submit button is clicked
  onSubmit(){
    if(!this.newLinkForTheList) {
      alert('You submitted after clearing the form! We\'re working on that')
      return;
    } else {
      this.allLinks.push(angular.copy(this.newLinkForTheList));
    }
  };
  clearForm(){
    this.showWarning = true;
  };
};
linkListerController.$inject = ['LinkListerService'];


export const linkListerComponent = {
  template: linkListerTemplate,
  controller: linkListerController,
  bindings: {
    newLinkForTheList: '<',
    onAddLink: '&'
  }
};
