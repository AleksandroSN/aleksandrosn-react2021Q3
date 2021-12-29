import { BrowserRouter as Router } from "react-router-dom";
import { Header, Loader } from "./components";
import { AnimatedSwitch } from "./routes/animeRoutes";
import { MainContainer } from "./style/styled-app";

export const App = (): JSX.Element => {
  return (
    <>
      <Loader />
      <Router>
        <Header />
        <MainContainer>
          <AnimatedSwitch />
        </MainContainer>
      </Router>
    </>
  );
};
