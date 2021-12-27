import { Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { RoutesList } from "./appRoutes";

export const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup className="App-main__anime">
    <CSSTransition
      key={location.key}
      classNames="App-main__anime-page"
      timeout={300}
    >
      <Switch location={location}>{RoutesList}</Switch>
    </CSSTransition>
  </TransitionGroup>
));
