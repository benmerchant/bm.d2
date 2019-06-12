export const newStoryTemplate = `
<form name="newStoryForm" class="bg-light p-4 w-707 mx-auto" >
  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="Title">
      Title
    </label>
    <input
      ng-model="$ctrl.story.title"
      ng-change="$ctrl.updateStoryModel();"
      ng-model-options="{
                          'updateOn':'default blur',
                          'debounce': {
                            'default': 200,
                            'blur': 0
                          }
                        }"
      class="col-sm-10 form-control form-control-lg"
      id="title"
      placeholder="What the story about?"
      type="text" name="title"
    >
  </div>

  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="body-copy">
      Tell the story...
    </label>
    <input ng-model="$ctrl.story.bodyCopy" class="col-sm-10 form-control form-control-lg" id="body-copy" placeholder="Type story here..." type="text">
  </div>

  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="story-type">
      Story Type
    </label>
    <input ng-model="$ctrl.story.storyType" class="col-sm-10 form-control-plaintext" id="story-type" placeholder="{{$parent.$ctrl.storyType ? $parent.$ctrl.storyType : 'this should never happen'}}" type="text" readonly>
  </div>

  <button
    class="btn btn-primary mb-2"
    ng-click="$ctrl.saveStory();">
    Submit Story
  </button>
  <p class='text-center mx-auto bg-light rounded p-2' ng-show="goAway">
    <span style="font-size: 4rem;">ADMIN ONLY: GO AWAY!</span>
  </p>
</form>
`;
