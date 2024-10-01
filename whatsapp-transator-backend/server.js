const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text, targetLanguage } = req.body;
  try {
    const translationResponse = await axios.post(
      'https://translation.api.endpoint',
      { q: text, target: targetLanguage }
    );
    res.json({ translatedText: translationResponse.data });
  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
