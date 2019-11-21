var bigInt = require("big-integer");


import RSA from "./rsa"

let r = new RSA()
r.generate(20)

console.log(r.n, r.e, r.d)
console.log(r.encrypt('abc'))