import { Route } from "react-router-dom";
import { listRoutes } from "./listRoutes";
import { RouterWrapper } from "./styled-routes";

export const RoutesList = listRoutes.map(({ path, Component }) => {
  return (
    <Route key={path} exact path={path}>
      <RouterWrapper>
        <Component />
      </RouterWrapper>
    </Route>
  );
});
