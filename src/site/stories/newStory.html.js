export const newStoryTemplate = `
<form class="bg-light p-4 w-707 mx-auto" >

  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="Title">
      Title
    </label>
    <input class="col-sm-10 form-control form-control-lg" id="title" placeholder="What the story about?" type="text">
  </div>

  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="body-copy">
      SOMETHING
    </label>
    <input class="col-sm-10 form-control form-control-lg" id="body-copy" placeholder="Tell it like it is" type="text">
  </div>

  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="story-type">
      Story Type
    </label>
    <input class="col-sm-10 form-control-plaintext" id="story-type" placeholder="{{$ctrl.storyType ? $ctrl.storyType : 'this should never happen'}}" type="text" readonly>
  </div>

  <button class="btn btn-primary mb-2" ng-disabled="1" ng-init="goAway = false" ng-mouseover="goAway ? goAway=false : goAway=true">
    Submit Story
  </button>
  <p class='text-center mx-auto bg-light rounded p-2' ng-show="goAway">
    <span style="font-size: 4rem;">ADMIN ONLY: GO AWAY!</span>
  </p>


</form>
`;
