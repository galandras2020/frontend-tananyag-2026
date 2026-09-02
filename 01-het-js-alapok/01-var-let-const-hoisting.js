// ============================================================
// 1. hét — A) var / let / const és a hoisting — 14 feladat
// Frontend programozás és tesztelés
//
// Futtatás: node 01-var-let-const-hoisting.js
// Ha elakadsz: lásd a README.md "Ha elakadsz" szakaszát (MDN-linkek)
// Megoldás: solutions/01-var-let-const-hoisting-megoldas.js
//           (csak akkor nézd meg, ha már saját magad próbáltad!)
// ============================================================

// --- 1. feladat ---
// Mit ír ki ez a kód? Indokold is (kommentben írd le a választ).
console.log(name);
var name = "Panni";

// --- 2. feladat ---
// És ez? Mi a különbség az előzőhöz képest?
// (Írd ide külön, kommentelt kódrészletbe, vagy futtasd külön fájlban,
//  mert ez a sor hibát fog dobni és megállítja a script futását!)
//
// console.log(name2);
// let name2 = "Panni";


// --- 3. feladat — Írd meg ---
// Deklarálj 3 const és 1 let változót egy elképzelt bolt adatairól
// (pl. név, cím, adószám, aktuális pénztáregyenleg).
// Indokold egy mondatban kommentben, miért pont azt a kulcsszót
// választottad mindegyikhez.



// --- 4. feladat ---
// Ismert csapda — mit ír ki ez a ciklus, és miért NEM azt,
// amit elsőre gondolnál?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}


// --- 5. feladat — Írd meg ---
// Javítsd az előző (4.) feladat ciklusát úgy, hogy 0, 1, 2 legyen
// a kiírt sorrend — csak EGY kulcsszót kell cserélned.
// Írd le egy mondatban kommentben, miért oldja meg a cserét.



// --- 6. feladat ---
// Ellenőrizd a javításodat: miért ad most helyes eredményt
// minden iteráció, ha külön let-kötése van?
for (let i = 0; i < 3; i++) {
  let message = "iteráció: " + i;
  setTimeout(() => console.log(message), 0);
}


// --- 7. feladat — Írd meg ---
// Írj egy függvényt, amiben egy if blokkon belül deklarálsz egy
// let változót, majd próbáld meg elérni a blokkon KÍVÜLRŐL
// (a függvényen belül). Fusd le, és írd oda kommentbe a pontos
// hibaüzenetet.



// --- 8. feladat — Hibakeresés ---
// Ez a kód hibát dob. Találd meg és javítsd — indokold is.
// const price = 100;
// price = 120;
// console.log(price);



// --- 9. feladat ---
// Mit ír ki a két console.log? (Figyelem: a var FÜGGVÉNY-scope,
// nem block-scope!)
function myFunction() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
myFunction();


// --- 10. feladat ---
// Mindkét blokk lefut, egymás után, egy fájlban. Mi történik
// mindkét esetben — fut mindkettő hiba nélkül, vagy az egyik elszáll?
var person = "Anna";
var person = "Béla";
console.log(person);

// külön próbáld ki (kommentbe téve, mert hibát dob):
// let years = 20;
// let years = 21;


// --- 11. feladat — Hibakeresés ---
// A kosárba pakolás működik, de a `cart = [...]` sor hibát dob.
// Miért engedi az egyiket a const, és miért nem a másikat?
// const cart = [];
// cart.push("alma");
// cart = ["banán"];
// console.log(cart);



// --- 12. feladat — Írd meg ---
// Írj egy calculateTotal függvényt, ami egy tömb árait összeadja
// egy ciklusban, futóösszeggel. A futóösszeget tartó változóhoz
// LET-et kell használnod, nem const-ot — írd le egy mondatban,
// miért nem lehetne const.



// --- 13. feladat ---
// Mi történik itt — ugyanaz-e, mint a var-nál a legelső feladatban?
// console.log(magicNumber);
// let magicNumber = 7;



// --- 14. feladat — Hibakeresés ---
// Ez a kód lefut, hiba nélkül — de mit ír ki a console.log,
// és miért meglepő ez, ha korábban azt tanultad, hogy a ciklus
// "lezárja" a blokkját?
function startCounter() {
  for (var i = 0; i < 3; i++) {}
  console.log(i);
}
startCounter();
