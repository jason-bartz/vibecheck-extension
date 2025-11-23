console.log('Vibecheck background script running');

// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('Vibecheck installed');
});
