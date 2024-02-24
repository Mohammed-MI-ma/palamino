//Routes

import HomeContainer from "../pages/Home";

const routes = [
  {
    path: "/:lang(fr|en)/home", // Include language prefix in the path
    name: "Home Component",
    component: HomeContainer,
  },
];

export default routes;
