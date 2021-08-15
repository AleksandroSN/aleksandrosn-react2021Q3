import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Header } from "./components/header/header";
import { Page404 } from "./pages/404/page404";
import { listRoutes } from "./utils/listRoutes";
import { DetailPage } from "./pages/detail-page/detail-page";

function App(): JSX.Element {
  const RoutesList = listRoutes.map(({ path, Component }) => {
    return (
      <Route key={path} exact path={path}>
        <div className="App-main__anime-page">
          <Component />
        </div>
      </Route>
    );
  });

  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup className="App-main__anime">
      <CSSTransition
        key={location.key}
        classNames="App-main__anime-page"
        timeout={300}
      >
        <Switch location={location}>
          {RoutesList}
          <Route path="/details/:name" exact component={DetailPage} />
          <Route component={Page404} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

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
}

export default App;
