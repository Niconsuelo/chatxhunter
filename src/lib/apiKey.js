export const setApiKey = (key) => {
  localStorage.setItem("api-input", key);

  return null;
};

export const getApiKey = () => {
  const gettingApiKey = localStorage.getItem("api-input");
  return gettingApiKey;
};
