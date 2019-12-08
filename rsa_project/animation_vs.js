import anime from 'animejs/lib/anime.es.js'

function vs_timeline(r) {
    let tl = anime.timeline({})
    tl
        .add({
            targets: '#div-5-0',
            left: ['calc(0 - 25rem)', 'calc(50% - 12.5rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: ['#div-5-1','#div-5-3'],
            left: ['calc(0 - 50rem)', 'calc(50% - 25rem'],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: ['#div-5-2','#div-5-4'],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
        })
        //////////// RSA /////////////////////
        // change color
        .add({
            targets: ['#div-5-2 .target-e','#div-5-2 .target-e'],
            color: '#F00',
            'border-color': '#F00',
            duration: 1000,
            easing: 'easeOutExpo',
        },'+=2000')
        // scale
        .add({
            targets: ['#div-5-2 .target-e','#div-5-2 .target-e'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-2 .target-e','#div-5-2 .target-e'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-2 .target-e','#div-5-2 .target-e'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-2 .target-e','#div-5-2 .target-e'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        // change color
        .add({
            targets: ['#div-5-2 .target-e','#div-5-2 .target-e'],
            color: '#FFF',
            'border-color': '#FFF',
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: ['#div-5-2 .target-d','#div-5-2 .target-d'],
            color: '#F00',
            'border-color': '#F00',
            duration: 1000,
            easing: 'easeOutExpo',
        })
        // scale
        .add({
            targets: ['#div-5-2 .target-d','#div-5-2 .target-d'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-2 .target-d','#div-5-2 .target-d'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-2 .target-d','#div-5-2 .target-d'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-2 .target-d','#div-5-2 .target-d'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        // change color
        .add({
            targets: ['#div-5-2 .target-d','#div-5-2 .target-d'],
            color: '#FFF',
            'border-color': '#FFF',
            duration: 1000,
            easing: 'easeOutExpo',
        })
        //////////// CC /////////////////////
         // change color
         .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-e'],
            color: '#F00',
            'border-color': '#F00',
            duration: 1000,
            easing: 'easeOutExpo',
        },'+=2000')
        // scale
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-e'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-e'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-e'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-e'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        // change color
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-e'],
            color: '#FFF',
            'border-color': '#FFF',
            duration: 1000,
            easing: 'easeOutExpo',
        })
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-d'],
            color: '#F00',
            'border-color': '#F00',
            duration: 1000,
            easing: 'easeOutExpo',
        })
        // scale
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-d'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-d'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-d'],
            scale: 1.5,
             duration: 100,
            easing: 'easeInOutSine',
        })
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-d'],
            scale: 1,
             duration: 100,
            easing: 'easeInOutSine',
        })
        // change color
        .add({
            targets: ['#div-5-4 .key','#div-5-4 .target-d'],
            color: '#FFF',
            'border-color': '#FFF',
            duration: 1000,
            easing: 'easeOutExpo',
        })
    tl.pause()
    return tl
}

export { vs_timeline }