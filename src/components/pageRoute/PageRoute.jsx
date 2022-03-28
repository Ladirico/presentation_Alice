import { useContext } from "react";
import { SmartphoneView } from "../../App";
import Home from "../../pages/home/Home";
import LogIn from "../../pages/logIn/LogIn";
import { PageRouteWrapper } from "./PageRoute.style";

const PageRoute = () => {
  const starterContext = useContext(SmartphoneView);
  const { context } = starterContext;
  const { themePink, themeColored, themeChoose, isLogged } = context;

  return (
    <PageRouteWrapper bgColor={themeChoose ? themePink?.c4 : themeColored?.c4}>
      {!isLogged ? <LogIn /> : <Home />}
    </PageRouteWrapper>
  );
};
export default PageRoute;
