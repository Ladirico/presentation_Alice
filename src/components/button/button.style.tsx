import styled from "styled-components";
import {
  InterfaceBasicButton,
  InterfaceSidebarWrapper,
} from "../../types/types";

export const BasicButton = styled.button`
  width: ${(props: InterfaceBasicButton) => (!props.sidebar ? "10%" : "100%")};
  height: ${(props: InterfaceBasicButton) => (!props.sidebar ? "6vh" : "auto")};
  margin-top: 1%;
  margin-bottom: 1%;
  padding: ${(props) => (props.sidebar ? "5%" : "auto")};
  cursor: pointer;
  text-decoration: ${(props: InterfaceBasicButton) =>
    props.link ? "underline" : "none"};
  border: ${(props: InterfaceBasicButton) => (props.link ? "none" : "auto")};
  background: ${(props: InterfaceBasicButton) =>
    props.link ? "transparent" : props.bgColor};
  display: ${(props: InterfaceBasicButton) => (!props.link ? "flex" : "")};
  justify-content: space-evenly;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const BasicImg = styled.img`
  width: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? "90%" : "50%"};
  height: ${(props: InterfaceSidebarWrapper) =>
    props.smartView ? "50%" : "60%"};
`;
