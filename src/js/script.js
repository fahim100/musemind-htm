$(document).ready(function () {
    'use strict';

    $('.clientLogo').liMarquee({
        drag: false,
        hoverstop:false
    });
    $('.designHeadingTitle').liMarquee({
        drag: false,
        hoverstop:false
    });
    $('.designHeadingTitle2').liMarquee({
        drag: false,
        hoverstop:false
    });
    // $('.designContent').liMarquee({
    //     drag: false,
    //     hoverstop:false
    // });

    gsap.registerPlugin(ScrollTrigger);

    let sections2 = gsap.utils.toArray(".heroProjectItem");

    let scrollTween2 = gsap.to(sections2, {
        xPercent: -100 * (sections2.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".hero").offsetWidth
        }
    });

    let sections = gsap.utils.toArray(".designContentItem");

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".designContent",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".designContent").offsetWidth
        }
    });

    
});