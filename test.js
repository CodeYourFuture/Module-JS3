const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}
console.log(y);
f2(y);
console.log(y);