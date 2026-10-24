'use strict';

(() => {
    const init = () => {
        const button = document.querySelector('.menu-toggle');
        const navigation = document.getElementById('main-navigation');

        // Navigation mobile
        if (button && navigation) {
            const mobile = window.matchMedia('(max-width: 1000px)');

            const setMenu = (open) => {
                button.setAttribute('aria-expanded', String(open));
                button.setAttribute(
                    'aria-label',
                    open ? 'Fermer le menu' : 'Ouvrir le menu'
                );
                navigation.classList.toggle('is-open', open);
            };

            button.addEventListener('click', () => {
                setMenu(button.getAttribute('aria-expanded') !== 'true');
            });

            navigation.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => {
                    if (mobile.matches) setMenu(false);
                });
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    setMenu(false);
                    button.focus();
                }
            });

            document.addEventListener('click', (event) => {
                if (
                    mobile.matches &&
                    !navigation.contains(event.target) &&
                    !button.contains(event.target)
                ) {
                    setMenu(false);
                }
            });

            mobile.addEventListener?.('change', () => setMenu(false));
            setMenu(false);
        }

        // Année automatique dans le pied de page
        const year = document.getElementById('current-year');
        if (year) year.textContent = String(new Date().getFullYear());

        // Défilement doux vers les ancres internes
        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                const id = link.getAttribute('href');
                if (!id || id === '#') return;

                const target = document.querySelector(id);
                if (!target) return;

                event.preventDefault();
                target.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                        ? 'auto'
                        : 'smooth',
                    block: 'start'
                });
            });
        });

        // Sécurité des liens externes ouverts dans un nouvel onglet
        document.querySelectorAll('a[target="_blank"]').forEach((link) => {
            const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
            rel.add('noopener');
            rel.add('noreferrer');
            link.setAttribute('rel', [...rel].join(' '));
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
