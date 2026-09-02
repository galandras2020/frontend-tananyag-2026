// ============================================================
// 1. hét — C) Function declaration vs. arrow function — 12 feladat
// Frontend programozás és tesztelés
//
// Futtatás: node 03-function-arrow.js
// Megoldás: solutions/03-function-arrow-megoldas.js
// ============================================================

// --- 27. feladat — Írd meg ---
// Írj egy függvényt, ami egy szám négyzetét adja vissza —
// ELŐSZÖR function declaration formában, UTÁNA ugyanazt
// arrow function formában.



// --- 28. feladat — Írd meg ---
// Írj egy arrow function-t, ami eldönti egy számról, páros-e
// (true/false-t ad vissza).



// --- 29. feladat ---
const getMax = (a, b) => {
   if (a > b) return a;
   return b;
};
console.log(getMax(3, 7));


// --- 30. feladat ---
square(5);
function square(n) {
  return n * n;
}


// --- 31. feladat — Írd meg ---
// Alakítsd át ezt a function declarationt arrow function formára,
// implicit return-nel (tehát {} és return nélkül, ha lehet).
function add(a, b) {
  return a + b;
}



// --- 32. feladat — Hibakeresés ---
// Ez a kód szintaktikailag hibás. Találd meg, mi hiányzik.
// multiply = (a, b) => a * b;
// console.log(multiply(3, 4));



// --- 33. feladat ---
// Egyparaméteres arrow function-nél elhagyható a zárójel
// a paraméter körül. Fut-e ez a kód hiba nélkül?
const squareShort = num => num * num;
console.log(squareShort(4));


// --- 34. feladat — Hibakeresés ---
// A cél az volt, hogy egy {name: "Panni"} objektumot adjon vissza
// implicit return-nel, de a kód undefined-et ad. Miért, és hogyan
// javítod (segítség: a { a JS-nek blokk-kezdésnek tűnik, nem
// objektum-kezdésnek)?
const createObject = name => { name: name };
console.log(createObject("Panni"));


// --- 35. feladat — Írd meg ---
// Írj egy greet(name) FUNCTION DECLARATION-t alapértelmezett
// paraméterrel, ami "Ismeretlen"-t használ, ha nem adsz meg nevet.
// Teszteld argumentum nélkül és argumentummal is.



// --- 36. feladat ---
// greet2();
// const greet2 = (name = "Ismeretlen") => console.log("Szia, " + name + "!");



// --- 37. feladat — Hibakeresés ---
// Ez a kód hibát dob — de a 30. feladatban (function declaration
// hívás előtte) ugyanez MŰKÖDÖTT. Mi a különbség a kettő között?
// add2(2, 3);
// const add2 = (a, b) => a + b;



// --- 38. feladat — Írd meg ---
// Foglald össze 2-3 mondatban, saját szavaiddal, kommentben:
// mikor válassz function declaration-t, és mikor arrow function-t —
// mit tanultál ma erről (this-kötés, hoisting-viselkedés)?
