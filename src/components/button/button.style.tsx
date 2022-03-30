import styled from "styled-components";
import {
  InterfaceSmartView,
  InterfaceStyledButton,
  InterfaceUrlImg,
} from "../../types/styledTypes";

export const ButtonWithIconAndText = styled.button<InterfaceStyledButton>`
  background: ${(props) => props.bgColor};
  width: 12%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.1em;
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const ButtonOnlyText = styled.button<InterfaceStyledButton>`
  background: ${(props) => props.bgColor};
  width: 12%;
  height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.1em;
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const BasicImg = styled.img`
  width: ${(props: InterfaceSmartView) => (props.smartView ? "90%" : "auto")};
  height: ${(props: InterfaceSmartView) => (props.smartView ? "50%" : "50%")};
`;
