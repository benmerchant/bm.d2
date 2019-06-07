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
export const frameTemplate = `
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a href="#" class="navbar-brand text-white">Ben Merchant dot dev</a>
  <button type="button" name="menu" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
<main class="container">
  <h3 style='color:red;'>Frame State</h3><br><br>
  <button class="btn btn-success" ui-sref="home">Home</button>
  <button class="btn btn-success" ui-sref="linkList">Link List</button>
  <br><br>
  <ui-view></ui-view>
</main>
<footer class="footer">
  <div class="container">
    <h3>&copy; 2019 <a target='_blank' href="https://github.com/benmerchant">Ben Merchant</a></h3>
  </div>
</footer>
`;
