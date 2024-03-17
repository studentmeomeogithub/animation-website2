
var tl = gsap.timeline()

tl.from('.mtext',{
    x:-100,
    scale:-1,
    duration:1,
    opacity:0

})
tl.from(".nav li",{
    y:-100,
    duration:1.5,
    stagger:1
})
tl.from("#img",{
    y:150,
    scale:-1,
    duration:1.5,
    opacity:0,
})
tl.from("#img2",{
    y:-100,
    scale:-1,
    duration:1.5,
    opacity:0
})

tl.from(".headings li",{
    x:100,
    duration:1.5,
    stagger:1,
    opacity:0
})
tl.from(".scroll",{
    x:-100,
    duration:1.5,
    opacity:0
})
tl.from(".head",{
    y:-100,
    duration:1.5,
    opacity:0
})
tl.from(" .para",{
    y:100,
    duration:1.5,
    opacity:0
})
tl.from(".card",{
    y:100,
    duration:1.5,
    opacity:0
})
tl.from("#img1",{
    y:100,
    scale:-1,
    duration:1.5,
    opacity:0
})





