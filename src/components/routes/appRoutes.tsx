import { Route } from "react-router-dom";
import { listRoutes } from "../../utils/listRoutes";

export const RoutesList = listRoutes.map(({ path, Component }) => {
  return (
    <Route key={path} exact path={path}>
      <div className="App-main__anime-page">
        <Component />
      </div>
    </Route>
  );
});
