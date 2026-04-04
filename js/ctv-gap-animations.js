(function ($) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        // Wait for GSAP and ScrollTrigger to be ready
        // The theme seems to have a delay for GSAP registration in custom-gsap.js
        // We'll use a similar approach to ensure plugins are registered

        setTimeout(function() {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                initCTVAnimations();
            }
        }, 500);
    });

    function initCTVAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Progress Ring Animation (+44%)
        const circle = document.getElementById('circle-progress-44');
        if (circle) {
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            // Set initial state
            gsap.set(circle, {
                strokeDasharray: circumference,
                strokeDashoffset: circumference
            });

            ScrollTrigger.create({
                trigger: ".ctv-gap-section",
                start: "top 70%",
                onEnter: () => {
                    gsap.to(circle, {
                        strokeDashoffset: circumference - (circumference * 0.44),
                        duration: 2.5,
                        ease: "power2.out"
                    });
                }
            });
        }

        // 2. Comparison Bar Animation (<$0.02)
        const spendBar = document.getElementById('spend-bar-fill');
        if (spendBar) {
            gsap.set(spendBar, { width: 0 });

            gsap.to(spendBar, {
                scrollTrigger: {
                    trigger: ".ctv-floating-stat",
                    start: "top 85%",
                },
                width: "2%",
                duration: 2,
                ease: "expo.out"
            });
        }

        // 3. Floating Image Parallax
        const ctvImage = document.querySelector('.ctv-main-img');
        if (ctvImage) {
            gsap.to(ctvImage, {
                scrollTrigger: {
                    trigger: ".ctv-gap-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -50,
                rotate: 2,
                ease: "none"
            });
        }

        // 4. Content Entrance Stagger
        const ctvStats = gsap.utils.toArray('.bam-stat-modern');
        if (ctvStats.length) {
            gsap.from(ctvStats, {
                scrollTrigger: {
                    trigger: ".ctv-content-box",
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "back.out(1.7)"
            });
        }

        // 5. Floating Stat Card Entrance
        const floatingCard = document.querySelector('.ctv-floating-stat');
        if (floatingCard) {
            gsap.from(floatingCard, {
                scrollTrigger: {
                    trigger: ".ctv-visual-container",
                    start: "top 60%",
                },
                x: 100,
                opacity: 0,
                duration: 1.2,
                delay: 0.5,
                ease: "power3.out"
            });

            // Add a continuous floating effect
            gsap.to(floatingCard, {
                y: "-=15",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        // 6. Section Background Glow Pulse
        const glow = document.querySelector('.image-overlay-glow');
        if (glow) {
            gsap.to(glow, {
                opacity: 0.5,
                scale: 1.1,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }

})(jQuery);
