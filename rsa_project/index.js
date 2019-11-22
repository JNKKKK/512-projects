import RSA from "./rsa"

let r = new RSA()
r.generate(200)

// console.log(r.n, r.e, r.d)
let msg = 'abc'
console.log('msg: ', msg)

let encrypted_msg = r.encrypt(msg)
console.log("encrypted_msg: ", encrypted_msg)

let decrypted_msg = r.decrypt(encrypted_msg)
console.log("decrypted_msg: ", decrypted_msg)