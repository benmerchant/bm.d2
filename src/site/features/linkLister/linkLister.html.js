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
  <div class="col-12 text-center text-white py-3">
    <h2 class="text-center">Link List State</h2>
    <h5>Total of {{$ctrl.allLinks.length}} Links</h5>
    <div class="btn-group" role="group">
      <button class="btn btn-dark btn-lg" ui-sref="createLink">
        Add New Link
      </button>
      <button class="btn btn-dark btn-lg" ui-sref="listLinks">
        View All Links
      </button>
    </div>



  </div>

  <!-- Main div for CRUD ops -->
  <div class="col-12 mb-5 link-dash-arena">

  <div class="row">
    <div class="col-lg-2 col-md-12"></div>
    <div class="col-lg-8 col-md-12">



      <div ui-view>
      <h1>
Click a Sub Nav for CRUD operations
      </h1>


      </div>



    </div>
    <div class="col-lg-2 col-md-12"></div>
  </div>
</div>
`;
// put back after the form for testing
// <br><pre>data = {{$ctrl.newLinkForTheList | json}}</pre>
// <pre>master = {{$ctrl.master | json}}</pre>
