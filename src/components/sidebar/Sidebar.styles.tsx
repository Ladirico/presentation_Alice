import styled, { keyframes } from "styled-components";
import { bounceInLeft } from "react-animations";
import { InterfaceSidebarWrapper } from "../../types/styledTypes";

const bounceAnimation = keyframes`${bounceInLeft}`;

export const SidebarWrapper = styled.div`
  width: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? (props.showSidebar ? "50%" : "0%") : "30%"};
  height: 89vh;
  background-color: ${(props: InterfaceSidebarWrapper) => props.bgColor};
  animation: 2s;
  ${(props: InterfaceSidebarWrapper) =>
    props.showSidebar ? bounceAnimation : ""};
  position: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? "absolute" : null};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
