import { useContext } from "react";
import { SmartphoneView } from "../../App";
import Button from "../button/button";
import { InsideNavbar, NavbarWrapper } from "./Navbar.styles";

const Navbar = () => {
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { smartView, openSidebar, themePink, themeColored, themeChoose } =
    context;
  return (
    <NavbarWrapper
      smartView={smartView}
      bgColor={themeChoose ? themePink?.c3 : themeColored?.c3}
    >
      <InsideNavbar
        smartView={smartView}
        bgColor={themeChoose ? themePink?.c3 : themeColored?.c3}
      >
        {!smartView ? (
          <>
            <Button funcOnClick={() => console.log("dioca")} message="weeee" />
          </>
        ) : (
          <>
            <Button
              funcOnClick={() =>
                setContext(
                  openSidebar
                    ? {
                        ...context,
                        openSidebar: false,
                      }
                    : {
                        ...context,
                        openSidebar: true,
                      }
                )
              }
              icon="menu"
            />
          </>
        )}
        <Button
          icon="switch"
          funcOnClick={() =>
            setContext(
              themeChoose
                ? { ...context, themeChoose: false }
                : { ...context, themeChoose: true }
            )
          }
        />
      </InsideNavbar>
    </NavbarWrapper>
  );
};
export default Navbar;
