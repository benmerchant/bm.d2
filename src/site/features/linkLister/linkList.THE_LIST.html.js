export const theActualListOfLinks = {`
  <div class="col-lg-6 col-sm-12 ">
    <div ng-show="$ctrl.allLinks.length>=0">
      <div class="list-group">
        <div ng-class="{'list-group-item-info':  link.daysAgo<=7, 'list-group-item-danger': link.daysAgo>7}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center flex-column " ng-repeat="link in $ctrl.allLinks">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{link.url}}</h4>
          <small>{{link.daysAgo}} days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <div class="w-100 d-flex justify-content-center">
          <h3><a href="#" class="badge badge-primary mx-2">Edit</a></h3>
          <h3><a href="#" class="badge badge-danger  mx-2">Delete</a></h3>
        </div>



        </div>
      </div>
    </div>
    <div ng-show="$ctrl.allLinks.length===0">
      No links yet
    </div>
  </div>
`};
