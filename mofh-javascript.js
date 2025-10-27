/**
 * mofh-javascript v2.0.0
 * A modern VistaPanel helper library for MyOwnFreeHost (MOFH) panels.
 * 
 * Authors: SpookyKipper & Deveroonie (original logic)
 * Refactored and expanded by GPT-5 (2025)
 * License: MIT
 */

const mofh = (() => {
    const urlParams = new URLSearchParams(window.location.search);

    /* ─────────────────────────────────────────────
     * CORE UTILITIES
     * ───────────────────────────────────────────── */

    const getPageOption = () => urlParams.get('option');
    const getUsername = () => document.querySelector('#lblUserNameTxt')?.textContent ?? '';
    const getLogo = () => document.querySelector('#imgLogo')?.src ?? '';
    const setLogo = (url) => { const logo = document.querySelector('#imgLogo'); if (logo) logo.src = url; };
    const setTitle = (title) => { document.title = title; };
    const setFavicon = (url) => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = url;
        document.head.appendChild(link);
    };
    const loadStylesheet = (url) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        document.head.appendChild(link);
    };

    /* ─────────────────────────────────────────────
     * PAGE MODIFIERS
     * ───────────────────────────────────────────── */

    const setPHPVersion = (version) => {
        if (getPageOption() !== 'accountsettings') return;
        const phpCell = document.querySelector('#content > div > table.table > tbody > tr:nth-child(29) > td:nth-child(2)');
        if (!phpCell) return;
        phpCell.querySelector('a')?.remove();
        phpCell.textContent = version;
    };

    const setSSLInfoText = (text) => {
        if (getPageOption() !== 'sslconfigure') return;
        const alertBox = document.querySelector('#content > div > div');
        if (!alertBox) return;
        alertBox.classList.replace('alert-warning', 'alert-info');
        alertBox.querySelector('span')?.classList.replace('glyphicon-exclamation-sign', 'glyphicon-info-sign');
        const alertText = alertBox.querySelector('div');
        if (alertText) alertText.textContent = text;
    };

    /* ─────────────────────────────────────────────
     * ELEMENT UTILITIES
     * ───────────────────────────────────────────── */

    const hideSidebar = () => {
        const sidebar = document.querySelector('#sidebar');
        if (sidebar) sidebar.style.display = 'none';
    };

    const hideFooter = () => {
        const footer = document.querySelector('footer');
        if (footer) footer.style.display = 'none';
    };

    const setElementDetails = (featureKey, value, property, sections) => {
        sections.forEach(({ items }) => {
            items.forEach((item) => {
                if (item.feature === featureKey) item[property] = value;
            });
        });
    };

    const hideElementById = (id) => {
        const elem = document.getElementById(id);
        if (elem) elem.style.display = 'none';
    };

    const showElementById = (id) => {
        const elem = document.getElementById(id);
        if (elem) elem.style.display = 'block';
    };

    const addCustomButton = (text, onClick, parentSelector = '#content') => {
        const parent = document.querySelector(parentSelector);
        if (!parent) return;
        const button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.textContent = text;
        button.addEventListener('click', onClick);
        parent.appendChild(button);
    };

    /* ─────────────────────────────────────────────
     * NETWORK / API
     * ───────────────────────────────────────────── */

    const getVPVersion = async () => {
        try {
            const res = await fetch('https://panel.myownfreehost.net/xml-api/version.php');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.text();
        } catch (err) {
            console.error('Failed to fetch VP version:', err);
            return null;
        }
    };

    const pingDomain = async (domain) => {
        try {
            const res = await fetch(`https://${domain}`, { mode: 'no-cors' });
            return res.ok || res.type === 'opaque';
        } catch {
            return false;
        }
    };

    const getUserDomains = () => {
        const domainCells = document.querySelectorAll('table.table tbody tr td:first-child a');
        return Array.from(domainCells).map((a) => a.textContent.trim());
    };

    /* ─────────────────────────────────────────────
     * THEME / UI HELPERS
     * ───────────────────────────────────────────── */

    const applyDarkMode = () => {
        document.body.classList.add('dark-mode');
        const darkStyle = document.createElement('style');
        darkStyle.textContent = `
            body.dark-mode {
                background-color: #1a1a1a;
                color: #f0f0f0;
            }
            .table, .panel, .alert {
                background-color: #2b2b2b !important;
                border-color: #444 !important;
            }
        `;
        document.head.appendChild(darkStyle);
    };

    const injectCustomBanner = (message, color = '#007bff') => {
        const banner = document.createElement('div');
        banner.textContent = message;
        banner.style.cssText = `
            background: ${color};
            color: white;
            padding: 10px;
            text-align: center;
            font-weight: 600;
            border-radius: 0 0 8px 8px;
        `;
        document.body.prepend(banner);
    };

    const toggleLoadingOverlay = (show = true, message = 'Loading...') => {
        let overlay = document.querySelector('#mofh-loading-overlay');
        if (show) {
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'mofh-loading-overlay';
                overlay.innerHTML = `<div>${message}</div>`;
                overlay.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.5); display: flex; align-items: center;
                    justify-content: center; color: white; font-size: 1.5em; z-index: 9999;
                `;
                document.body.appendChild(overlay);
            }
        } else {
            overlay?.remove();
        }
    };

    /* ─────────────────────────────────────────────
     * EXPORT API
     * ───────────────────────────────────────────── */

    return {
        getPageOption,
        getUsername,
        getLogo,
        setLogo,
        setTitle,
        setFavicon,
        loadStylesheet,
        setPHPVersion,
        setSSLInfoText,
        hideSidebar,
        hideFooter,
        hideElementById,
        showElementById,
        addCustomButton,
        setElementDetails,
        getVPVersion,
        pingDomain,
        getUserDomains,
        applyDarkMode,
        injectCustomBanner,
        toggleLoadingOverlay,
    };
})();
