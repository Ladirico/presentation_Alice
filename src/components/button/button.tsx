import { InterfaceButton, InterfaceButtonProp } from "../../types/types";
import { BasicButton, BasicImg } from "./button.style";
import { useContext, useEffect, useState } from "react";

import logo from "./../../logo.svg";
import menu from "./../../menu.png";
import switchOff from "./../../switchOff.png";
import switchOn from "./../../switchOn.png";
import { SmartphoneView } from "../../App";

const Button = ({ icon, funcOnClick, message, sidebar }: InterfaceButton) => {
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
      {icon ? (
        buttonProp.src === switchOff || buttonProp.src === switchOn ? (
          <BasicButton
            types={false}
            onClick={funcOnClick}
            bgColor={buttonProp.bgColor}
            sidebar={sidebar}
          >
            <BasicImg src={buttonProp.src} smartView={smartView} />
            {message}
          </BasicButton>
        ) : (
          <BasicButton
            types={true}
            onClick={funcOnClick}
            bgColor={buttonProp.bgColor}
            sidebar={sidebar}
          >
            <BasicImg src={buttonProp.src} smartView={smartView} />
            {message}
          </BasicButton>
        )
      ) : (
        <BasicButton
          types={false}
          onClick={funcOnClick}
          bgColor={buttonProp.bgColor}
          sidebar={sidebar}
        >
          {message}
        </BasicButton>
      )}
    </>
  );
};
export default Button;
