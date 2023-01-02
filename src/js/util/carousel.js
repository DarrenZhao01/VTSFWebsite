function startCarousels() {
    let carouselWrappers = document.getElementsByClassName("carousel-wrapper");

    for (let i = 0; i < carouselWrappers.length; i++) {
        let carousel = carouselWrappers[i].getElementsByClassName("carousel")[0];
        let bottomIcons = carouselWrappers[i].getElementsByClassName("bottom-icons")[0];
        let childElement = carousel.firstElementChild;
        let maxHeight = childElement.offsetHeight;

        while (bottomIcons.firstChild) {
            bottomIcons.removeChild(bottomIcons.firstChild);
        }

        for (let j = 0; j < carousel.childElementCount; j++) {
            if (childElement.offsetHeight > maxHeight) {
                maxHeight = childElement.offsetHeight;
            }

            let childElementIdNumber = Math.random() * 1000000;

            while (document.getElementById("carousel-item-" + childElementIdNumber)) {
                childElementIdNumber = Math.random() * 1000000;
            }

            childElement.id = "carousel-item-" + childElementIdNumber;

            let childElementBottomIcon = document.createElement("div");
            childElementBottomIcon.id = "carousel-item-bottom-icon-" + childElementIdNumber;

            if (j == 0) {
                childElementBottomIcon.classList.add("selected");
            }

            // childElementBottomIcon.addEventListener("click", (event) => {
            //     let target = event.target;
            //     let targetParent = target.parentElement;
            //     console.log(targetParent);

            //     let childElement = carousel.firstElementChild;

            //     for (let i = 0; i < carousel.childElementCount; i++) {
            //         childElement.classList.add("fast-scroll");
            //         childElement = childElement.nextElementSibling;
            //     }

            //     document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.id.split("-").at(-1)).classList.remove("selected");
            //     document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.nextElementSibling.id.split("-").at(-1)).classList.add("selected");
            // });

            bottomIcons.appendChild(childElementBottomIcon);

            childElement = childElement.nextElementSibling;
        }

        carousel.style.height = maxHeight;

        carouselScroll(carousel);
    }
}

function carouselScroll(carousel) {
    let childElement = carousel.firstElementChild;

    for (let i = 0; i < carousel.childElementCount; i++) {
        childElement.classList.add("scroll");
        childElement = childElement.nextElementSibling;
    }

    document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.id.split("-").at(-1)).classList.remove("selected");
    document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.nextElementSibling.id.split("-").at(-1)).classList.add("selected");

    setTimeout(() => {
        let childElement = carousel.firstElementChild;

        for (let i = 0; i < carousel.childElementCount; i++) {
            childElement.classList.remove("scroll");
            childElement = childElement.nextElementSibling;
        }
        
        carousel.appendChild(carousel.removeChild(carousel.firstElementChild));
        setTimeout(() => {
            carouselScroll(carousel);
        }, 3000);
    }, 3000);
}

startCarousels();