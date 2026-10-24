'use strict';

(() => {
    const initNavigation = () => {
        const menuButton = document.querySelector('.menu-toggle');
        const navigation = document.getElementById('main-navigation');

        if (!menuButton || !navigation) {
            console.warn(
                'Observatoire Mondial : bouton ou navigation introuvable.'
            );
            return;
        }

        const mobileQuery = window.matchMedia('(max-width: 850px)');

        const setMenuState = (isOpen) => {
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute(
                'aria-label',
                isOpen ? 'Fermer le menu' : 'Ouvrir le menu'
            );

            navigation.classList.toggle('is-open', isOpen);
        };

        const closeMenu = () => setMenuState(false);

        menuButton.addEventListener('click', (event) => {
            event.preventDefault();

            const isExpanded =
                menuButton.getAttribute('aria-expanded') === 'true';

            setMenuState(!isExpanded);
        });

        navigation.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (mobileQuery.matches) {
                    closeMenu();
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                menuButton.focus();
            }
        });

        document.addEventListener('click', (event) => {
            if (
                mobileQuery.matches &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }
        });

        const handleViewportChange = () => {
            closeMenu();
        };

        if (typeof mobileQuery.addEventListener === 'function') {
            mobileQuery.addEventListener('change', handleViewportChange);
        } else {
            mobileQuery.addListener(handleViewportChange);
        }

        closeMenu();
    };

    const initAnchorNavigation = () => {
        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                const targetId = link.getAttribute('href');

                if (!targetId || targetId === '#') {
                    return;
                }

                let target;

                try {
                    target = document.querySelector(targetId);
                } catch {
                    return;
                }

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: window.matchMedia(
                        '(prefers-reduced-motion: reduce)'
                    ).matches ? 'auto' : 'smooth',
                    block: 'start'
                });

                if (!target.hasAttribute('tabindex')) {
                    target.setAttribute('tabindex', '-1');
                }

                target.focus({ preventScroll: true });

                if (window.location.hash !== targetId) {
                    history.replaceState(null, '', targetId);
                }
            });
        });
    };

    const initExternalLinks = () => {
        document.querySelectorAll('a[target="_blank"]').forEach((link) => {
            const relValues = new Set(
                (link.getAttribute('rel') || '')
                    .split(/\s+/)
                    .filter(Boolean)
            );

            relValues.add('noopener');
            relValues.add('noreferrer');

            link.setAttribute('rel', [...relValues].join(' '));
        });
    };

    const init = () => {
        initNavigation();
        initAnchorNavigation();
        initExternalLinks();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
