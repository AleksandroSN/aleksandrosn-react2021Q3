import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export const HeaderLogo = styled.div`
  display: block;
`;

export const HeaderLogoLink = styled(NavLink)`
  display: flex;
`;

export const HeaderLogoImg = styled.img`
  height: calc(90px - 1rem);
  width: calc(90px - 1rem);
`;

export const HeaderNav = styled.nav`
  margin: 0 3rem 0 auto;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const HeaderNavListItem = styled.li`
  box-shadow: inset 0 0 0px 1px #3b4cca;
  border-radius: 10px;

  a {
    padding: 1rem;
    display: block;
    color: #000;
  }
`;

export const HeaderNavListItemLink = styled(NavLink)`
  padding: 1rem;
  display: block;
  color: #000;

  &.active {
    color: #ffde00;
    background-color: #3b4cca;
    border-radius: 10px;
  }
`;

export const HeaderTitle = styled.h1`
  flex: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
