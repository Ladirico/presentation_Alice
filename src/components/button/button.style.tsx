import styled from "styled-components";
import { InterfaceBasicButton } from "../../types/types";

export const BasicButton = styled.button`
  width: 10%;
  height: 50%;
  margin: 1%;
  cursor: pointer;
  text-decoration: ${(props: InterfaceBasicButton) =>
    !props.types ? "underline" : "none"};
  border: ${(props: InterfaceBasicButton) => (!props.types ? "none" : "auto")};
  background: ${(props: InterfaceBasicButton) =>
    !props.types ? "transparent" : props.bgColor};
  display: ${(props: InterfaceBasicButton) => (props.types ? "flex" : "")};
  justify-content: center;
  align-items: center;
`;

export const BasicImg = styled.img`
  width: 50%;
  height: 50%;
`;
