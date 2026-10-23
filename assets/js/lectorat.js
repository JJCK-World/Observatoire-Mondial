
/*
 * OBSERVATOIRE MONDIAL
 * Mesure des consultations de pages.
 *
 * CONFIGURATION :
 * 1. Créer et configurer un site GoatCounter.
 * 2. Remplacer la valeur vide de GOATCOUNTER_ENDPOINT par l'URL
 *    exacte fournie par le tableau de bord.
 * 3. Le suivi reste désactivé tant que cette valeur est vide.
 *
 * Ce script ne permet pas d'identifier avec certitude une personne.
 */

(() => {
  "use strict";

  const GOATCOUNTER_ENDPOINT = "";

  if (GOATCOUNTER_ENDPOINT.trim() === "") {
    return;
  }

  let endpoint;

  try {
    endpoint = new URL(GOATCOUNTER_ENDPOINT);
  } catch {
    console.error(
      "Observatoire Mondial : URL de statistiques invalide."
    );
    return;
  }

  if (
    endpoint.protocol !== "https:" ||
    !endpoint.pathname.endsWith("/count")
  ) {
    console.error(
      "Observatoire Mondial : endpoint HTTPS /count requis."
    );
    return;
  }

  const script = document.createElement("script");

  script.src = "https://gc.zgo.at/count.js";
  script.async = true;
  script.dataset.goatcounter = endpoint.href;

  script.addEventListener("error", () => {
    console.warn(
      "Observatoire Mondial : service de statistiques indisponible."
    );
  });

  document.head.appendChild(script);
})();
