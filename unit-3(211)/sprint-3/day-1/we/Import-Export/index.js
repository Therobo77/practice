import {navbar,footer} from './components/navbar.js';

console.log(navbar);

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

import { jeans,T_shirt } from './components/data.js';
console.log(jeans,T_shirt);