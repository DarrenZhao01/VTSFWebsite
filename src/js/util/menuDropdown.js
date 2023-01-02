function openMenuDropdown() {
    document.body.classList.add("overflow-hidden");

    let menuDropdowns = document.getElementsByClassName("menu-dropdown");

    for (let i = 0; i < menuDropdowns.length; i++) {
        menuDropdowns[i].classList.remove("hide");
    }
}

function closeMenuDropdown() {
    document.body.classList.remove("overflow-hidden");

    let menuDropdowns = document.getElementsByClassName("menu-dropdown");

    for (let i = 0; i < menuDropdowns.length; i++) {
        menuDropdowns[i].classList.add("hide");
    }
}

module.exports = {
    openMenuDropdown: openMenuDropdown,
    closeMenuDropdown: closeMenuDropdown,
};