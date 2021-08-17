import "./header.scss";
import { NavLink } from "react-router-dom";
import { listRoutes } from "../../utils/listRoutes";

export const Header: React.FC = () => {
  const firstTwoRoute = listRoutes.slice(0, 2);
  const NavLinkList = firstTwoRoute.map((route) => {
    return (
      <NavLink
        key={route.path}
        className="App-header__nav-link"
        activeClassName="App-header__nav-link--active"
        to={route.path}
        exact
      >
        {route.name}
      </NavLink>
    );
  });
  return (
    <>
      <header className="App-header">
        <h1 className="App-header__title">React.Router.Pokemon</h1>
        <nav className="App-header__nav">{NavLinkList}</nav>
      </header>
    </>
  );
};
