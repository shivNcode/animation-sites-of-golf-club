#how to apply animation to the point/cursor when select a particular element.
code:
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


