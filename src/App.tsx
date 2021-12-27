import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header/header";
import { AnimatedSwitch } from "./routes/animeRoutes";
import { Loader } from "./components/loader/loader";

export const App = (): JSX.Element => {
  return (
    <>
      <Loader />
      <Router>
        <Header />
        <main className="App-main">
          <AnimatedSwitch />
        </main>
      </Router>
    </>
  );
};
