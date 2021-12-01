const words = [
    "develop apps",
    "shape Metaverse",
    "design in 3D",
    "build websites",
    "create things"
]

let cursor = gsap.to('.cursor', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1
})

let masterTL = gsap.timeline({
    repeat: -1
})

words.forEach(word => {
    let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 2
    })
    tl.to('.text', {
        duration: 1,
        text: word
    })
    masterTL.add(tl)
})