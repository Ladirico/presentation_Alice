import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "./components/hooks/customHook";
import SinglePage from "./components/singlePage/SinglePage";
import { InterfaceSmartphoneView, InterfaceTipo } from "./types/types";
export const SmartphoneView = createContext<InterfaceTipo | null>(null);
const App = () => {
  const { width } = useWindowDimensions();
  const [context, setContext] = useState<InterfaceSmartphoneView>({
    smartView: false,
    openSidebar: false,
  });

  useEffect(() => {
    width <= 700
      ? setContext({ ...context, smartView: true })
      : setContext({ ...context, smartView: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  console.log(window);
  return (
    <SmartphoneView.Provider value={{ context, setContext }}>
      <SinglePage />
    </SmartphoneView.Provider>
  );
};
export default App;
