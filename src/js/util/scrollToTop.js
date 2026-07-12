const timeToTop = 500; // ms
const scrollInterval = 3; // ms

function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function getScrollElement() {
    return document.scrollingElement || document.documentElement;
}

function initScrollToTop() {
    const scrollElement = getScrollElement();
    const currentScrollYPosition = scrollElement.scrollTop;
    let totalScrolls = Math.ceil(timeToTop / scrollInterval);
    let scrollPositions = [];

    for (let i = 1; i <= totalScrolls; i++) {
        scrollPositions.push(currentScrollYPosition - (easeInOutQuart(i / totalScrolls) * currentScrollYPosition));
    }

    scrollToTop(scrollPositions.values(), scrollInterval);
}

function scrollToTop(iterator, msDelay) {
    let result = iterator.next();
    const scrollElement = getScrollElement();

    scrollElement.scrollTop = result.value;

    if (!result.done) {
        setTimeout(() => {
            scrollToTop(iterator, msDelay);
        }, msDelay);
    }
}

window.addEventListener("scroll", () => {
    const elements = document.getElementsByClassName("cl-scroll-to-top");
    const scrollElement = getScrollElement();

    if (scrollElement.scrollTop < window.innerHeight) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("cl-opacity-0");
        }
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("cl-opacity-0");
        }
    }
});

module.exports = {
    initScrollToTop: initScrollToTop,
};
