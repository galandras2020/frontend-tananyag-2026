// ============================================================
// 2. hét — Operátorok — gyakorlófeladatok
// Frontend programozás és tesztelés
//
// Futtatás: node 01-operatorok.js
// Megoldás: solutions/01-operatorok-megoldas.js
// ============================================================

// --- 1. feladat ---
// Számold ki, majd ellenőrizd kóddal: 7 % 3, 2 ** 4, (2 + 3) * 4



// --- 2. feladat ---
// Mit ír ki? (pre vs. post increment)
let counter = 0;
console.log(counter++);
counter = 0;
console.log(++counter);


// --- 3. feladat ---
// Mit ír ki? (összeadás vs. összefűzés)
console.log(5 + 5);
console.log(5 + "5");
console.log(5 + "abc" + 5);


// --- 4. feladat — Írd meg ---
// Egy változóban van egy "42" string (mintha form-mezőből jönne).
// Alakítsd át számmá HÁROMFÉLE módszerrel (Number, parseInt, unáris +),
// és írasd ki mindhárom eredményt.



// --- 5. feladat ---
console.log("5" == 5);
console.log("5" === 5);
console.log("" == 0);
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN === NaN);


// --- 6. feladat — Hibakeresés ---
// A cél az volt, hogy akkor írjon ki "felnőtt"-et, ha az age 18 vagy több —
// de sosem ír ki semmit. Találd meg és javítsd a hibát.
// const age = "18";
// if (age === 18) {
//   console.log("felnőtt");
// }



// --- 7. feladat ---
console.log(true && false);
console.log(true || false);
console.log(!true);


// --- 8. feladat ---
// Melyik ág fut le? Miért?
if (0) console.log("A");
if ("") console.log("B");
if ([]) console.log("C");
if ("szöveg") console.log("D");


// --- 9. feladat — Írd meg ---
// Írj egy isEven(num) függvényt, ami true-t ad vissza, ha a szám páros
// (segítség: moduló operátor).



// --- 10. feladat — Írd meg ---
// Írj egy xor(a, b) függvényt, ami akkor ad true-t, ha pontosan
// az egyik paraméter igaz (nem mindkettő, nem egyik sem).



// --- 11. feladat ---
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);


// --- 12. feladat — Írd meg ---
// Írj egy hagyományos if/else-t, ami eldönti, hogy egy szám (pl. 15)
// nagyobb-e 10-nél, és "nagy"/"kicsi" szöveget ír ki.
// Utána írd át UGYANEZT ternary operátorral, egy sorban.



// --- 13. feladat — Hibakeresés ---
// A cél az volt, hogy "true"-t vagy "false"-t írjon ki a num < 100
// vizsgálat eredményeként ternary-vel, de a kód hibás. Találd meg,
// mi hiányzik, és javítsd.
// const num = 50;
// num < 100 ? console.log("true") : ("false");
