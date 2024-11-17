document.querySelectorAll(".cl-slide__prev, .cl-slide__next").forEach((arrow) => {
    arrow.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        const targetSlide = document.querySelector(event.target.getAttribute("href"));
        if (targetSlide) {
            // Logic for sliding to the target slide
            targetSlide.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    });
});