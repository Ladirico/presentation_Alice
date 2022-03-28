import { useContext } from "react";
import { SmartphoneView } from "../../App";
import { PageRouteWrapper } from "./PageRoute.style";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";

const PageRoute = () => {
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { themePink, themeColored, themeChoose } = context;

  return (
    <PageRouteWrapper bgColor={themeChoose ? themePink?.c4 : themeColored?.c4}>
      {themeChoose ? (
        <>wewe</>
      ) : (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route path="/topics" element={<Home />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </Router>
      )}
    </PageRouteWrapper>
  );
};
export default PageRoute;
