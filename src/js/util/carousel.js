function startCarousels() {
    let carouselWrappers = document.getElementsByClassName("cl-carousel-wrapper");

    for (let i = 0; i < carouselWrappers.length; i++) {
        let carousel = carouselWrappers[i].getElementsByClassName("cl-carousel")[0];
        let bottomIcons = carouselWrappers[i].getElementsByClassName("cl-bottom-icons")[0];
        let childElement = carousel.firstElementChild;

        while (bottomIcons.firstChild) {
            bottomIcons.removeChild(bottomIcons.firstChild);
        }

        for (let j = 0; j < carousel.childElementCount; j++) {
            let childElementIdNumber = Math.random() * 1000000;

            while (document.getElementById("carousel-item-" + childElementIdNumber)) {
                childElementIdNumber = Math.random() * 1000000;
            }

            childElement.id = "carousel-item-" + childElementIdNumber;

            let childElementBottomIcon = document.createElement("div");
            childElementBottomIcon.id = "carousel-item-bottom-icon-" + childElementIdNumber;

            if (j == 0) {
                childElementBottomIcon.classList.add("cl-selected");
            }

            // childElementBottomIcon.addEventListener("click", (event) => {
            //     let target = event.target;
            //     let targetParent = target.parentElement;
            //     console.log(targetParent);

            //     let childElement = carousel.firstElementChild;

            //     for (let i = 0; i < carousel.childElementCount; i++) {
            //         childElement.classList.add("cl-fast-scroll");
            //         childElement = childElement.nextElementSibling;
            //     }

            //     document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.id.split("-").at(-1)).classList.remove("cl-selected");
            //     document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.nextElementSibling.id.split("-").at(-1)).classList.add("cl-selected");
            // });

            bottomIcons.appendChild(childElementBottomIcon);

            childElement = childElement.nextElementSibling;
        }

        carouselScroll(carousel);
    }
}

async function carouselScroll(carousel) {
    let childElement = carousel.firstElementChild;

    for (let i = 0; i < carousel.childElementCount; i++) {

        childElement.classList.add("cl-scroll");
        childElement = childElement.nextElementSibling;
    }

    document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.id.split("-").at(-1)).classList.remove("cl-selected");
    document.getElementById("carousel-item-bottom-icon-" + carousel.firstElementChild.nextElementSibling.id.split("-").at(-1)).classList.add("cl-selected");

    setTimeout(() => {
        let childElement = carousel.firstElementChild;

        for (let i = 0; i < carousel.childElementCount; i++) {
            childElement.classList.remove("cl-scroll");
            childElement = childElement.nextElementSibling;
        }
        
        carousel.appendChild(carousel.removeChild(carousel.firstElementChild));
        setTimeout(() => {
            carouselScroll(carousel);
        }, 3000);
    }, 3000);
}

startCarousels();