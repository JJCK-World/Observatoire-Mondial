/* =========================================================
   OBSERVATOIRE MONDIAL
   JAVASCRIPT PRINCIPAL
   Version 1.0
========================================================= */

"use strict";


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initHeaderScroll();
    initSmoothLinks();
    initExternalLinks();
    initKeyboardNavigation();

});


/* =========================================================
   MENU MOBILE
========================================================= */

function initMobileMenu() {

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".main-navigation");

    if (!menuButton || !navigation) {
        return;
    }


    menuButton.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    /*
     * Fermer le menu lorsqu'un lien est sélectionné.
     */

    const links =
        navigation.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove(
                "is-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });


    /*
     * Fermer le menu si l'utilisateur clique
     * en dehors de celui-ci.
     */

    document.addEventListener("click", event => {

        const clickedInsideMenu =
            navigation.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            navigation.classList.contains("is-open")
        ) {

            navigation.classList.remove(
                "is-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            document.body.classList.remove(
                "menu-open"
            );
        }

    });


    /*
     * Fermer avec la touche Échap.
     */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            navigation.classList.contains("is-open")
        ) {

            navigation.classList.remove(
                "is-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            menuButton.focus();

            document.body.classList.remove(
                "menu-open"
            );

        }

    });

}


/* =========================================================
   HEADER AU DÉFILEMENT
========================================================= */

function initHeaderScroll() {

    const header =
        document.querySelector(".site-header");

    if (!header) {
        return;
    }


    const updateHeader =
        () => {

            if (window.scrollY > 20) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        };


    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

}


/* =========================================================
   LIENS INTERNES AVEC ANCRE
========================================================= */

function initSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   LIENS EXTERNES
========================================================= */

function initExternalLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="http://"], a[href^="https://"]'
        );

    links.forEach(link => {

        const currentHost =
            window.location.hostname;

        let targetHost = "";

        try {

            targetHost =
                new URL(
                    link.href
                ).hostname;

        } catch {

            return;

        }


        if (
            targetHost &&
            targetHost !== currentHost
        ) {

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }

    });

}


/* =========================================================
   NAVIGATION CLAVIER
========================================================= */

function initKeyboardNavigation() {

    document.addEventListener(
        "keydown",
        event => {

            /*
             * Navigation rapide :
             *
             * Alt + 1 → Accueil
             * Alt + 2 → Articles
             * Alt + 3 → Monde
             */

            if (!event.altKey) {
                return;
            }


            const navigation =
                document.querySelector(
                    ".main-navigation"
                );

            if (!navigation) {
                return;
            }


            const links =
                navigation.querySelectorAll(
                    "a"
                );


            if (
                event.key === "1" &&
                links[0]
            ) {

                event.preventDefault();

                links[0].click();

            }


            if (
                event.key === "2" &&
                links[1]
            ) {

                event.preventDefault();

                links[1].click();

            }


            if (
                event.key === "3" &&
                links[2]
            ) {

                event.preventDefault();

                links[2].click();

            }

        }
    );

}


/* =========================================================
   UTILITAIRE :
   RETOUR EN HAUT DE PAGE
========================================================= */

function createBackToTop() {

    if (
        document.querySelector(
            ".back-to-top"
        )
    ) {
        return;
    }


    const button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "back-to-top";

    button.setAttribute(
        "aria-label",
        "Retour en haut"
    );

    button.innerHTML = "↑";


    document.body.appendChild(button);


    const update =
        () => {

            if (window.scrollY > 500) {

                button.classList.add(
                    "visible"
                );

            } else {

                button.classList.remove(
                    "visible"
                );

            }

        };


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    update();

}


/* =========================================================
   DÉTECTION DES IMAGES
========================================================= */

function initImageHandling() {

    const images =
        document.querySelectorAll(
            "img"
        );

    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

                image.setAttribute(
                    "aria-label",
                    "Image indisponible"
                );

            }
        );

    });

}


/* =========================================================
   PROTECTION DES LIENS VIDES
========================================================= */

function initEmptyLinks() {

    const links =
        document.querySelectorAll(
            'a[href="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

            }
        );

    });

}


/* =========================================================
   EXPOSITION DES FONCTIONS
   Pour les futures pages du site.
========================================================= */

window.ObservatoireMondial = {

    initMobileMenu,
    initHeaderScroll,
    initSmoothLinks,
    initExternalLinks,
    initKeyboardNavigation,
    createBackToTop,
    initImageHandling,
    initEmptyLinks

};
