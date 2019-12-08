import RSA from "./rsa"
import anime from 'animejs/lib/anime.es.js'
import { keygen_timeline } from './animation_keygen'
import { keyex_timeline } from './animation_keyex'
import { encryption_timeline_0, encryption_timeline_1 } from './animation_encrypt'
import { decryption_timeline_0, decryption_timeline_1 } from './animation_decrypt'
import { vs_timeline } from './animation_vs'


let r = new RSA()
r.generate(200)

var keygen_tl, keyex_tl, encrypt_tl_0, encrypt_tl_1, decrypt_tl_0, decrypt_tl_1, vs_tl;
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
            document.getElementById("encryption-container").style.display = "block";
            encrypt_tl_0.play()
        }
    });
}

function enter_decryption() {
    anime({
        targets: '#menu .item',
        translateX: 270,
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 500,
        delay: anime.stagger(100),
        complete: () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("decryption-container").style.display = "block";
            decrypt_tl_0.play()
        }
    });
}

function enter_vs() {
    anime({
        targets: '#menu .item',
        translateX: 270,
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 500,
        delay: anime.stagger(100),
        complete: () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("vs-container").style.display = "block";
            vs_tl.play()
        }
    });
}


window.onload = function () {
    // hide containers
    document.getElementById("keygen-container").style.display = "none";
    document.getElementById("keyex-container").style.display = "none";
    document.getElementById("encryption-container").style.display = "none";
    document.getElementById("decryption-container").style.display = "none";
    // bind menu click event
    menu_items = document.querySelectorAll('#menu .item');
    menu_items[0].addEventListener('click', enter_keygen);
    menu_items[1].addEventListener('click', enter_keyex);
    menu_items[2].addEventListener('click', enter_encryption);
    menu_items[3].addEventListener('click', enter_decryption);
    menu_items[4].addEventListener('click', enter_vs);
    //bind button click event
    document.getElementById("encrypt-button").addEventListener('click', function () {
        encrypt_tl_1.play()
    });
    document.getElementById("decrypt-button").addEventListener('click', function () {
        decrypt_tl_1.play()
    });
    document.getElementById("back-link").addEventListener('click', function () {
        document.getElementById("keygen-container").style.display = "none";
        document.getElementById("keyex-container").style.display = "none";
        document.getElementById("encryption-container").style.display = "none";
        document.getElementById("decryption-container").style.display = "none";
        document.getElementById("vs-container").style.display = "none";
        document.getElementById("menu").style.display = "flex";
        anime({
            targets: '#menu .item',
            translateX: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 500,
            delay: anime.stagger(100),
        });
    });

    // init animations
    keygen_tl = keygen_timeline(r)
    keyex_tl = keyex_timeline(r)
    encrypt_tl_0 = encryption_timeline_0(r)
    encrypt_tl_1 = encryption_timeline_1(r)
    decrypt_tl_0 = decryption_timeline_0(r)
    decrypt_tl_1 = decryption_timeline_1(r)
    vs_tl = vs_timeline(r)
};