import { InterfaceButton, InterfaceButtonProp } from "../../types/styledTypes";
import { useContext, useEffect, useState } from "react";
import logo from "./../../logo.svg";
import menu from "./../../menu.png";
import login from "./../../login.png";
import switchOff from "./../../switchOff.png";
import switchOn from "./../../switchOn.png";
import { SmartphoneView } from "../../App";
import {
  BasicImg,
  ButtonOnlyText,
  ButtonWithIconAndText,
} from "./Button.style";
const Button = ({ icon, funcOnClick, message, type }: InterfaceButton) => {
  const starterContext = useContext(SmartphoneView);
  const { context } = starterContext;
  const { theme, smartView } = context;
  const { themePink, themeColored, themeChoose } = theme;
  const [buttonProp, setButtonProp] = useState<InterfaceButtonProp>({
    src: "",
    bgColor: "",
  });

  useEffect(() => {
    switch (icon) {
      case "back":
        setButtonProp({
          src: logo,
          bgColor: themeChoose ? themePink?.c1 : themeColored?.c1,
        });
        break;
      case "front":
        setButtonProp({
          src: logo,
          bgColor: themeChoose ? themePink?.c1 : themeColored?.c1,
        });
        break;
      case "menu":
        setButtonProp({
          src: menu,
          bgColor: themeChoose ? themePink?.c1 : themeColored?.c1,
        });
        break;
      case "login":
        setButtonProp({
          src: login,
          bgColor: themeChoose ? themePink?.c1 : themeColored?.c1,
        });
        break;
      case "switch":
        setButtonProp({
          src: themeChoose ? switchOn : switchOff,
        });
        break;
      default:
        setButtonProp({
          src: logo,
          bgColor: themeChoose ? themePink?.c1 : themeColored?.c1,
        });
    }
  }, [icon, themeChoose, themePink?.c1, themeColored?.c1]);

  return (
    <>
      {smartView ? (
        <ButtonWithIconAndText
          onClick={funcOnClick}
          bgColor={buttonProp.bgColor}
          color={buttonProp.color}
          type={type}
        >
          <BasicImg src={buttonProp.src} />
        </ButtonWithIconAndText>
      ) : icon ? (
        <ButtonWithIconAndText
          onClick={funcOnClick}
          bgColor={buttonProp.bgColor}
          color={buttonProp.color}
          type={type}
        >
          <BasicImg src={buttonProp.src} />
          {message ? message : null}
        </ButtonWithIconAndText>
      ) : (
        <ButtonOnlyText
          onClick={funcOnClick}
          bgColor={buttonProp.bgColor}
          color={buttonProp.color}
          type={type}
        ></ButtonOnlyText>
      )}
    </>
  );
  // <>
  // {
  /* {icon ? (
        buttonProp.src === switchOff || buttonProp.src === switchOn ? (
          <BasicButton
            type={type}
            link={true}
            onClick={funcOnClick}
            bgColor={buttonProp.bgColor}
            sidebar={sidebar}
          >
            <BasicImg src={buttonProp.src} smartView={smartView} />
            {message}
          </BasicButton>
        ) : (
          <BasicButton
            type={type}
            link={false}
            onClick={funcOnClick}
            bgColor={buttonProp.bgColor}
            sidebar={sidebar}
          >
            <BasicImg src={buttonProp.src} smartView={smartView} />
            {!smartView ? message : null}
          </BasicButton>
        )
      ) : (
        <BasicButton
          type={type}
          link={true}
          onClick={funcOnClick}
          bgColor={buttonProp.bgColor}
          sidebar={sidebar}
        >
          {message}
        </BasicButton>
      )}
    </> */
};
export default Button;
