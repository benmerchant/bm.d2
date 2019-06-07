/*
 * Title: ./src/site/shared/nav/nav.html.js
 *
 * Description: all HTML for the nav bar
 *
 * Author: Ben Merchant
*/

export const navTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <div class="navbar-nav mr-auto mt-2 mt-lg-0">

        <a class="nav-item nav-link" ui-sref="home">All</a>


        <a class="nav-item nav-link" href="#">About</a>
        <a class="nav-item nav-link" href="#">Tutorials</a>
        <a class="nav-item nav-link" href="#">Projects</a>
        <a class="nav-item nav-link" href="#">Articles</a>
        <a class="nav-item nav-link" href="#">Blogs</a>
        <a class="nav-item nav-link" ui-sref="linkList">Link List</a>

    </div>
    <form class="form-inline my-2 my-lg-0">
    <!-- Filter the Cards -->
      <input ng-model="cardSearch" class="form-control mr-sm-2" type="search" placeholder="Search">

      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
`;

// <button class="btn btn-success" ui-sref="home">Home</button>
// <button class="btn btn-success" ui-sref="linkList">Link List</button>
