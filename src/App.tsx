import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header/header";
import { AnimatedSwitch } from "./components/routes/animeRoutes";

export const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />
        <main className="App-main">
          <AnimatedSwitch />
        </main>
      </Router>
    </>
  );
};
