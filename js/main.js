document.addEventListener("DOMContentLoaded", () => {
    const navMenuMobile = document.getElementById("navMobileMenu");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileMenuClose = document.getElementById("mobileMenuClose");

    navMenuMobile.addEventListener("click", () => {
        mobileMenu.classList.add("mobile-menu--open");
    });

    mobileMenuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu--open");
    });

    const animateElement = (element, delay = 0, transform = false) => {
        element.style.opacity = 0;
        if (transform) {
            element.style.transform = "translateY(20px)";
        }
        setTimeout(() => {
            element.style.transition = "opacity 0.6s ease-in-out, transform 0.6s ease-out";
            element.style.opacity = 1;
            if (transform) {
                element.style.transform = "translateY(0)";
            }
        }, delay);
    };

    const elementsToAnimate = [
        { selector: ".main__hero-title", transform: false },
        { selector: ".main__hero-description", transform: false },
        { selector: ".main__hero-mobile-description", transform: false },
        { selector: ".main__hero-button", transform: false },
        ...Array.from(document.querySelectorAll(".main__feature")).map((feature, index) => ({
            element: feature,
            transform: true
        }))
    ];

    elementsToAnimate.forEach((item, index) => {
        const element = item.element || document.querySelector(item.selector);
        if (element) {
            animateElement(element, index * 200, item.transform);
        }
    });
});