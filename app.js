const numbers1 = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['õun', 'banaan', 'apelsiin', 'virsik'];
const mixed = [22, 'Tere', true, undefined, null, {a:1, b:2}, new Date()];


let val;

val = numbers1.length; // massiivi pikkus
 
val = Array.isArray(numbers1); // kas on massiiv

val = numbers1[3]; // kindel element
val = numbers1[0];

numbers1[2] = 100; // elemendi lisamine

val = numbers1.indexOf(36); // elemendi järgi index

numbers1.push(250); // element massiivi lõppu
numbers1.unshift(120); // element massiivi ette
numbers1.pop(); // element massiivi lõpust maha
numbers1.shift(); // element massiivi eest maha

// console.log(numbers1);

// numbers1.splice(1, 3); // elementide välja lõikamine

// numbers1.reverse(); // targurpidi massiiv
val = numbers1.concat(numbers2); // massivide ühendamine

val = fruits.sort(); // teksti masiivi sorteerimine

console.log(numbers1);

// numbrite massiivi sorteerimine kasvujärjekorras
val = numbers1.sort(function(x, y){
	return x - y;
});

// numbrite massiivi sorteerimine kahanemisjärjekorras
val = numbers1.sort(function(x, y){
	return y - x;
});

console.log(val);