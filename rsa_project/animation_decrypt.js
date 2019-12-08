import anime from 'animejs/lib/anime.es.js'

function decryption_timeline_0(r) {
    let tl = anime.timeline({})
    tl
        .add({
            targets: '#div-4-0 .bob',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '#div-4-0 .left',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '#div-4-0 .decrypt',
            opacity: { value: [0, 1], duration: 1000 },
            easing: 'easeOutExpo',
            begin: () => {
                document.getElementById("decrypt-text").innerHTML = document.getElementById("encrypted-text").innerHTML;
            },
        }, '+=500')
    tl.pause()
    return tl
}

function decryption_timeline_1(r) {
    let tl = anime.timeline({})
    tl
        .add({
            targets: '#div-4-0 .left .formula',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: ['#div-4-0 .bob .private', '#div-4-0 .left .formula .d-sup'],
            color: '#F00',
            'border-color': '#F00',
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: ['#div-4-0 .bob .private', '#div-4-0 .left .formula .d-sup'],
            scale: 1.5,
            duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-4-0 .bob .private', '#div-4-0 .left .formula .d-sup'],
            scale: 1,
            duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-4-0 .bob .private', '#div-4-0 .left .formula .d-sup'],
            scale: 1.5,
            duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-4-0 .bob .private', '#div-4-0 .left .formula .d-sup'],
            scale: 1,
            duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '#div-4-0 .decrypted',
            opacity: { value: [0, 1], duration: 1000 },
            easing: 'easeOutExpo',
            begin: () => {
                document.getElementById("decrypted-text").innerHTML = r.decrypt(document.getElementById("encrypted-text").innerHTML)
            },
        }, '+=500')
    tl.pause()
    return tl
}

export { decryption_timeline_0, decryption_timeline_1 }