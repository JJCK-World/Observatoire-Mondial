/* =========================================================
   OBSERVATOIRE MONDIAL
   INTERACTIONS PRINCIPALES
   Fichier : assets/js/script.js
   Sans dépendance externe
========================================================= */

(() => {
    "use strict";

    const initObservatoireMondial = () => {
        const menuButton = document.querySelector(".menu-toggle");
        const navigation = document.querySelector("#main-navigation");

        /*
         * MENU MOBILE
         * Le bouton commande l'ouverture et la fermeture
         * de la navigation existante.
         */

        if (menuButton && navigation) {
            const closeMenu = () => {
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Ouvrir le menu");

                navigation.classList.remove("open", "is-open", "active");
            };

            const openMenu = () => {
                menuButton.setAttribute("aria-expanded", "true");
                menuButton.setAttribute("aria-label", "Fermer le menu");

                navigation.classList.add("open");
            };

            menuButton.addEventListener("click", () => {
                const isExpanded =
                    menuButton.getAttribute("aria-expanded") === "true";

                if (isExpanded) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            navigation.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", () => {
                    closeMenu();
                });
            });

            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    closeMenu();

                    if (menuButton.getAttribute("aria-expanded") === "false") {
                        menuButton.focus();
                    }
                }
            });

            document.addEventListener("click", (event) => {
                const isExpanded =
                    menuButton.getAttribute("aria-expanded") === "true";

                if (!isExpanded) {
                    return;
                }

                const clickedInsideNavigation = navigation.contains(event.target);
                const clickedButton = menuButton.contains(event.target);

                if (!clickedInsideNavigation && !clickedButton) {
                    closeMenu();
                }
            });

            const mobileBreakpoint = window.matchMedia("(max-width: 950px)");

            const handleViewportChange = () => {
                if (!mobileBreakpoint.matches) {
                    closeMenu();
                }
            };

            if (typeof mobileBreakpoint.addEventListener === "function") {
                mobileBreakpoint.addEventListener("change", handleViewportChange);
            } else if (typeof mobileBreakpoint.addListener === "function") {
                mobileBreakpoint.addListener(handleViewportChange);
            }
        }

        /*
         * ANNÉE DU PIED DE PAGE
         * Mise à jour uniquement si un élément dédié existe.
         * Aucun texte éditorial n'est modifié.
         */

        const currentYear = document.querySelector("[data-current-year]");

        if (currentYear) {
            currentYear.textContent = String(new Date().getFullYear());
        }

        /*
         * LIENS INTERNES
         * Fermeture du menu après navigation vers une ancre.
         */

        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener("click", () => {
                if (menuButton && navigation) {
                    menuButton.setAttribute("aria-expanded", "false");
                    menuButton.setAttribute("aria-label", "Ouvrir le menu");

                    navigation.classList.remove("open", "is-open", "active");
                }
            });
        });

        /*
         * PROTECTION CONTRE LES LIENS VIDES
         * Aucun remplacement automatique des destinations :
         * les chemins des rubriques restent ceux du HTML.
         */

        document.querySelectorAll('a[href=""]').forEach((link) => {
            link.setAttribute("aria-disabled", "true");
        });
    };

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initObservatoireMondial,
            { once: true }
        );
    } else {
        initObservatoireMondial();
    }
})();
