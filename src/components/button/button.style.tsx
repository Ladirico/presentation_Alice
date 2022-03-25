import styled from "styled-components";
import { InterfaceBasicButton } from "../../types/types";

export const BasicButton = styled.button`
  width: 10%;
  height: 70%;
  margin: 1%;
  background: ${(props: InterfaceBasicButton) => props.bgColor};
  display: ${(props: InterfaceBasicButton) => (props.types ? "flex" : "")};
  justify-content: center;
  align-items: center;
`;

export const BasicImg = styled.img`
  width: 50%;
  height: 50%;
`;
