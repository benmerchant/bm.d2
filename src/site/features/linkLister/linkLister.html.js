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
<h2 class="text-center">Link List State</h2>
<div class="row">
<div class="col-6">
<form name="linkForm" class="linkForm" novalidate ng-submit="$ctrl.onSubmit();">
  <div class="form-group">
    <label for="linkURL">URL</label>
    <input class="form-control" ng-class="{'failure':linkForm.theUrl.$dirty && linkForm.theUrl.$invalid}" name="theUrl" ng-model="$ctrl.newLinkForTheList.url" type="text" id="linkURL-id" aria-describedby="linkHelper" placeholder="Enter the URL" required>
    <small id="linkHelper" class="form-text text-muted">What interesting website do you have for us today?</small>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description of The Site</label>
    <textarea class="form-control" name="linkDesc-name" ng-model="$ctrl.newLinkForTheList.description" id="linkDesc-id" placeholder="Want to describe it a bit now. No obligation, of course."></textarea>
  </div>
  <div class="form-group">
  <button class="btn btn-danger btn-lg" type="reset" ng-click="$ctrl.clearForm();linkForm.$setPristine();">Clear Form</button>
  <h4 ng-show="$ctrl.showWarning">Don't click submit now, It's a whole thing with the form clearing but keeping the values in the model</h4>
  <button ng-disabled="linkForm.theUrl.$invalid" class="btn btn-primary btn-lg" type="submit">Submit Link</button>
  </div>
</form>
</div>
<div class="col-6">
  <div ng-show="$ctrl.allLinks.length>=0">
    <ul>
      <li ng-repeat="link in $ctrl.allLinks">
        {{link.url}}
      </li>
    </ul>
  </div>
  <div ng-show="$ctrl.allLinks.length===0">
    No links yet
  <div>
</div>

</div>
`;
// put back after the form for testing
// <br><pre>data = {{$ctrl.newLinkForTheList | json}}</pre>
// <pre>master = {{$ctrl.master | json}}</pre>
