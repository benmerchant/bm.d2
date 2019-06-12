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
<nav class="crazy-nav navbar-expand-sm navbar-light bg-primary">
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

      <input ng-model="$ctrl.searchTerm" class="form-control mr-sm-2" type="search" placeholder="Search">
      <button ng-click="$ctrl.crazyButton()" class="btn btn-outline-primary my-2 my-sm-0 " type="submit" ng-click="$ctrl.goToSearchPage()">
        Search
      </button>
    </form>
  </div>
</nav>

<div class="d-flex flex-row flex-wrap">
  <div class="w-50 text-center text-white bg-dark pb-5 mt-5 d-block mx-auto twist-shout"><br>
    <button class="btn btn-lg text-white" ui-sref="home">All</button><br>
    <button class="btn btn-lg text-white" ui-sref="home.about">About</button><br>
    <button class="btn btn-lg text-white" ui-sref="home.tutorials">Tutorials</button><br>
    <button class="btn btn-lg text-white" ui-sref="home.projects">Projects</button><br>
    <button class="btn btn-lg text-white" ui-sref="home.articles">Articles</button><br>
    <button class="btn btn-lg text-white" ui-sref="home.blog">Blog</button><br>
    <button class="btn btn-primary btn-sm" ui-sref="linkList">Link List</button><br>
    <button class="btn btn-lg btn-dark" ng-click="$ctrl.getWidth()">Width</button><br>
    {{$ctrl.a ? $ctrl.a : 'empty'}}<br>
    {{$ctrl.b ? $ctrl.b : 'empty'}}<br>
    {{$ctrl.c ? $ctrl.c : 'empty'}}<br>
    {{$ctrl.d ? $ctrl.d : 'empty'}}<br>
    {{$ctrl.e ? $ctrl.e : 'empty'}}<br>
    {{$ctrl.f ? $ctrl.f : 'empty'}}<br>
  </div>
  <div class="text-white w-100 text-center ">
    <h1 class="display-1">404</h1>
    <div ng-show="$ctrl.searchClickedOnce" class="mx-auto" style="background: white; width: 50%; color:black;">
    <a ui-sref="home">Return Home</a>
    </div>
  </div>

</div>

`;
