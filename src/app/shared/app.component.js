/**
  * @filename src\app\shared\app.component.js
  * @fileoverview
  *
  * @author Ben Merchant
  * @licence MIT
  * @copyright 2019
  */
export const appComponent = {
  template: `
<div class="base">
  <div class="app">
    <div ui-view></div>
  </div>
</div>`,
  controller: class AppComponent {
    constructor($state) {
      this.$state = $state;
      console.log($state);
    }
  }
};
