/*
 * Title: ./src/site/features/linkLister/linkLister.html.js
 *
 * Description: - Defining the html template object for the linkListerState
          - this HTML will be a child of <main>
 *
 * Author: Ben Merchant
*/

import linkListerStyles from './linkLister.scss'

export const linkListerTemplate = `
<!-- Top Level of linkListState -->
<div class="row linkRow">
  <!-- Header column -->
  <div class="col-12 text-center text-white">
    <h2 class="text-center">Link List State</h2>
    <h5>Total of {{$ctrl.allLinks.length}} Links</h5>

      <button class="btn btn-outline-black" ui-sref="createLink">
        Add New Link
      </button>
      <button class="btn btn-outline-black" ui-sref="listLinks">
        View All Links
      </button>
      <button class="btn btn-outline-black" ui-sref="editLinks">
        Edit Links
      </button>
      <button class="btn btn-outline-black" ui-sref="deleteLinks">
        Delete Links
      </button>

  </div>

  <!-- Main div for CRUD ops -->
  <div class="col-12 mb-5 link-dash-arena">

  <div class="row">
    <div class="col-lg-3 col-md-12"></div>
    <div class="col-lg-6 col-md-12">
      <div ui-view>Click a Sub Nav for CRUD operations</div>
    </div>
    <div class="col-lg-3 col-md-12"></div>
  </div>
</div>
`;
// put back after the form for testing
// <br><pre>data = {{$ctrl.newLinkForTheList | json}}</pre>
// <pre>master = {{$ctrl.master | json}}</pre>
