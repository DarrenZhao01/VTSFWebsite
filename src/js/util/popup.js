document.getElementById("popup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("cl-hidden");
    document.getElementById("popup").classList.remove("cl-flex");
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("popup").classList.add("cl-flex");
        document.getElementById("popup").classList.remove("cl-hidden");
    }, 2000);
});