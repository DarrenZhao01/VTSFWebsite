let cardWrappers = document.getElementsByClassName("card-wrapper");

for (let cardWrapper of cardWrappers) {
    cardWrapper.addEventListener("click", (event) => {
        event.target.classList.toggle("flipped");
    });
}