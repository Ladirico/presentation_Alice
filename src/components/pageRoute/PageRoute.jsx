import { useContext } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
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
      {!isLogged ? (
        <LogIn />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<LogIn />} />
            <Route path="users" element={<Home />} />
          </Routes>
        </>
      )}
    </PageRouteWrapper>
  );
};
export default PageRoute;
