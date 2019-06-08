/*
 * Title: ./src/site/features/articles/articles.html.js
 *
 * Description: - Defining the html template object for the articlesState
          - this HTML will be a child of <main>
 *
 * Author: Ben Merchant
*/
import articlesStyles from './articles.scss';

export const articlesTemplate = `
<div class="jumbotron jumbotron-fluid rounded">
  <div class="container">
  <h1 class="display-4">Opinionated Writings</h1>

    <p class="lead">Fullstack JavaScript Web Developer</p>
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
`;
