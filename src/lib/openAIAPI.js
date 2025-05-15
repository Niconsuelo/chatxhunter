import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (messages) => {
  const URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = getApiKey();
  const REQUEST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are ${messages.nameCharacter} of the anime Hunter X Hunter. Just answer questions that are related to your character and its history. Answer in spanish`,
        },
        {
          role: "user",
          content: messages.message,
        },
      ],
    }),
  };

  const fetchApi = fetch(URL, REQUEST)
    .then((response) => {
      if (!response.ok) {

        throw new Error("No se pudo obtener los datos");
      }
      return response
        .json() 

        .catch((error) => {
          console.error("Error durante la solicitud de datos:", error);
        });
    });
  return fetchApi;
};
