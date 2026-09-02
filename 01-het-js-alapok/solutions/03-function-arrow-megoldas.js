// ============================================================
// 1. hét — C) Function declaration vs. arrow function — MEGOLDÁSOK
// ============================================================

// 27.
function square(num) {
  return num * num;
}
const squareArrow = (num) => num * num;
console.log("27:", square(5), squareArrow(5));

// 28.
const isEven = (num) => num % 2 === 0;
console.log("28:", isEven(4), isEven(7));

// 29. — 7 (3 > 7 hamis, a return b fut le)
const getMax = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log("29:", getMax(3, 7));

// 30. — nem dob hibát, a function declaration teljesen hoistolódik
console.log("30:", squareFn(5));
function squareFn(n) {
  return n * n;
}

// 31.
const add = (a, b) => a + b;
console.log("31:", add(3, 4));

// 32. — hiányzik a const/let/var a deklaráció elől
const multiply = (a, b) => a * b;
console.log("32:", multiply(3, 4));

// 33. — igen, hiba nélkül fut, egyparaméteres arrow zárójel nélkül is jó
const squareShort = num => num * num;
console.log("33:", squareShort(4));

// 34. — javítva: kerek zárójel jelzi az objektum-literált
const createObjectBroken = name => { name: name }; // undefined-et ad
const createObjectFixed = name => ({ name: name });   // { name: 'Panni' }
console.log("34 rossz:", createObjectBroken("Panni"));
console.log("34 jó:", createObjectFixed("Panni"));

// 35.
function greet(name = "Ismeretlen") {
  console.log("Szia, " + name + "!");
}
greet();
greet("Panni");

// 36. — ReferenceError, mert a const/arrow a TDZ-ben van a deklaráció előtt
try {
  eval("greet2(); const greet2 = (name = 'Ismeretlen') => console.log('Szia, ' + name + '!');");
} catch (e) {
  console.log("36:", e.message);
}

// 37. — ugyanaz a hiba, mint a 36-nál (TDZ), a 30-as function declaration ELTÉR ettől
try {
  eval("add2(2, 3); const add2 = (a, b) => a + b;");
} catch (e) {
  console.log("37:", e.message);
}

// 38. — nyitott, szöveges összefoglaló, nincs kód
console.log("38: function declaration -> hívható a deklaráció előtt is (hoisting), saját 'this' a hívótól függ.");
console.log("    arrow function -> rövidebb, nem hoistolódik a const miatt, 'this' a környező kódból öröklődik.");
