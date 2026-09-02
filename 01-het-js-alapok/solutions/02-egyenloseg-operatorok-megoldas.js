// ============================================================
// 1. hét — B) Egyenlőségvizsgálat — MEGOLDÁSOK
// ============================================================

console.log("15:", "" == 0);   // true — "" számmá alakul (0)
console.log("16:", "" === 0);  // false — string vs number
console.log("17:", null == undefined, null === undefined); // true, false
console.log("18:", [] == false); // true — [] -> "" -> 0, false -> 0

function isEqual(a, b) {
  return a === b;
}
console.log("19:", isEqual(5, 5), isEqual(5, "5"), isEqual("a", "a"));
// true, false, true

// 20. — a hiba: '=' értékadás, nem összehasonlítás -> mindig truthy (20)
let age = 18;
if (age === 20) {
  console.log("Húszéves!");
} else {
  console.log("20: nem 20 éves (helyes, mert === összehasonlít)");
}

console.log("21:", NaN === NaN); // false — NaN sosem egyenlő önmagával

function safeEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  return a === b;
}
console.log("22:", safeEqual(NaN, NaN), safeEqual(5, 5), safeEqual(5, "5"));
// true, true, false

const a1 = [1, 2, 3];
const a2 = [1, 2, 3];
console.log("23:", a1 === a2, a1 == a2); // false, false — referencia szerint hasonlít

const b1 = [1, 2, 3];
const b2 = [1, 2, 3];
if (JSON.stringify(b1) === JSON.stringify(b2)) {
  console.log("24: Egyeznek!");
} else {
  console.log("24: Nem egyeznek.");
}

console.log("25:", 0 == "0", 0 === "0", false == "0", false === "0");
// true, false, true, false

function isMissing(value) {
  return value == null; // null == undefined -> true, más értékre false
}
console.log("26:", isMissing(null), isMissing(undefined), isMissing(""), isMissing(0));
// true, true, false, false
