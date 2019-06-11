
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
  };
  $onInit(){
    this.b = '$onInit - UNCHANGED';
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

//   this.getWidth = () => {
//     // this.winWide = window.innerWidth;
//     console.log('heyyy');
//   };
};

export const poeComponent = {
  template: poeTemplate,
  controller: PoeController,
  bindings: '<'
};
