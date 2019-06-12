export const storiesAllComponent = {
  bindings: {
    stories: '<'
  },
  template: `
    <div class="stories-all">
      <ul class="stories-list">
        <li ng-repeat="story in $ctrl.allTheStories">
          <h3>{{story.bodyCopy}}<h3>
        </li>
      </ul>
    </div>
  `,
  controller: class StoriesAllComponent {
    constructor($state){
      this.$state = $state;
    }
  }
}
