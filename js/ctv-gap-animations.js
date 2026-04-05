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

        // 1. Comparison Bar Animation (<$0.02)
        const spendBar = document.getElementById('spend-bar-fill');
        if (spendBar) {
            gsap.set(spendBar, { width: 0 });
            gsap.to(spendBar, {
                scrollTrigger: {
                    trigger: ".ctv-gap-section",
                    start: "top 60%",
                },
                width: "2%",
                duration: 2,
                ease: "expo.out"
            });
        }

        // 2. Consumption Dual Bar Animation (+44%)
        const consumptionBar = document.getElementById('consumption-bar-fill');
        if (consumptionBar) {
            gsap.set(consumptionBar, { width: 0 });
            gsap.to(consumptionBar, {
                scrollTrigger: {
                    trigger: ".ctv-gap-section",
                    start: "top 60%",
                },
                width: "100%", // Represents the 144% relative to gen pop 100%
                duration: 2.5,
                delay: 0.3,
                ease: "power2.out"
            });
        }

        // 3. Power Meter Animation ($2T)
        const powerMeter = document.getElementById('power-meter-fill');
        if (powerMeter) {
            gsap.set(powerMeter, { strokeDashoffset: 126 });
            gsap.to(powerMeter, {
                scrollTrigger: {
                    trigger: ".ctv-gap-section",
                    start: "top 60%",
                },
                strokeDashoffset: 0,
                duration: 2.5,
                delay: 0.6,
                ease: "power2.inOut"
            });
        }

        // 4. Central Image Parallax
        const ctvImage = document.querySelector('.ctv-main-img');
        if (ctvImage) {
            gsap.to(ctvImage, {
                scrollTrigger: {
                    trigger: ".ctv-gap-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -40,
                scale: 1.05,
                ease: "none"
            });
        }

        // 5. Floating Cards Entrance & Drift
        const cards = gsap.utils.toArray('.ctv-floating-card');
        cards.forEach((card, i) => {
            // Entrance
            gsap.from(card, {
                scrollTrigger: {
                    trigger: ".ctv-visual-main-wrapper",
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                delay: 0.2 * i,
                ease: "back.out(1.2)"
            });

            // Drift Animation
            gsap.to(card, {
                y: i % 2 === 0 ? "-=20" : "+=15",
                x: i % 2 === 0 ? "+=10" : "-=10",
                duration: 3 + i,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.5
            });
        });

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
