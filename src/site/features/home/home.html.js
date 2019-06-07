/*
 * Title: ./src/site/features/home/home.html.js
 *
 * Description: - Defining the html template object for the homeState
          - this HTML will be a child of <main>
 *
 * Author: Ben Merchant
*/
import homeStyles from './home.scss'

export const homeTemplate = `
<div class='row homeRow'>
  <div class='col-12 text-center text-white'>
    <h2>Home State</h2>
    <h5>Total of {{$ctrl.stories.length}} stories</h5>
  </div>
  <div class='col-12 card-column p-0'>
    <div class="row m-0">
    <!-- # begin NG-REPEAT -->
      <div ng-repeat="story in $ctrl.tryStories" class="col p-0">

        <!-- # begin card -->
        <div class="card mx-auto my-3" style="width: 18rem;">
          <img src="https://petharbor.com/get_image.asp?RES=Detail&ID=A607751&LOCATION=AZHS1" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{story.title}}</h5>
            <div class="d-flex flex-row justify-content-between">
              {{story.date.toDateString()}}
              <em><a href="#">{{story.category}}</a></em>
            </div>
            <hr>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <!-- # end card -->

      </div>
      <!-- # begin NG-REPEAT -->


      </div>
    </div>
  </div>

</div>
`;
