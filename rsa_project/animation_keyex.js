import anime from 'animejs/lib/anime.es.js'

function keyex_timeline() {
    var keyex_tl = anime.timeline({})
    keyex_tl
        .add({
            targets: '#div-2-0',
            left: ['calc(0 - 25rem)', 'calc(50% - 12.5rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '#div-2-1',
            left: ['calc(0 - 50rem)', 'calc(50% - 25rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: '#div-2-2 .alice',
            opacity: [0, 1],
            duration: 3000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: '#div-2-2 .bob',
            opacity: [0, 1],
            duration: 3000,
            easing: 'easeOutExpo',
        }, '-=500')
        .add({
            targets: '#div-2-2 .alice .key ',
            left: { value: '40rem', duration: 1000 },
            top: { value: '5rem', duration: 1000 },
            // duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: '#div-2-2 .bob .key ',
            left: { value: '-40rem', duration: 1000 },
            top: { value: '5rem', duration: 1000 },
            // duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
    keyex_tl.pause()
    return keyex_tl
}

export { keyex_timeline }