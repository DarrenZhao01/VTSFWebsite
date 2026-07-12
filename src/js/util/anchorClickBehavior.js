document.querySelectorAll(".cl-slide__prev, .cl-slide__next").forEach((arrow) => {
    arrow.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const targetSlide = href ? document.querySelector(href) : null;
        if (!targetSlide) {
            return;
        }

        const slidesContainer = targetSlide.closest(".cl-slides");
        if (!slidesContainer) {
            return;
        }

        // Scroll only the slider track — scrollIntoView also shifts the page.
        slidesContainer.scrollTo({
            left: targetSlide.offsetLeft,
            behavior: "smooth",
        });
    });
});
