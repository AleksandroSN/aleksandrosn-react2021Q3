import { Page404 } from "../pages/404/page404";
import { AboutPage } from "../pages/about-page/aboutPage";
import { DetailPage } from "../pages/detail-page/detail-page";
import { MainPage } from "../pages/main-page/mainPage";

export const listRoutes = [
  { path: "/", name: "Home", Component: MainPage },
  { path: "/about", name: "About", Component: AboutPage },
  { path: "/details/:name", name: "Details", Component: DetailPage },
  { path: "*", name: "404", Component: Page404 },
];
