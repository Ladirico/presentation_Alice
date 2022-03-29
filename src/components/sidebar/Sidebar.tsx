import { useContext } from "react";
import { SmartphoneView } from "../../App";
import { SidebarWrapper } from "./Sidebar.styles";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const starterContext = useContext(SmartphoneView);
  const { context } = starterContext;
  const {
    smartView,
    openSidebar,
    themePink,
    themeColored,
    themeChoose,
    isLogged,
  } = context;
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
          ) : (
            <></>
          )}
        </SidebarWrapper>
      ) : openSidebar && isLogged ? (
        <SidebarWrapper
          showSidebar={openSidebar}
          smartView={smartView}
          bgColor={themeChoose ? themePink?.c2 : themeColored?.c2}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </SidebarWrapper>
      ) : (
        <></>
      )}
    </>
  );
};
export default Sidebar;
