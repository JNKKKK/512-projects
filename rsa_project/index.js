import RSA from "./rsa"
import anime from 'animejs/lib/anime.es.js'
import { keygen_timeline } from './animation_keygen'
import { keyex_timeline } from './animation_keyex'

let r = new RSA()
r.generate(200)

console.log('n', r.n, 'e', r.e, 'd', r.d)
let msg = 'abc'
console.log('msg: ', msg)

let encrypted_msg = r.encrypt(msg)
console.log("encrypted_msg: ", encrypted_msg)

let decrypted_msg = r.decrypt(encrypted_msg)
console.log("decrypted_msg: ", decrypted_msg)

console.log('p', r.p)
console.log('q', r.q)


var keygen_tl, keyex_tl;
var menu_items

function enter_keygen() {
    anime({
        targets: '#menu .item',
        translateX: 270,
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 500,
        delay: anime.stagger(100),
        complete: () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("keygen-container").style.display = "block";
            keygen_tl.play()
        }
    });
}

function enter_keyex() {
    anime({
        targets: '#menu .item',
        translateX: 270,
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 500,
        delay: anime.stagger(100),
        complete: () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("keyex-container").style.display = "block";
            keyex_tl.play()
        }
    });
}


window.onload = function () {
    // hide containers
    document.getElementById("keygen-container").style.display = "none";
    document.getElementById("keyex-container").style.display = "none";
    // ref menu element
    menu_items = document.querySelectorAll('#menu .item');
    menu_items[0].addEventListener('click', enter_keygen);
    menu_items[1].addEventListener('click', enter_keyex);
    // init animations
    keygen_tl = keygen_timeline()
    keyex_tl = keyex_timeline()
};