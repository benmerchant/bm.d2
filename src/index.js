import _ from 'lodash';

let alertWord = _.join(['Hello', 'Node'], ' ');

const el = document.createElement('h1');
const myTitle = document.createTextNode('Ben Merchant dot dev');
el.appendChild(myTitle);
document.body.appendChild(el);
