var crsr = document.querySelector("#cursor");
var crsr_blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-1+"px";
    crsr.style.top=dets.y-1+"px";
    crsr_blur.style.left=dets.x-90+"px";
    crsr_blur.style.top=dets.y-90+"px";
});
var allh4 = document.querySelectorAll("#nav h4");
allh4.forEach(function(elem){
elem.addEventListener("mouseenter",()=>{
    crsr.style.scale=3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
})
elem.addEventListener("mouseleave",()=>{
    crsr.style.scale=1;
    crsr.style.border = "1px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
})
});


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"60px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
        ease: "power2.inOut",

    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -60%",
        end:" top -100%",
        scrub:2,
        // markers:true
    }
});
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:" top 55%",
        scrub : 2
    }
});
gsap.from("#cards-container .cards",{
    scale:0.8,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:" top 55%",
        scrub : 1
    }
});
// gsap.from("#colon1",{
//     y:-70,
//     x:70,
//     // opacity:0,
//     duration:0.3,
//     scrollTrigger:{
//         trigger:"#colon1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:" top 47%",
//         scrub : 1
//     }
// });
// gsap.from("#colon2",{
//     y:70,
//     x:-70,
//     // opacity:0,
//     duration:0.3,
//     scrollTrigger:{
//         trigger:"#colon2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:" top 47%",
//         scrub : 1
//     }
// });
gsap.from("#page3 p",{
    scale:0.9,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 p",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
});
gsap.from("#theme h1",{
    y:20,
    scale:0.8,
    scrollTrigger:{
        trigger:"#theme h1",
        scroll:"body",
        // markers:true,
        start:"top 75",
        enad:"top 68"
    }
});
