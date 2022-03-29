import styled from "styled-components";
import { InterfaceSidebarWrapper } from "../../types/types";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: InterfaceSidebarWrapper) => props.bgColor};
`;

export const InsideNavbar = styled.div`
  width: 98%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? "space-between" : "flex-end"};
`;
