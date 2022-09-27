import navbar from './navbar.js';
console.log('navbar:',navbar);


let navbr = document.getElementById('v-navbar');

navbr.innerHTML = navbar;


import {getData,apendData} from './fetch.js';

console.log('getData:,apendData',getData,apendData);

let url = `https://fakestoreapi.com/products`;

let res = await getData(url);

console.log('res',res);

let container = document.getElementById('v-container');

apendData(res,container);