document.getElementById('saveBtn').addEventListener('click', () => {
    const selectedLanguage = document.getElementById('language').value;
    chrome.storage.sync.set({ preferredLanguage: selectedLanguage }, () => {
      alert('Preferred language saved.');
    });
  });
  