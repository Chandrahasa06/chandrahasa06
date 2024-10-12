document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in, .slide-up');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

window.addEventListener('load', handleScrollAnimation);

