let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  const query = new URLSearchParams(queryString);
  const newObject = {};
  for (const [key, value] of query) {
    newObject[key] = value;
  }
  return newObject;
};

export const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = "";
  let foundView = ROUTES[pathname];
  if (foundView === undefined) {
    foundView = ROUTES["/error"];
  }
  rootEl.appendChild(foundView(props));
};

export const navigateTo = (pathname, props = {}) => {
  const state = props;
  const title = pathname;
  const url = pathname;
  history.pushState(state, title, url);
  const splitPathname = pathname.split("?");
  renderView(splitPathname[0], props);
};

export const onURLChange = (location) => {
  const locationSplit = location.split("?");
  const routeFound = locationSplit[0];
  const paramsFound = locationSplit[1];
  const objectParams = queryStringToObject(paramsFound);
  renderView(routeFound, objectParams);
};
