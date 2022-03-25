import styled from "styled-components";
import { InterfaceSidebarWrapper } from "../../types/types";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 12vh;
  background-color: ${(props: InterfaceSidebarWrapper) => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? "flex-start" : "flex-end"};
`;
