import { Switch, withRouter } from "react-router-dom";
import { RoutesList } from "./appRoutes";
import { StyledCSSTransition, StyledTransitionGroup } from "./styled-routes";

export const AnimatedSwitch = withRouter(({ location }) => (
  <StyledTransitionGroup>
    <StyledCSSTransition key={location.key} timeout={300}>
      <Switch location={location}>{RoutesList}</Switch>
    </StyledCSSTransition>
  </StyledTransitionGroup>
));
