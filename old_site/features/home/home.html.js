/*
 * Title: ./src/site/features/home/home.html.js
 *
 * Description: - Defining the html template object for the homeState
          - this HTML will be a child of <main>
 *
 * Author: Ben Merchant
*/
import homeStyles from './home.scss';

export const homeTemplate = `

<div class='row homeRow'>
  <div class='col-12 text-center'>
    <h5 class="text-primary">
      Total of {{$parent.$ctrl.stories.length}} stories
    </h5>
  </div>
  <!-- #begin col-12 <ui-view> -->
  <div class='col-12'>
    <ui-view>
      <div class="jumbotron jumbotron-fluid rounded">
      <div class="container">
      <h1 class="display-4">Ben Merchant dot dev</h1>

        <p class="lead">
          Fullstack JavaScript Web Developer |
          <i class="fab fa-node-js"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-git"></i>
          <i class="fab fa-aws"></i>
          <i class="fab fa-angular"></i>
          <i class="fab fa-sass"></i>
        </p>


        <hr class="my-4">
        <p>
          Click the navigation or use the search bar above to filter the stories.
          Link List is different because it's basically a beta project that will
          be spun off to its own site one day. Not starting another site yet, though.
          I give Bezos enough money every month.
        </p>
        <!--<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>-->
      </div>
      </div>
    </ui-view>
  </div>
  <!-- #end col-12 <ui-view> -->
  <p class=' text-center mx-auto bg-light rounded p-2'> Display the Story Type that is clicked. If clicking a button
  causes the form to disappear, set story type to NULL: <br>
<span style="font-size: 4rem;">{{$ctrl.storyType ? $ctrl.storyType : 'NOTHING'}}</span>
</p>
  <!-- #begin col-12  -->
  <div class="col-12 p-0 d-flex flex-row flex-wrap text-center">
    <small class="w-100"><span class='bg-light rounded p-2'>These will open forms to POST, UPDATE, DELETE</span></small><br><br>
    <div class='mx-auto my-4 d-flex flex-wrap'>
      <button ng-click="$ctrl.toggleHideForm('about')" type="button" class="btn btn-lg btn-secondary btn-block">about</button>
      <button ng-click="$ctrl.toggleHideForm('tutorials')" type="button" class="btn btn-lg btn-secondary btn-block">tutorials</button>
      <button ng-click="$ctrl.toggleHideForm('projects')" type="button" class="btn btn-lg btn-secondary btn-block">projects</button>
      <button ng-click="$ctrl.toggleHideForm('articles')" type="button" class="btn btn-lg btn-secondary btn-block">articles</button>
      <button ng-click="$ctrl.toggleHideForm('blog')" type="button" class="btn btn-lg btn-secondary btn-block">blog</button>
    </div>
  </div>
  <!-- #end col-12 -->

  <!-- #begin col-12 <form> -->
  <div ng-hide="$ctrl.hideForm" class="col-12 py-5 d-flex flex-row flex-wrap text-center bg-success storyForm">
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
  </div>
  <!-- #end col-12 -->

  <!-- #begin col-12 -->
  <div class='col-12 card-column p-0'>
    <div class="row m-0">


    <!-- # begin NG-REPEAT  -->
      <div ng-repeat="story in $parent.$ctrl.stories | filter:$parent.topSearch" class="col p-0">

        <!-- # begin card -->
        <div class="card mx-auto my-3" style="width: 18rem;">
          <img src="https://petharbor.com/get_image.asp?RES=Detail&ID=A607751&LOCATION=AZHS1" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{story.title}}</h5>
            <div class="d-flex flex-row justify-content-between">
              {{story.date.toDateString()}}
              <em><a ui-sref="home.{{story.category}}">{{story.category}}</a></em>
            </div>
            <hr>
            <p class="card-text">{{story.snippet}}</p>
            <button class="btn btn-outline-primary">Read More</button>
          </div>
        </div>
        <!-- # end card -->

      </div>
      <!-- # end NG-REPEAT -->


    </div>
  </div>
  <!-- #end col-12 -->

</div>



`;
