import styled from "styled-components";
import { InterfaceSidebarWrapper } from "../../types/styledTypes";

export const PageRouteWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: InterfaceSidebarWrapper) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
