import styled from "styled-components";
import { InterfaceSidebarWrapper } from "../../types/types";

export const PageRouteWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: InterfaceSidebarWrapper) => props.bgColor};
`;
