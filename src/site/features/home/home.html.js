/*
 * Title: ./src/site/features/home/home.html.js
 *
 * Description: - Defining the html template object for the homeState
          - this HTML will be a child of <main>
 *
 * Author: Ben Merchant
*/
import homeStyles from './home.scss'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })

export const homeTemplate = `
<div class='row homeRow'>
  <div class='col-12 text-center'>
    <h5 class="text-primary">Total of {{$parent.$ctrl.stories.length}} stories</h5>
  </div>

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

  <div class='col-12 p-0'>
    <div class='btn-group'>

      <div class="btn-group" role="group" aria-label="about example">
        <button type="button" class="btn btn-secondary active">about</button>
        <button type="button" class="btn btn-secondary">tutorials</button>
        <button type="button" class="btn btn-secondary">projects</button>
        <button type="button" class="btn btn-secondary">articles</button>
        <button type="button" class="btn btn-secondary">blog</button>
      </div>

    </div>
  </div>

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
