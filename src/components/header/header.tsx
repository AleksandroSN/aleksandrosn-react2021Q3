import "./header.scss";
import { NavLink } from "react-router-dom";
import { listRoutes } from "../routes/listRoutes";

export const Header: React.FC = () => {
  const firstTwoRoute = listRoutes.slice(0, 2);
  const NavLinkList = firstTwoRoute.map((route) => {
    return (
      <li key={route.name} className="App-header__nav-item">
        <NavLink
          key={route.path}
          className="App-header__nav-link"
          activeClassName="App-header__nav-link--active"
          to={route.path}
          exact
        >
          {route.name}
        </NavLink>
      </li>
    );
  });
  return (
    <>
      <header className="App-header">
        <div className="App-header__logo">
          <a href="/" className="App-header__logo-link">
            <img className="App-header__logo-img" src="./logo.svg" alt="logo" />
          </a>
        </div>
        <nav className="App-header__nav">
          <ul className="App-header__nav-list">{NavLinkList}</ul>
        </nav>
        <h1 className="App-header__title">React.Pokemon</h1>
      </header>
    </>
  );
};
