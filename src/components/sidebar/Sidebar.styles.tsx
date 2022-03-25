import styled, { keyframes } from "styled-components";
import { bounceInLeft } from "react-animations";
import { InterfaceSidebarWrapper } from "../../types/types";

const bounceAnimation = keyframes`${bounceInLeft}`;

export const SidebarWrapper = styled.div`
  width: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? (props.showSidebar ? "80%" : "0%") : "30%"};
  height: 100%;
  background-color: ${(props: InterfaceSidebarWrapper) => props.bgColor};
  animation: 2s
    ${(props: InterfaceSidebarWrapper) =>
      props.showSidebar ? bounceAnimation : ""};
`;
