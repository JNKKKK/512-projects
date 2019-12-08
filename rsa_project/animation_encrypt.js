import anime from 'animejs/lib/anime.es.js'

function encryption_timeline_0(r) {
    let tl = anime.timeline({})
    tl
        .add({
            targets: '#div-3-0 .alice',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '#div-3-0 .right',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        })
    tl.pause()
    return tl
}

function encryption_timeline_1(r) {
    let tl = anime.timeline({})
    tl
        .add({
            targets: '#div-3-0 .right .formula',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: ['#div-3-0 .alice .target', '#div-3-0 .right .formula .e-sup'],
            color: '#F00',
            'border-color': '#F00',
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: ['#div-3-0 .alice .target', '#div-3-0 .right .formula .e-sup'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-3-0 .alice .target', '#div-3-0 .right .formula .e-sup'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-3-0 .alice .target', '#div-3-0 .right .formula .e-sup'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-3-0 .alice .target', '#div-3-0 .right .formula .e-sup'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '#div-3-0 .encrypted',
            opacity: { value: [0, 1], duration: 1000 },
            easing: 'easeOutExpo',
            begin: () => {
                document.getElementById("encrypted-text").innerHTML = r.encrypt(document.getElementById("encrypt-text").value)
            },
        }, '+=500')
    tl.pause()
    return tl
}

export { encryption_timeline_0, encryption_timeline_1 }