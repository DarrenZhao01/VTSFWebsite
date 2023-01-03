let cardWrappers = document.getElementsByClassName("cl-card-wrapper");

for (let cardWrapper of cardWrappers) {
    cardWrapper.addEventListener("click", (event) => {
        event.target.classList.toggle("cl-flipped");
    });
}