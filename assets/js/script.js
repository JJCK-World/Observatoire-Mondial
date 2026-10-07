"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mainNav =
        document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const opened =
                mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(opened)
            );

        });

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });
    }


    const year =
        document.querySelector("#year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }

});
