$(document).ready(function () {
    'use strict';

    $('.btnSquare').on('mouseenter', function(e) {
		
		var presentOfset = $(this).offset(),
			relX = e.pageX - presentOfset.left,
			relY = e.pageY - presentOfset.top;


		$(this).find('span').css({
			top: relY,
			left: relX,
		});
	});
	$('.btnSquare').on('mouseout', function(e) {
		
		var presentOfset = $(this).offset(),
			relX = e.pageX - presentOfset.left,
			relY = e.pageY - presentOfset.top;

		$(this).find('span').css({
			top: relY,
			left: relX,
		});
	});

    const noise = () => {
        let canvas, ctx;

        let wWidth, wHeight;

        let noiseData = [];
        let frame = 0;

        let loopTimeout;


        // Create Noise
        const createNoise = () => {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000;
                }
            }

            noiseData.push(idata);
        };


        // Play Noise
        const paintNoise = () => {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }

            ctx.putImageData(noiseData[frame], 0, 0);
        };


        // Loop
        const loop = () => {
            paintNoise(frame);

            loopTimeout = window.setTimeout(() => {
                window.requestAnimationFrame(loop);
            }, (1000 / 25));
        };


        // Setup
        const setup = () => {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;

            canvas.width = wWidth;
            canvas.height = wHeight;

            for (let i = 0; i < 10; i++) {
                createNoise();
            }

            loop();
        };


        // Reset
        let resizeThrottle;
        const reset = () => {
            window.addEventListener('resize', () => {
                window.clearTimeout(resizeThrottle);

                resizeThrottle = window.setTimeout(() => {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        };


        // Init
        const init = (() => {
            canvas = document.getElementById('noise');
            ctx = canvas.getContext('2d');

            setup();
        })();
    };

    noise();

    $(document).on("mousemove mouseenter", function (e) {
        const pointer = $(".pointer");
        const follower = $(".follower");
        TweenMax.to(pointer, 0.8, {
            left: e.clientX,
            top: e.clientY,
            ease: Expo.easeOut
        });
        TweenMax.to(follower, 1.5, {
            left: e.clientX,
            top: e.clientY,
            ease: Expo.easeOut
        });
    });

    // Mouse follower revert
    $('.revert').on('mouseenter mouseleave', (e) => {
        if (e.type == 'mouseenter') {
            $('.follower-wrapper').addClass('revert');
        } else {
            $('.follower-wrapper').removeClass('revert');
        }
    })
    if ($(".follower-wrapper").length > 0) {
        $(".follower-wrapper").addClass("active");
    }

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

    $(".icon").fancybox();
    // $('.designContent').liMarquee({
    //     drag: false,
    //     hoverstop:false
    // });

    // gsap.registerPlugin(ScrollTrigger);

    // let sections2 = gsap.utils.toArray(".heroProjectItem");

    // let scrollTween2 = gsap.to(sections2, {
    //     xPercent: -100 * (sections2.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".heroProject",
    //         pin: true,
    //         scrub: 1,
    //         end: () => "+=" + document.querySelector(".hero").offsetWidth
    //     }
    // });

    // ScrollTrigger.defaults({
    //     markers: false
    // })

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

    // gsap.to(".teamOverlayImg", {
    //     scrollTrigger: {
    //         trigger: ".team",
    //         scrub: 1,
    //         start: "top top",
    //         end: "bottom -100%",
    //         ease: "power2",
    //         pin: true,
    //     },
    //     scale: 40
    // }).to(".teamBackgroundContent", {
    //     scale: 1,
    //     opacity: 1,
    // }, 0);

    var teamTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".team",
            scrub: 1,
            start: "top top",
            end: "bottom -100%",
            ease: "power2",
            pin: true,
        }
    }).to('.teamOverlayImg', {
        scale: 40,
        opacity: 0
    }).to(".teamBackgroundContent", {
        opacity: 1,
    }, 0);


    // let sections = gsap.utils.toArray(".designContentItem");

    // let scrollTween = gsap.to(sections, {
    //     xPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".designContent",
    //         pin: true,
    //         scrub: 1,
    //         end: () => "+=" + document.querySelector(".designContent").offsetWidth
    //     }
    // });

    // Dragable Slider js Start

    gsap.registerPlugin(Draggable, InertiaPlugin);

    let slideDelay = 1.5,
        slideDuration = 0.3,
        slides = gsap.utils.toArray(".designContentItem"),
        numSlides = slides.length,
        progressPerItem = 1 / (numSlides - 1),
        snapProgress = gsap.utils.snap(progressPerItem),
        snapProgressDirectional = (value, direction) => {
            let snapped = snapProgress(value);
            return (snapped - value < 0) === direction < 0 ? snapped : snapProgress(direction < 0 ? value - progressPerItem : value + progressPerItem);
        },
        slideWidth, totalWidth, slideAnimation,
        animation = gsap.to(slides, {
            xPercent: "-=" + ((numSlides - 1) * 100),
            duration: 1,
            ease: "none",
            paused: true
        }),
        tracker = InertiaPlugin.track(animation, "progress")[0],
        draggable = new Draggable(document.createElement("div"), {
            trigger: ".designContent",
            onPress() {
                gsap.killTweensOf(animation);
                this.startProgress = animation.progress();
            },
            onDrag() {
                let change = (draggable.startX - draggable.x) / totalWidth;
                animation.progress(draggable.startProgress + change);
            },
            onRelease() {
                let velocity = tracker.get("progress");
                gsap.to(animation, {
                    inertia: {
                        duration: { min: 0.5, max: 2 },
                        progress: { velocity: velocity, min: 0, max: 1, end: value => snapProgressDirectional(value, velocity) }
                    },
                    overwrite: true
                })
            }
        });

    function animateSlides(direction) {
        let progress = snapProgress(animation.progress() + direction * progressPerItem);
        if (progress >= 0 && progress <= 1) {
            slideAnimation = gsap.to(animation, {
                progress: progress,
                duration: slideDuration,
                overwrite: true,
            });
        }
    }

    function resize() {
        slideWidth = slides[0].offsetWidth;
        totalWidth = slideWidth * numSlides;
    }

    resize();

    window.addEventListener("resize", resize);

    // Contact Background Noise

    const noise2 = () => {
        let canvas, ctx;

        let wWidth, wHeight;

        let noiseData = [];
        let frame = 0;

        let loopTimeout;


        // Create Noise
        const createNoise = () => {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000;
                }
            }

            noiseData.push(idata);
        };


        // Play Noise
        const paintNoise = () => {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }

            ctx.putImageData(noiseData[frame], 0, 0);
        };


        // Loop
        const loop = () => {
            paintNoise(frame);

            loopTimeout = window.setTimeout(() => {
                window.requestAnimationFrame(loop);
            }, (1000 / 25));
        };


        // Setup
        const setup = () => {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;

            canvas.width = wWidth;
            canvas.height = wHeight;

            for (let i = 0; i < 10; i++) {
                createNoise();
            }

            loop();
        };


        // Reset
        let resizeThrottle;
        const reset = () => {
            window.addEventListener('resize', () => {
                window.clearTimeout(resizeThrottle);

                resizeThrottle = window.setTimeout(() => {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        };


        // Init
        const init = (() => {
            canvas = document.getElementById('noise2');
            ctx = canvas.getContext('2d');

            setup();
        })();
    };

    noise2();


});