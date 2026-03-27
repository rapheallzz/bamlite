document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load

    // Count-up animation for stats
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = +target.getAttribute('data-target');
                const isPercent = target.innerText.includes('%');
                const isDollar = target.innerText.includes('$');

                let count = 0;
                const updateCount = () => {
                    const inc = value / speed;
                    if (count < value) {
                        count += inc;
                        let displayValue = Math.ceil(count);
                        if (isPercent) displayValue += '%';
                        if (isDollar) {
                            if (value < 1) {
                                displayValue = '$' + count.toFixed(2);
                            } else {
                                displayValue = '$' + Math.ceil(count) + 'T';
                            }
                        }
                        target.innerText = displayValue;
                        setTimeout(updateCount, 1);
                    } else {
                        let finalValue = value;
                        if (isPercent) finalValue += '%';
                        if (isDollar) {
                            if (value < 1) {
                                finalValue = '$' + value.toFixed(2);
                            } else {
                                finalValue = '$' + value + 'T';
                            }
                        }
                        target.innerText = finalValue;
                    }
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    };

    const statsObserver = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });

    stats.forEach(stat => statsObserver.observe(stat));
});
