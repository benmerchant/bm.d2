/*
 * Title: ./src/site/shared/frame/frame.html.js
 *
 * Description: - Defining the html template object for the frameState
          - frameState is the highest level state
          - frameState is the 2nd highest level view next to index.html
          - this HTML will be an immediate child of <body>
 *
 * Author: Ben Merchant
*/
console.log('frame.html.js');

import frameStyles from './frame.scss'

import {navTemplate} from '../nav/nav.html';
import {footerTemplate} from '../footer/footer.html';

export const frameTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Ben Merchant dot dev</a>
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
      <input ng-model="topSearch" class="form-control mr-sm-2" type="search" placeholder="Search">

      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<main class="container">
  <ui-view></ui-view>
</main>
${footerTemplate}
`;
