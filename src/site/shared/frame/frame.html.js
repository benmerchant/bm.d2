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
${navTemplate}
<main class="container">
  <ui-view></ui-view>
</main>
${footerTemplate}
`;
