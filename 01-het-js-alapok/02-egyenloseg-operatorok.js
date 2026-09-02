// ============================================================
// 1. hét — B) Egyenlőségvizsgálat — === vs == — 12 feladat
// Frontend programozás és tesztelés
//
// Futtatás: node 02-egyenloseg-operatorok.js
// Megoldás: solutions/02-egyenloseg-operatorok-megoldas.js
// ============================================================

// --- 15. feladat ---
console.log("" == 0);

// --- 16. feladat ---
console.log("" === 0);

// --- 17. feladat ---
console.log(null == undefined);
console.log(null === undefined);

// --- 18. feladat (haladóbb, gondolkozz!) ---
console.log([] == false);


// --- 19. feladat — Írd meg ---
// Írj egy isEqual(a, b) függvényt, ami === -vel dönti el,
// hogy a és b egyenlők-e. Teszteld: isEqual(5, 5), isEqual(5, "5"),
// isEqual("a", "a").



// --- 20. feladat — Hibakeresés ---
// Mi a hiba ebben a kódban? (Figyelem, NEM egyenlőség-vizsgálat
// a probléma — nézd meg alaposan az operátort!)
let age = 18;
if (age = 20) {
  console.log("Húszéves!");
}


// --- 21. feladat ---
console.log(NaN === NaN);


// --- 22. feladat — Írd meg ---
// A Number.isNaN() a helyes eszköz NaN ellenőrzésére, nem a ===.
// Írj egy safeEqual(a, b) függvényt, ami NaN-t is
// helyesen kezeli (ha mindkettő NaN, adjon true-t).



// --- 23. feladat ---
const a1 = [1, 2, 3];
const a2 = [1, 2, 3];
console.log(a1 === a2);
console.log(a1 == a2);


// --- 24. feladat — Hibakeresés ---
// A cél az volt, hogy igazat írjon ki, ha a két tömb tartalma
// egyezik — de mindig false-t ad. Javítsd egy módszerrel, ami
// tartalom szerint hasonlít (segítség: JSON.stringify).
const b1 = [1, 2, 3];
const b2 = [1, 2, 3];
if (b1 === b2) {
  console.log("Egyeznek!");
} else {
  console.log("Nem egyeznek.");
}


// --- 25. feladat ---
console.log(0 == "0");
console.log(0 === "0");
console.log(false == "0");
console.log(false === "0");


// --- 26. feladat — Írd meg ---
// Írj egy isMissing(value) függvényt, ami ==-vel ellenőrzi, hogy
// az érték null VAGY undefined — és írd le kommentben, miért
// elég itt egyetlen == vizsgálat mindkét esethez.
