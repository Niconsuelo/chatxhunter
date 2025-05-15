import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    expect(setApiKey("api-input")).toEqual(null);
  });
});

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    expect(getApiKey()).toEqual("api-input");
  });
});
