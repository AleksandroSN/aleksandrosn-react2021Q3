import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

export const StyledTransitionGroup = styled(TransitionGroup)``;
export const StyledCSSTransition = styled(CSSTransition)``;

export const RouterWrapper = styled.div`
  &.enter {
    opacity: 0;
    transform: scale(1.1);
  }

  &.enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  &.exit {
    opacity: 1;
    transform: scale(1);
  }

  &.exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
