const tl = gsap.timeline();
const customCrsr = document.getElementById("customcrsr");

document.addEventListener('mousemove',function(dets){
    customCrsr.style.top = dets.y + 'px';
    customCrsr.style.left = dets.x + 'px';
})

tl.from(".logo h2",{
    duration: 0.4,
    y: -30,
})
tl.from("ul li",{
    y: -30,
    opacity:0,
    stagger:0.5,
})
tl.from("#textetc",{
    opacity:0,
    y:20,
    scrollTrigger:{
        trigger: "#textetc"
    }
})``
tl.from("marquee span",{
    opacity:0,
    scale:3,
    scrollTrigger:{
        triggger:"marquee"
    }
})
tl.from(".project",{
    opacity: 0,
})
