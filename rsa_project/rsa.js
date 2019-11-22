var bigInt = require("big-integer");

class RSA {
    constructor() {

    }

    generate(keysize) {
        // Generates a random k-bit prime greater than √2 × 2^(k-1)       
        // returns a random generated prime
        function randomPrime(bits) {
            const min = bigInt(6074001000).shiftLeft(bits - 33);  // min ≈ √2 × 2^(bits - 1)
            const max = bigInt.one.shiftLeft(bits).minus(1);  // max = 2^(bits) - 1
            for (; ;) {
                const p = bigInt.randBetween(min, max);  // WARNING: not a cryptographically secure RNG!
                if (p.isProbablePrime(256)) {
                    return p;
                }
            }
        }

        // set up variables for key generation
        const e = bigInt(65537);  // use fixed public exponent
        let p;
        let q;
        let lambda;

        // generate p and q such that λ(n) = lcm(p − 1, q − 1) is coprime with e and |p-q| >= 2^(keysize/2 - 100)
        do {
            p = randomPrime(keysize / 2);
            q = randomPrime(keysize / 2);
            lambda = bigInt.lcm(p.minus(1), q.minus(1));
        } while (bigInt.gcd(e, lambda).notEquals(1) || p.minus(q).abs().shiftRight(
            keysize / 2 - 100).isZero());

        this.n = p.multiply(q)
        this.e = e
        this.d = e.modInv(lambda)
    }

    encrypt(m) {
        function str2bigInt(s) {
            let hexString = "";
            for (let i = 0; i < s.length; i++) {
                hexString += ("0" + s.charCodeAt(i).toString(16)).slice(-2);
            }
            return new bigInt(hexString, 16);
        }
        return str2bigInt(m).modPow(this.e, this.n);
    }

    decrypt(c) {
        function bigInt2str(int) {
            let bytes = []
            let s = int.toString(16)
            for (let i = 0; i < s.length; i++) {
                if (i % 2 == 0)
                    bytes.push(s[i] + s[i + 1])
            }
            bytes = bytes.map((b) => String.fromCharCode(parseInt(b, 16))).join('')
            return bytes
        }
        return bigInt2str(bigInt(c).modPow(this.d, this.n))
    };
}

export default RSA