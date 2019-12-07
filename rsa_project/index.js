import RSA from "./rsa"
import anime from 'animejs/lib/anime.es.js'
import { keygen_timeline } from './animation_keygen'
import { keyex_timeline } from './animation_keyex'
import { encryption_timeline_0, encryption_timeline_1 } from './animation_encrypt'

let r = new RSA()
r.generate(200)

var keygen_tl, keyex_tl, encrypt_tl_0, encrypt_tl_1;
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

function enter_encryption() {
    anime({
        targets: '#menu .item',
        translateX: 270,
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 500,
        delay: anime.stagger(100),
        complete: () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("excryption-container").style.display = "block";
            encrypt_tl_0.play()
        }
    });
}


window.onload = function () {
    // hide containers
    document.getElementById("keygen-container").style.display = "none";
    document.getElementById("keyex-container").style.display = "none";
    document.getElementById("excryption-container").style.display = "none";
    // bind menu click event
    menu_items = document.querySelectorAll('#menu .item');
    menu_items[0].addEventListener('click', enter_keygen);
    menu_items[1].addEventListener('click', enter_keyex);
    menu_items[2].addEventListener('click', enter_encryption);
    //bind button click event
    document.getElementById("encrypt-button").addEventListener('click', function() {
        encrypt_tl_1.play()
    });
    // init animations
    keygen_tl = keygen_timeline(r)
    keyex_tl = keyex_timeline(r)
    encrypt_tl_0 = encryption_timeline_0(r)
    encrypt_tl_1 = encryption_timeline_1(r)
};