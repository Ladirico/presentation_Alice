import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SmartphoneView } from "../../App";
import useAxiosCall from "../hooks/useAxiosCall";
import { SidebarWrapper } from "./Sidebar.styles";

const Sidebar = () => {
  const starterContext = useContext(SmartphoneView);
  const { context } = starterContext;
  const { smartView, openSidebar, user, theme } = context;
  const { isLogged } = user;
  const { themePink, themeColored, themeChoose } = theme;
  const ciao = useAxiosCall("https://jsonplaceholder.typicode.com/users");
  console.log(ciao);

  return (
    <>
      {!smartView ? (
        <SidebarWrapper
          showSidebar={openSidebar}
          smartView={smartView}
          bgColor={themeChoose ? themePink?.c2 : themeColored?.c2}
        >
          {isLogged ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
            </>
          ) : null}
        </SidebarWrapper>
      ) : openSidebar ? (
        <SidebarWrapper
          showSidebar={openSidebar}
          smartView={smartView}
          bgColor={themeChoose ? themePink?.c2 : themeColored?.c2}
        >
          {isLogged ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
            </>
          ) : null}
        </SidebarWrapper>
      ) : null}
    </>
  );
};
export default Sidebar;
