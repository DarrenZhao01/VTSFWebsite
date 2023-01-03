function openMenuDropdown() {
    document.body.classList.add("cl-overflow-hidden");

    let menuDropdowns = document.getElementsByClassName("cl-menu-dropdown");

    for (let i = 0; i < menuDropdowns.length; i++) {
        menuDropdowns[i].classList.remove("cl-hide");
    }
}

function closeMenuDropdown() {
    document.body.classList.remove("cl-overflow-hidden");

    let menuDropdowns = document.getElementsByClassName("cl-menu-dropdown");

    for (let i = 0; i < menuDropdowns.length; i++) {
        menuDropdowns[i].classList.add("cl-hide");
    }
}

module.exports = {
    openMenuDropdown: openMenuDropdown,
    closeMenuDropdown: closeMenuDropdown,
};