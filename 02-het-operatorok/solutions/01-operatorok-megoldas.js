// ============================================================
// 2. hét — Operátorok — MEGOLDÁSOK
// ============================================================

// 1.
console.log("1:", 7 % 3, 2 ** 4, (2 + 3) * 4); // 1, 16, 20

// 2. — 0 (post: olvas, majd növel), 1 (pre: növel, majd olvas)
let counter = 0;
console.log("2a:", counter++); // 0
counter = 0;
console.log("2b:", ++counter); // 1

// 3.
console.log("3a:", 5 + 5);          // 10
console.log("3b:", 5 + "5");        // "55"
console.log("3c:", 5 + "abc" + 5);  // "5abc5"

// 4.
const raw = "42";
console.log("4:", Number(raw), parseInt(raw), +raw); // 42 42 42

// 5.
console.log("5:", "5" == 5, "5" === 5, "" == 0, null == undefined, null === undefined, NaN === NaN);
// true false true true false false

// 6. — hiba: "18" (string) === 18 (number) sosem igaz típuskülönbség miatt
//     javítás: Number(age) === 18, vagy age == 18
const age = "18";
if (Number(age) === 18) {
  console.log("6: felnőtt");
}

// 7.
console.log("7:", true && false, true || false, !true); // false true false

// 8. — csak a "D" fut le a "szöveg"-re, DE a [] IS truthy, tehát a "C" is lefut!
if (0) console.log("8A");
if ("") console.log("8B");
if ([]) console.log("8C — az üres tömb truthy, ez lefut!");
if ("szöveg") console.log("8D");

// 9.
function isEven(num) {
  return num % 2 === 0;
}
console.log("9:", isEven(4), isEven(7)); // true false

// 10.
function xor(a, b) {
  return a !== b;
}
console.log("10:", xor(true, false), xor(true, true)); // true false

// 11.
console.log("11:", 2 + 3 * 4, (2 + 3) * 4); // 14 20

// 12.
const value = 15;
let result;
if (value > 10) {
  result = "nagy";
} else {
  result = "kicsi";
}
console.log("12a:", result);

const result2 = value > 10 ? "nagy" : "kicsi";
console.log("12b:", result2);

// 13. — hibák: hiányzó const/let deklaráció (a 12-es mintájára javítva),
//      és a ":" ág nem hívja meg a console.log-ot, csak zárójelbe teszi a szöveget
const num = 50;
num < 100 ? console.log("13: true") : console.log("13: false");
