import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "./components/hooks/customHook";
import SinglePage from "./components/singlePage/SinglePage";
import { InterfaceSmartphoneView, InterfaceTipo } from "./types/types";

export const SmartphoneView = createContext<InterfaceTipo>(null!);

const App = () => {
  const { width } = useWindowDimensions();
  const [context, setContext] = useState<InterfaceSmartphoneView>({
    smartView: false,
    openSidebar: false,
    themePink: {
      c1: "#E032FC",
      c2: "#972DE0",
      c3: "#3f2772",
      c4: "#FA3394",
    },
    themeColored: {
      c1: "#FFC66F",
      c2: "#2DC3E0",
      c3: "#3EF832",
      c4: "#9d19d1",
    },
    themeChoose: true,
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    width <= 600
      ? setContext({ ...context, smartView: true })
      : setContext({ ...context, smartView: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return (
    <SmartphoneView.Provider value={{ context, setContext }}>
      <SinglePage />
    </SmartphoneView.Provider>
  );
};
export default App;
