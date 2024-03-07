var t1 = gsap.timeline()

t1.from("#nav img,#nav h4,#nav h3,#nav button",{
  y:-100,
  opacity:0,
  
  delay:0,
  stagger:0.2
})

t1.from("#left-img",{
  x:-100,
  scale:0,
  opacity: 0,
  delay:1
})

t1.from("#right-img",{
  x:100,
  opacity: 0,
  scale:0,
  delay:1
})

t1.from("#main h1",{
    y:-100,
    opacity:0,
    stagger:0.5,

    ease: "bounce.out"
})

t1.from("h5",{
  y:25,
  color :"black",
  opacity:0,
  yoyo:true,
  repeat:-1
})