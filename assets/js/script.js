(() => {

    "use strict";


    const menuButton =
        document.querySelector("[data-menu-button]");

    const navigation =
        document.querySelector("[data-navigation]");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const opened =
                navigation.classList.toggle("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                String(opened)
            );

        });

    }


    const shareButton =
        document.querySelector("[data-share]");


    if (shareButton) {

        shareButton.addEventListener("click", async () => {

            const data = {

                title: document.title,

                text:
                    "Observatoire Mondial — article",

                url:
                    window.location.href

            };


            if (navigator.share) {

                try {

                    await navigator.share(data);

                } catch (error) {

                    if (error.name !== "AbortError") {
                        console.error(error);
                    }

                }

            } else {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                shareButton.textContent =
                    "Lien copié";

                setTimeout(() => {

                    shareButton.textContent =
                        "Partager";

                }, 2000);

            }

        });

    }


    const copyButton =
        document.querySelector("[data-copy]");


    if (copyButton) {

        copyButton.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                copyButton.textContent =
                    "Lien copié";

                setTimeout(() => {

                    copyButton.textContent =
                        "Copier le lien";

                }, 2000);

            } catch (error) {

                console.error(error);

                copyButton.textContent =
                    "Copie impossible";

            }

        });

    }


    document.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            if (navigation &&
                navigation.classList.contains("is-open")) {

                navigation.classList.remove("is-open");

                if (menuButton) {

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        });

    });

})();
