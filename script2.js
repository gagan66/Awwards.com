// Hall of fame animation: 
gsap.from(".anim", {
        scrollTrigger: {
            trigger: "#hof",
            // start: "top 2%",
            // markers: true,
        },
        stagger: .2,
        y: 10,
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    // timeline anim

// gsap.to(".row3", {
//     scrollTrigger: {
//         trigger: ".row3",
//         start: "top 5%",
//         end: "bottom 10%",
//         pin: true
//     },

// })

// ye jo upr code h usse sirf ek ji element target hota hai jaise ki row1 h to pehli 
// vali row1 hi target hongi uske bad ki nhi to  gsap s code aata h niche vala vo lao


gsap.utils.toArray(".row3 ").forEach(everyRow => {
    scrollTrigger.create({
        trigger: everyRow,
        pin: true,
        start: "top 70px",
        end: "bottom 20%",
    })
})