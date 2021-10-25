// Muutujad
// var, let, const

// deklareerimine
// let name = 'Anna Karutina';
// kasutamine
// console.log(name);
// name = 'Mihhail Karutin';
// console.log(name);

// lubatud märgid nime loomisel - tähed, numbrid, _, $
// numbriga muutuja nimi alustada ei tohi!

// let $ = 'dollar';
// console.log($);

const name = 'Anna Karutina';
console.log(name);
// const ei saa muuta väärtust
// name = 'Mihhail Karutin';

// massivid
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// objektid
const person = {
	name: 'Kadi',
	age: 20
};
person.name = 'Kati';
person.age = 15;
console.log(person);