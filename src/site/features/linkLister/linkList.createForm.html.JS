export const createForm = `<form name="linkForm" class="linkForm" novalidate ng-submit="$ctrl.onSubmit();">


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
