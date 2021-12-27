import { FunctionComponent } from "react";
import { listRoutes } from "../routes/listRoutes";
import {
  HeaderLogo,
  HeaderLogoImg,
  HeaderLogoLink,
  HeaderNav,
  HeaderNavList,
  HeaderNavListItem,
  HeaderNavListItemLink,
  HeaderTitle,
  HeaderWrapper,
} from "./styled-header";

export const Header: FunctionComponent = () => {
  const firstTwoRoute = listRoutes.slice(0, 2);
  const NavLinkList = firstTwoRoute.map((route) => {
    return (
      <HeaderNavListItem key={route.name}>
        <HeaderNavListItemLink key={route.path} to={route.path} exact>
          {route.name}
        </HeaderNavListItemLink>
      </HeaderNavListItem>
    );
  });
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>
          <HeaderLogoLink to="/">
            <HeaderLogoImg src="./logo.svg" alt="logo" />
          </HeaderLogoLink>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavList>{NavLinkList}</HeaderNavList>
        </HeaderNav>
        <HeaderTitle>React.Pokemon</HeaderTitle>
      </HeaderWrapper>
    </>
  );
};
