"use strict";
/* 
const a = 5;
let h = "hello";
console.log(h + a);
let d = `world  ${a < 10 ? "is small" : "is large"}`;
console.log(d); */

/* function print(a, b) {
  console.log(`hello ${a + b}`);
  return a * b;
}
print(4, 8);
let r = print(7, 80);
console.log(r);
console.log(print());
 */
/* 
let y = (a) => {
    let b=a*a;
    return a*b
} //arrow funtion
let p = y(7);
console.log(`hi ${p} ${y(5)}`);

let r = (a) => a / 2; //arrow funtion
let t = r(7);
console.log(`hi ${t * 10 + r(5)}`); */

/* let a = [1, 20, 2.23, true, "false", null, undefined];
console.log(a);
a.sort();
console.log(a);
a.push([1, 2, 3]);
console.log(a);
a.forEach((Element, index, arrVar) => {
  console.log(Element, "~", index, arrVar);
}); */

/* let p = {
  hello: 5,
  hi: "9",
  "first name": "Monish",
  key: function fun(a, b) {
    return p.hello + a * b + this.hi;
  },
};
console.log(p["hello"] + " " + p.hi + " " + p["first name"]);
let d = p.key(2,3);
console.log(d); */

let p_ele = document.querySelectorAll(".h");
console.log(p_ele);
let p_el = document.querySelectorAll("p");
console.log(p_el);
let p_e = document.querySelectorAll(".h1");
console.log(p_e);
let bodye = document.querySelector("body");
let btnele = document.querySelector(".btn");
var audio = document.getElementById("chatAudio");
let i = 0;
btnele.addEventListener("click", function name(e) {
  audio.play();
  if (i == 0) {
    audio.play();
    i = 1;
    bodye.style.backgroundColor = "blue";
  } else {
    audio.play();
    i = 0;
    bodye.style.backgroundColor = "red";

  }
});
