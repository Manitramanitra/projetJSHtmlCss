const fruits = ['pomme', 'mangue','fraise'];
let note = [ 2,3,5]
let fruitMaj = new Array();
const fruitPluriel = new Array();

// fruits.forEach((fruit)=>{
//   fruitMaj.push(fruit.toLocaleUpperCase());
//   fruitPluriel.push(fruit + 's');
// })

// traduit en fonction map()
fruitMaj = fruits.map((fruit)=>{
  return fruit.toLocaleUpperCase() // la fonction permet de retourner un nouveau tableau avec les modifications faites sur l'ancien mais il retourne le tableau toute entier
})
const notes = note.map((not)=>{
  return not + 4
})
console.log(notes);

console.log(fruits);
console.log(fruitMaj);
// console.log(fruitPluriel);

const tab = [5,6,8];

const tabs = [...note, ...tab]
console.log(tabs)