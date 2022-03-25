import { useContext } from "react";
import { SmartphoneView } from "../../App";
import { PageRouteWrapper } from "./PageRoute.style";

const PageRoute = () => {
  const contextResult = useContext(SmartphoneView);
  return (
    <>
      {contextResult?.context.openSidebar ? (
        <PageRouteWrapper>PageRouteWrapper</PageRouteWrapper>
      ) : (
        <PageRouteWrapper>PageRouteWrapper</PageRouteWrapper>
      )}
    </>
  );
};
export default PageRoute;
