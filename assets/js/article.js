(() => {

    "use strict";

    const content = document.getElementById("article-content");
    const sourcesContent = document.getElementById("sources-content");

    if (!content) {
        return;
    }

    const basePath = new URL(".", window.location.href);

    async function loadJSON(file) {

        const response = await fetch(file, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`Impossible de charger ${file}`);
        }

        return response.json();
    }


    function escapeHTML(value) {

        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }


    function certaintyClass(level) {

        const map = {
            "CONFIRME": "confirmed",
            "DECLARE": "declared",
            "ANALYSE": "analysis",
            "HYPOTHESE": "hypothesis",
            "NON_CONFIRME": "unconfirmed"
        };

        return map[level] || "analysis";
    }


    function certaintyLabel(level) {

        const map = {
            "CONFIRME": "🟢 CONFIRMÉ",
            "DECLARE": "🔵 DÉCLARÉ",
            "ANALYSE": "🟠 ANALYSE",
            "HYPOTHESE": "⚪ HYPOTHÈSE",
            "NON_CONFIRME": "🔴 NON CONFIRMÉ"
        };

        return map[level] || level;

    }


    function renderSection(section, sources) {

        const articleSection = document.createElement("article");

        articleSection.className =
            `article-section certainty-section ${certaintyClass(section.niveau)}`;


        const badge = document.createElement("div");

        badge.className = "certainty-badge";

        badge.textContent =
            certaintyLabel(section.niveau);


        const title = document.createElement("h2");

        title.textContent = section.titre;


        articleSection.appendChild(badge);
        articleSection.appendChild(title);


        if (Array.isArray(section.paragraphes)) {

            section.paragraphes.forEach(paragraph => {

                const p = document.createElement("p");

                p.textContent = paragraph;

                articleSection.appendChild(p);

            });

        }


        if (Array.isArray(section.sources) &&
            section.sources.length > 0) {

            const sourceBox = document.createElement("div");

            sourceBox.className = "inline-sources";

            const label = document.createElement("strong");

            label.textContent = "Sources : ";

            sourceBox.appendChild(label);


            section.sources.forEach((sourceId, index) => {

                const source = sources.find(
                    item => item.id === sourceId
                );

                if (!source) {
                    return;
                }

                const link = document.createElement("a");

                link.href = source.url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";

                link.textContent =
                    `${source.organisme} — ${source.date}`;

                sourceBox.appendChild(link);


                if (index < section.sources.length - 1) {

                    sourceBox.appendChild(
                        document.createTextNode(" · ")
                    );

                }

            });


            articleSection.appendChild(sourceBox);

        }


        return articleSection;

    }


    function renderSources(sources) {

        sourcesContent.innerHTML = "";

        const list = document.createElement("ol");

        list.className = "source-list";


        sources.forEach(source => {

            const item = document.createElement("li");

            const link = document.createElement("a");

            link.href = source.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            link.textContent = source.titre;

            item.appendChild(link);


            const meta = document.createElement("span");

            meta.textContent =
                ` — ${source.organisme}, ${source.date}`;

            item.appendChild(meta);


            list.appendChild(item);

        });


        sourcesContent.appendChild(list);

    }


    async function initialize() {

        try {

            const article =
                await loadJSON(
                    new URL("article.json", basePath)
                );


            const sourceData =
                await loadJSON(
                    new URL("sources.json", basePath)
                );


            content.innerHTML = "";


            article.sections.forEach(section => {

                content.appendChild(
                    renderSection(
                        section,
                        sourceData.sources
                    )
                );

            });


            renderSources(sourceData.sources);


            document.title =
                `${article.titre} — Observatoire Mondial`;


        } catch (error) {

            console.error(error);

            content.innerHTML = `
                <div class="error-box">
                    <h2>Article momentanément indisponible</h2>
                    <p>
                        Le contenu de cet article n'a pas pu être chargé.
                        Veuillez réessayer ultérieurement.
                    </p>
                </div>
            `;

        }

    }


    initialize();

})();
