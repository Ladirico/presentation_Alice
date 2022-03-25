import { useContext } from "react";
import { SmartphoneView } from "../../App";
import { SidebarWrapper } from "./Sidebar.styles";

const Sidebar = () => {
  const starterContext = useContext(SmartphoneView);
  const { context } = starterContext;
  const { smartView, openSidebar, themePink, themeColored, themeChoose } =
    context;
  return (
    <SidebarWrapper
      showSidebar={openSidebar}
      smartView={smartView}
      bgColor={themeChoose ? themePink?.c2 : themeColored?.c2}
    />
  );
};
export default Sidebar;
