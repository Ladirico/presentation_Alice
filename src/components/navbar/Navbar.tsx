import { useContext } from "react";
import { SmartphoneView } from "../../App";
import Button from "../button/button";
import { InsideNavbar, NavbarWrapper } from "./Navbar.styles";

const Navbar = () => {
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { smartView, openSidebar, theme } = context;
  const { themeChoose, themeColored, themePink } = theme;
  console.log(openSidebar);
  return (
    <NavbarWrapper
      smartView={smartView}
      bgColor={themeChoose ? themePink?.c3 : themeColored?.c3}
    >
      <InsideNavbar
        smartView={smartView}
        bgColor={themeChoose ? themePink?.c3 : themeColored?.c3}
      >
        {smartView ? (
          <>
            <Button
              funcOnClick={() =>
                setContext(
                  openSidebar
                    ? { ...context, openSidebar: false }
                    : { ...context, openSidebar: true }
                )
              }
              icon="menu"
            />
          </>
        ) : null}
        <Button
          icon="switch"
          funcOnClick={() =>
            setContext({
              ...context,
              theme: {
                themePink: context.theme.themePink,
                themeChoose: themeChoose ? false : true,
                themeColored: context.theme.themeColored,
              },
            })
          }
        />
      </InsideNavbar>
    </NavbarWrapper>
  );
};
export default Navbar;
