import { InterfaceButton, InterfaceButtonProp } from "../../types/types";
import { BasicButton, BasicImg } from "./button.style";
import { useContext, useEffect, useState } from "react";

import logo from "./../../logo.svg";
import menu from "./../../menu.png";
import { SmartphoneView } from "../../App";

const Button = ({ icon, funcOnClick, message }: InterfaceButton) => {
  const starterContext = useContext(SmartphoneView);
  const { context } = starterContext;
  const { themePink, themeColored, themeChoose } = context;
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
        <BasicButton
          types={true}
          onClick={funcOnClick}
          bgColor={buttonProp.bgColor}
        >
          <BasicImg src={buttonProp.src} />
          {message}
        </BasicButton>
      ) : (
        <BasicButton
          types={false}
          onClick={funcOnClick}
          bgColor={buttonProp.bgColor}
        >
          {message}
        </BasicButton>
      )}
    </>
  );
};
export default Button;
