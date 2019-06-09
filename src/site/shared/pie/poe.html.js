/*
 * Title: src/site/poe/poe.html.js
 *
 * Description: template for the 404 page
 *
 * Author: Ben Merchant
*/

import poeStyles from './poe.scss'
import logoBlack from '../../../imgs/logo_black.png';
const logoBlackElement = new Image();
logoBlackElement.src = logoBlack;
export const poeTemplate = `
<nav class="crazy-nav navbar-expand-sm navbar-light bg-light">
  <div class="w-100 text-center">
    <a class="navbar-brand" href="#">
      <img src="${logoBlack}" class="logos twist-shout">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>


  <div class="w-100">
    <form class="form-inline my-2 my-lg-0 twist-shout">
    <!-- Filter the Cards -->
      <input ng-model="topSearch" class="form-control mr-sm-2" type="search" placeholder="Search">

      <button class="btn btn-outline-primary my-2 my-sm-0 " type="submit" ng-click="$ctrl.goToSearchPage()">
        Search
      </button>
    </form>
  </div>

</nav>

<div class="battery"><i class="fa fa-bars" aria-hidden="true"></i></div>

<a class="nav-item nav-link " ui-sref="home">All</a>
<a class="nav-item nav-link" ui-sref="home.about">About</a>
<a class="nav-item nav-link" ui-sref="home.tutorials">Tutorials</a>
<a class="nav-item nav-link" ui-sref="home.projects">Projects</a>
<a class="nav-item nav-link" ui-sref="home.articles">Articles</a>
<a class="nav-item nav-link" ui-sref="home.blog">Blog</a>
<button class="btn nav-item nav-link btn-primary btn-sm" ui-sref="linkList">Link List</button>

`;
