export const createForm = `
  <form name="linkForm" class="linkForm" novalidate ng-submit="$ctrl.onSubmit();">


  <div class="form-group">
    <label for="linkURL">
      URL
    </label>
    <input class="form-control" ng-class="{'failure':linkForm.theUrl.$dirty && linkForm.theUrl.$invalid}" name="theUrl" ng-model="$ctrl.newLinkForTheList.url" type="text" id="linkURL-id" aria-describedby="linkHelper" placeholder="Enter the URL" required>
    <small id="linkHelper" class="form-text text-muted">
      What interesting website do you have for us today?
    </small>
  </div>


  <div class="form-group">
    <label for="exampleFormControlTextarea1">
      Description of The Site
    </label>
    <textarea class="form-control" name="linkDesc-name" ng-model="$ctrl.newLinkForTheList.description" id="linkDesc-id" placeholder="Want to describe it a bit now. No obligation, of course."></textarea>
  </div>

  <!-- Need an ID or crashes app -->
  <div class="form-group">
    <input name="id" ng-model="$ctrl.newLinkForTheList.id" type="hidden" id="linkURL-id" value="8976" required>

  </div>


  <div class="form-group">
    <button class="btn btn-danger btn-lg" type="reset" ng-click="$ctrl.clearForm();linkForm.$setPristine();">
      Clear Form
    </button>
    <h4 ng-show="$ctrl.showWarning">
      Don't click submit now, It's a whole thing with the form clearing but keeping the values in the model
    </h4>
    <button ng-disabled="linkForm.theUrl.$invalid" class="btn btn-primary btn-lg" type="submit">
      Submit Link
    </button>
  </div>
</form>
`;

export const theActualListOfLinks = `
    <div ng-show="$ctrl.allLinks.length>=0">
      <div class="list-group">
        <div ng-class="{'list-group-item-info':  link.daysAgo<=7, 'list-group-item-danger': link.daysAgo>7}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center flex-column " ng-repeat="link in $ctrl.allLinks">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{link.url}}</h4>
          <small>{{link.daysAgo}} days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <div class="w-100 d-flex justify-content-center">
          <h3><a ui-sref="viewOneLink( {linkId:{{ (link.id?link.id:999) }} })" class="badge badge-primary mx-2">Edit</a></h3>
          <h3><a ui-sref="viewOneLink( {linkId:{{ (link.id?link.id:999) }} })" class="badge badge-danger  mx-2">Delete</a></h3>
        </div>



        </div>
      </div>
    </div>
    <div ng-show="$ctrl.allLinks.length===0">
      No links yet
    </div>
`;
