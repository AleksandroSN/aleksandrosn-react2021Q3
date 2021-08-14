import { AboutPage } from "../pages/about-page/aboutPage";
import { MainPage } from "../pages/main-page/mainPage";

export const listRoutes = [
  { path: "/", name: "Home", Component: MainPage },
  { path: "/about", name: "About", Component: AboutPage },
];
