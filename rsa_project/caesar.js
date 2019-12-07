import bigInt from "big-integer"

class Caesar {

    constructor(shiftDigit) {
        this.shiftDigit = shiftDigit
    }

    encrypt(s) {
        let hexString = "";
        for (let i = 0; i < s.length; i++) {
            hexString += ("0" + ((s.charCodeAt(i) + this.shiftDigit) % 255).toString(16)).slice(-2);
        }
        return new bigInt(hexString, 16);
    }

    decrypt(c) {
        let bytes = []
        let s = c.toString(16)
        for (let i = 0; i < s.length; i++) {
            if (i % 2 == 0)
                bytes.push(s[i] + s[i + 1])
        }
        bytes = bytes.map((b) => String.fromCharCode((parseInt(b, 16) - this.shiftDigit) % 255)).join('')
        return bytes
    }

}
let c = new Caesar(5);
let b1 = c.encrypt("ertyui")
console.log(b1)
console.log(c.decrypt(b1))