import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styleUrl from './index.css?url';

console.log('Vibecheck content script loaded');

const ROOT_ID = 'vibecheck-extension-root';

function injectApp() {
    if (document.getElementById(ROOT_ID)) return;

    // Ensure body exists
    if (!document.body) {
        requestAnimationFrame(injectApp);
        return;
    }

    const host = document.createElement('div');
    host.id = ROOT_ID;

    // Force high z-index and fixed position on the host itself to ensure visibility
    // even before CSS loads or if CSS fails
    host.style.all = 'initial'; // Reset first
    host.style.display = 'block'; // Ensure block display
    host.style.position = 'fixed';
    host.style.bottom = '0px';
    host.style.right = '0px';
    host.style.zIndex = '2147483647';

    document.body.appendChild(host);

    const shadow = host.attachShadow({ mode: 'open' });

    const root = document.createElement('div');
    root.id = 'root';
    shadow.appendChild(root);

    // Fetch and inject CSS
    fetch(chrome.runtime.getURL(styleUrl))
        .then(response => response.text())
        .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            shadow.appendChild(style);
        })
        .catch(err => console.error('Failed to load Vibecheck CSS:', err));

    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// Initial injection
injectApp();

// Watch for body changes (SPA navigation, DOM wiping)
const observer = new MutationObserver((mutations) => {
    // Check if our root was removed
    let shouldReinject = false;
    for (const mutation of mutations) {
        if (mutation.removedNodes) {
            for (const node of mutation.removedNodes) {
                if (node.id === ROOT_ID) {
                    shouldReinject = true;
                    break;
                }
            }
        }
    }

    // Also check if it's just missing (e.g. body replaced)
    if (shouldReinject || !document.getElementById(ROOT_ID)) {
        console.log('Vibecheck re-injecting...');
        injectApp();
    }
});

// Start observing
if (document.body) {
    observer.observe(document.body, {
        childList: true,
        subtree: false // We only care if direct children of body (like our root) are removed
    });
} else {
    // Wait for body then observe
    const bodyObserver = new MutationObserver(() => {
        if (document.body) {
            bodyObserver.disconnect();
            injectApp();
            observer.observe(document.body, { childList: true, subtree: false });
        }
    });
    bodyObserver.observe(document.documentElement, { childList: true });
}
