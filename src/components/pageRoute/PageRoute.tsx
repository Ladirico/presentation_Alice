import { useContext } from "react";
import { SmartphoneView } from "../../App";
import { PageRouteWrapper } from "./PageRoute.style";

const PageRoute = () => {
  const starterContext = useContext(SmartphoneView);
  const { context } = starterContext;
  const { openSidebar, themePink, themeColored, themeChoose } = context;
  return (
    <>
      {openSidebar ? (
        <PageRouteWrapper
          bgColor={themeChoose ? themePink?.c4 : themeColored?.c4}
        >
          PageRouteWrapper
        </PageRouteWrapper>
      ) : (
        <PageRouteWrapper
          bgColor={themeChoose ? themePink?.c4 : themeColored?.c4}
        >
          PageRouteWrapper
        </PageRouteWrapper>
      )}
    </>
  );
};
export default PageRoute;
