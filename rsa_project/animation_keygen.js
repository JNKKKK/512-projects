import anime from 'animejs/lib/anime.es.js'

function keygen_timeline() {
    var keygen_tl = anime.timeline({})
    var tmp_interval
    keygen_tl
        .add({
            targets: '#div-1-0',
            left: ['calc(0 - 25rem)', 'calc(50% - 12.5rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: '#div-1-1',
            left: ['calc(0 - 30rem)', 'calc(50% - 15rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: '#div-1-2',
            opacity: [0, 1],
            duration: 3000,
            easing: 'easeOutExpo',
            begin: () => {
                tmp_interval = setInterval(() => {
                    let digits = 30
                    document.getElementById('prime-p').innerHTML = ''
                    document.getElementById('prime-q').innerHTML = ''
                    for (let i = 0; i < digits; i++) {
                        document.getElementById('prime-p').innerHTML += Math.floor(Math.random() * 10)
                        document.getElementById('prime-q').innerHTML += Math.floor(Math.random() * 10)
                    }
                }, 10);
            },
            complete: () => {
                clearInterval(tmp_interval)
                document.getElementById('prime-p').innerHTML = r.p.value
                document.getElementById('prime-q').innerHTML = r.q.value
            }
        }, '+=500')
        .add({
            targets: '#div-1-3',
            left: ['calc(0 - 30rem)', 'calc(50% - 15rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: '#div-1-4',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            begin: () => document.getElementById('n').innerHTML = '' + r.n // implicit format. use ''+number
        }, '+=500')
        .add({
            targets: '#div-1-5',
            left: ['calc(0 - 30rem)', 'calc(50% - 15rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        }, '+=500')
        .add({
            targets: '#div-1-6',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            begin: () => document.getElementById('lambda').innerHTML = '' + r.lambda
        }, '+=500')
        .add({
            targets: '#div-1-7',
            left: ['calc(0 - 40rem)', 'calc(50% - 20rem'],
            duration: 1000,
            easing: 'easeOutExpo',
            begin: () => document.getElementById('div-1-7').scrollIntoView()
        }, '+=500')
        .add({
            targets: '#div-1-8',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            begin: () => document.getElementById('e').innerHTML = '' + r.e
        }, '+=500')
        .add({
            targets: '#div-1-9',
            left: ['calc(0 - 40rem)', 'calc(50% - 20rem'],
            duration: 1000,
            easing: 'easeOutExpo',
            begin: () => document.getElementById('div-1-9').scrollIntoView()
        }, '+=500')
        .add({
            targets: '#div-1-10',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            begin: () => document.getElementById('d').innerHTML = '' + r.d
        }, '+=500')
        .add({
            targets: '#div-1-11',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            begin: () => document.getElementById('div-1-11').scrollIntoView()
        }, '+=500')

    keygen_tl.pause()
    return keygen_tl
}

export { keygen_timeline }