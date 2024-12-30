import axios from 'axios';

const translateText = async (text, sourceLang, targetLang) => {
  try {
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY; // Use environment variable
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text',
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error.response?.data || error.message);
    throw error; // Re-throw to handle it further upstream
  }
};

export default translateText;

