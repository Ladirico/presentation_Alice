import { useContext } from "react";
import { SmartphoneView } from "../../App";
import Button from "../button/button";
import { NavbarWrapper } from "./Navbar.styles";

const Navbar = () => {
  const contextResult = useContext(SmartphoneView);
  const smartView = contextResult?.context.smartView;
  return (
    <NavbarWrapper smartView={smartView}>
      {!smartView ? (
        <>
          <Button funcOnClick={() => console.log("dioca")} message="weeee" />
          <Button
            funcOnClick={() => console.log("other")}
            message="other"
            icon="back"
          />
        </>
      ) : (
        <>
          <Button
            funcOnClick={() =>
              contextResult?.setContext(
                contextResult.context.openSidebar
                  ? {
                      ...contextResult?.context,

                      openSidebar: false,
                    }
                  : {
                      ...contextResult?.context,
                      openSidebar: true,
                    }
              )
            }
            icon="menu"
          />
        </>
      )}
    </NavbarWrapper>
  );
};
export default Navbar;
