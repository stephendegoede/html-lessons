//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var superhero = superheroes.random();
var supervillain = supervillains.random();

console.log(superhero + " beat " + supervillain);
