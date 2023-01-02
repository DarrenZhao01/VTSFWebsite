const timeToTop = 500; // ms
const scrollInterval = 3; // ms

function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function initScrollToTop() {
    const currentScrollYPosition = window.scrollY;
    let totalScrolls = Math.ceil(timeToTop / scrollInterval);
    let scrollPositions = [];

    for (let i = 1; i <= totalScrolls; i++) {
        scrollPositions.push(currentScrollYPosition - (easeInOutQuart(i / totalScrolls) * currentScrollYPosition));
    }

    scrollToTop(scrollPositions.values(), scrollInterval);
}

function scrollToTop(iterator, msDelay) {
    let result = iterator.next();
    
    window.scrollTo(0, result.value);

    if (!result.done) {
        setTimeout(() => {
            scrollToTop(iterator, msDelay);
        }, msDelay);
    }
}

addEventListener("scroll", (event) => {
    const elements = document.getElementsByClassName("scroll-to-top");

    if (window.scrollY < window.innerHeight) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("opacity-0");
        }
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("opacity-0");
        }
    }
});

module.exports = {
    initScrollToTop: initScrollToTop,
};