let val;

// number -> string

val = String(555);
val = String(4+4);
val = String(5.6);

// boolean -> string

val = String(true);
val = String(false);

// objekt -> string
val = String(new Date());

// massiiv -> string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();


// string -> number
val = Number('5');
// boolean -> number
val = Number(true);
val = Number(false);
// null -> number
val = Number(null);
// tekst -> number
val = Number('tere');
// massiv -> number
val = Number([1, 2, 3]);

// string -> number
val = parseInt('100.30');
val = parseFloat('100.30');

console.log(typeof val);
console.log(val);