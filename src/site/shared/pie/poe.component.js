
/*
 * Title: src/site/poe/poe.component.js
 *
 * Description: component for the 404 page
 *
 * Author: Ben Merchant
*/
import {poeTemplate} from './poe.html';
class PoeController {
  constructor(){
    this.a = 'constructor - UNCHANGED';
    this.searchTerm = '';
    this.searchClickedOnce = false;
  };
  $onInit(){
    this.b = '$onInit - UNCHANGED';
    this.crazyButton = ()=>{
      alert(this.searchTerm);
      this.searchClickedOnce===false ? this.searchClickedOnce = true : this.searchClickedOnce = true;
    }
  };
  $onChanges(){
    this.c= '$onChanges - UNCHANGED';

  };
  $doCheck(){
    this.d = '$doCheck - UNCHANGED';
  };
  $onDestroy(){
    this.e = '$onDestroy - UNCHANGED';
  };
  $postLink(){
    this.f = '$postLink - UNCHANGED';
  };


};

export const poeComponent = {
  template: poeTemplate,
  controller: PoeController,
  bindings: '<'
};
