import styled from "styled-components";
import {
  InterfaceBasicButton,
  InterfaceSidebarWrapper,
} from "../../types/types";

export const BasicButton = styled.button`
  width: ${(props: InterfaceBasicButton) => (!props.sidebar ? "10%" : "100%")};
  height: ${(props: InterfaceBasicButton) => (!props.sidebar ? "50%" : "auto")};
  margin-top: 1%;
  margin-bottom: 1%;
  padding: ${(props) => (props.sidebar ? "5%" : "auto")};
  cursor: pointer;
  text-decoration: ${(props: InterfaceBasicButton) =>
    !props.types ? "underline" : "none"};
  border: ${(props: InterfaceBasicButton) => (!props.types ? "none" : "auto")};
  background: ${(props: InterfaceBasicButton) =>
    !props.types ? "transparent" : props.bgColor};
  display: ${(props: InterfaceBasicButton) => (props.types ? "flex" : "")};
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const BasicImg = styled.img`
  width: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? "100%" : "40%"};
  height: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? "50%" : "80%"};
`;
