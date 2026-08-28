// Default settings
const defaults = { reading: false, typing: true, slang: false };

// Load saved settings and update the switches
chrome.storage.local.get(defaults, (settings) => {
    document.getElementById('toggleReading').checked = settings.reading;
    document.getElementById('toggleTyping').checked = settings.typing;
    document.getElementById('toggleSlang').checked = settings.slang;
});

// Save settings when a switch is clicked
function saveSettings() {
    const newSettings = {
        reading: document.getElementById('toggleReading').checked,
        typing: document.getElementById('toggleTyping').checked,
        slang: document.getElementById('toggleSlang').checked
    };
    chrome.storage.local.set(newSettings);
}

// Add event listeners to switches
document.getElementById('toggleReading').addEventListener('change', saveSettings);
document.getElementById('toggleTyping').addEventListener('change', saveSettings);
document.getElementById('toggleSlang').addEventListener('change', saveSettings);
