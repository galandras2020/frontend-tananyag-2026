// ============================================================
// 1. hét — A) var / let / const és a hoisting — MEGOLDÁSOK
// ============================================================

// 1. — undefined (var hoisting: deklaráció felkerül, érték nem)
console.log(name);
var name = "Panni";
console.log("--- 1 vége ---\n");

// 2. — ReferenceError: Cannot access 'name2' before initialization (TDZ)
try {
  eval("console.log(name2); let name2 = 'Panni';");
} catch (e) {
  console.log("2:", e.message);
}

// 3.
const shopName = "Cukorbolt";       // nem változik -> const
const shopAddress = "Minta utca 12.";  // nem változik -> const
const taxNumber = "12345678-1-42";   // nem változik -> const
let balance = 25000;              // változik (eladás/visszajáró) -> let
console.log("3:", shopName, shopAddress, taxNumber, balance);

// 4. — 3, 3, 3 (var function-scope, mind a három callback ugyanazt az i-t látja)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("4:", i), 0);
}

// 5. — javítás: var -> let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("5:", j), 0);
}

// 6. — 0,1,2, mert minden iterációnak saját let-kötése van
for (let k = 0; k < 3; k++) {
  let message = "iteráció: " + k;
  setTimeout(() => console.log("6:", message), 0);
}

// 7. — ReferenceError: secretMessage is not defined
function blockExample() {
  if (true) {
    let secretMessage = "csak itt létezem";
  }
  try {
    console.log(secretMessage);
  } catch (e) {
    console.log("7:", e.message);
  }
}
blockExample();

// 8. — TypeError: Assignment to constant variable -> javítás: let
let price = 100;
price = 120;
console.log("8:", price);

// 9. — 2, 2 (var nem blokk-scope, ugyanaz az x)
function myFunction() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log("9a:", x);
  }
  console.log("9b:", x);
}
myFunction();

// 10. — var: hiba nélkül, "Béla"; let: SyntaxError (külön fájlban tesztelendő)
var person = "Anna";
var person = "Béla";
console.log("10:", person);

// 11. — push OK (tartalom módosul), reassign TypeError
const cart = [];
cart.push("alma");
try {
  cart = ["banán"];
} catch (e) {
  console.log("11:", e.message);
}
console.log("11 cart:", cart);

// 12.
function calculateTotal(prices) {
  let total = 0;
  for (let n = 0; n < prices.length; n++) {
    total = total + prices[n];
  }
  return total;
}
console.log("12:", calculateTotal([1200, 850, 450]));

// 13. — ugyanaz a TDZ jelenség, mint a 2. feladatnál
try {
  eval("console.log(magicNumber); let magicNumber = 7;");
} catch (e) {
  console.log("13:", e.message);
}

// 14. — 3, mert a var túléli a ciklust (function-scope)
function startCounter() {
  for (var m = 0; m < 3; m++) {}
  console.log("14:", m);
}
startCounter();
