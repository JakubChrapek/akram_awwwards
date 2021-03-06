import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${props => props.fluid && css`
    padding: 0;
    margin: 0;
    max-width: 100%;
  `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props => props.spaceBetween && css`
    justify-content: space-between;
  `}
  ${props => props.flexEnd && css`
    justify-content: flex-end;
  `}
  ${props => props.alignTop && css`
    align-items: flex-start;
  `}
  ${props => props.noHeight && css`
    height: 0;
  `}
`;

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${props => props.theme.red};
  transform: translate(-50%, -50%) scale(1);
  transition: all .1s ease-in-out;
  transition-property: transform, border;
  will-change: transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 2px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background-color: transparent !important;
    transform: translate(-50%, -50%) scale(1.65);
    border: 2px solid ${props => props.theme.red};
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }

`