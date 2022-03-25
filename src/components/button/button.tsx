import { InterfaceButton, InterfaceButtonProp } from "../../types/types";
import { BasicButton, BasicImg } from "./button.style";
import { useEffect, useState } from "react";

import logo from "./../../logo.svg";
import menu from "./../../menu.png";

const Button = ({ icon, funcOnClick, message }: InterfaceButton) => {
  const [buttonProp, setButtonProp] = useState<InterfaceButtonProp>({
    src: "",
    bgColor: "",
  });
  useEffect(() => {
    switch (icon) {
      case "back":
        setButtonProp({
          src: logo,
          bgColor: "pink",
        });
        break;
      case "front":
        setButtonProp({
          src: logo,
          bgColor: "pink",
        });
        break;
      case "menu":
        setButtonProp({
          src: menu,
          bgColor: "red",
        });
        break;
      default:
        setButtonProp({
          src: logo,
          bgColor: "pink",
        });
    }
  }, [icon]);
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
