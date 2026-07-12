const POPUP_SHOWN_KEY = "emailListPopupShown";

function hidePopup() {
    const popup = document.getElementById("popup");
    if (!popup) {
        return;
    }

    popup.classList.add("cl-hidden");
    popup.classList.remove("cl-flex");
}

function showPopup() {
    const popup = document.getElementById("popup");
    if (!popup) {
        return;
    }

    popup.classList.add("cl-flex");
    popup.classList.remove("cl-hidden");
    localStorage.setItem(POPUP_SHOWN_KEY, "true");
}

const popup = document.getElementById("popup");

if (popup) {
    // Dismiss only on backdrop click, not when interacting with modal content
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            hidePopup();
        }
    });

    const closeButton = popup.querySelector("button");
    if (closeButton) {
        closeButton.addEventListener("click", hidePopup);
    }
}

window.addEventListener("load", () => {
    if (localStorage.getItem(POPUP_SHOWN_KEY)) {
        return;
    }

    setTimeout(showPopup, 2000);
});
