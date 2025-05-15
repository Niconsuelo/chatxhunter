import { navigateTo, onURLChange, setRootEl, setRoutes } from "./router.js";
import Home from "./views/Home.js";
import Error from "./views/Error.js";
import ApiKeyView from "./views/ApiKeyView.js";
import chatCharacter from "./views/ViewChatCharacter.js";
import groupalChat from "./views/GroupalChat.js";

const routes = {
  "/": Home,
  "/error": Error,
  "/api-key": ApiKeyView,
  "/chat-character": chatCharacter,
  "/groupal-chat": groupalChat,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  setRootEl(root);

  const pathnameRoute = window.location.pathname;

  const queryParamsRoute = window.location.search;

  const currentURL = () => {
    onURLChange(pathnameRoute + queryParamsRoute);
  };

  currentURL();
  window.addEventListener("popstate", currentURL);

  const navToHome = document.querySelector("#to-home");
  navToHome.addEventListener("click", function () {
    navigateTo("/");
  });

  const navToApiKey = document.querySelector("#to-api-key");
  navToApiKey.addEventListener("click", function () {
    navigateTo("/api-key");
  });

  const buttonGroupalChat = document.querySelector("#g-chat-button");
  buttonGroupalChat.addEventListener("click", function () {
    navigateTo("/groupal-chat");
  });
});
