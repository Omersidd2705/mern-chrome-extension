const translateMessage = async (text) => {
    const response = await fetch('http://localhost:8080/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        targetLanguage: 'es' // User's preferred language
      }),
    });
    const result = await response.json();
    return result.translatedText;
  };
  
  // Listening for chat message updates and translating the chat
  const observeMessages = () => {
    const chatContainer = document.querySelectorAll('.message-in .copyable-text');
    chatContainer.forEach(async (message) => {
      const translatedText = await translateMessage(message.innerText);
      message.innerText = translatedText;  // Replacing with translated text
    });
  };
  
  observeMessages();
  