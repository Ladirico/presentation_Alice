import { useContext } from "react";
import { SmartphoneView } from "../../App";
import { SidebarWrapper } from "./Sidebar.styles";

const Sidebar = () => {
  //commento di prova
  const context = useContext(SmartphoneView);
  const showSidebar = context?.context.openSidebar;
  const smartView = context?.context.smartView;
  return <SidebarWrapper showSidebar={showSidebar} smartView={smartView} />;
};
export default Sidebar;
