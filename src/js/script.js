$(document).ready(function () {
    'use strict';

    $('.clientLogo').liMarquee({
        drag: false,
        hoverstop: false
    });
    $('.designHeadingTitle').liMarquee({
        drag: false,
        hoverstop: false
    });
    $('.designHeadingTitle2').liMarquee({
        drag: false,
        hoverstop: false,
        direction: 'right'
    });
    $('.case-studies-heading-wrapper-1').liMarquee({
        drag: false,
        hoverstop: false
    });
    $('.case-studies-heading-wrapper-2').liMarquee({
        drag: false,
        hoverstop: false,
        direction: 'right'
    });
    $('.case-studies-footer-wrapper-1').liMarquee({
        drag: false,
        hoverstop: false
    });
    $('.case-studies-footer-wrapper-2').liMarquee({
        drag: false,
        hoverstop: false,
        direction: 'right'
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
            trigger: ".heroProject",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".hero").offsetWidth
        }
    });

    ScrollTrigger.defaults({
        markers: false
    })

    var points = gsap.utils.toArray('.point');
    var indicators = gsap.utils.toArray('.indicator');

    var height = 100 * points.length;

    gsap.set('.indicators', { display: "flex" });

    var tl = gsap.timeline({
        duration: points.length,
        scrollTrigger: {
            trigger: ".philosophie",
            start: "top center",
            end: "+=" + height + "%",
            scrub: true,
            id: "points",
        }
    })

    var pinner = gsap.timeline({
        scrollTrigger: {
            trigger: ".philosophie .wrapper",
            start: "top top",
            end: "+=" + height + "%",
            scrub: true,
            pin: ".philosophie .wrapper",
            pinSpacing: true,
            id: "pinning",
            markers: false
        }
    })



    points.forEach(function (elem, i) {
        gsap.set(elem, { position: "absolute", top: 0 });

        tl.to(indicators[i], { backgroundColor: "#ffffff", duration: 0.25 }, i)
        tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i)
        tl.from(elem.querySelector('article'), { autoAlpha: 0, translateY: 100 }, i)

        if (i != points.length - 1) {
            tl.to(indicators[i], { backgroundColor: "#adadad", duration: 0.25 }, i + 0.75)
            tl.to(elem.querySelector('article'), { autoAlpha: 0, translateY: -100 }, i + 0.75)
            tl.to(elem.querySelector('img'), { autoAlpha: 0 }, i + 0.75)
        }

    });

    gsap.to(".teamOverlayImg", {
        scrollTrigger: {
            trigger: ".team",
            scrub: 1,
            start: "top top",
            end: "bottom -100%",
            ease: "power2",
            pin: true,
        },
        scale: 10
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