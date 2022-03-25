import { createContext, useEffect, useState } from "react";
import SinglePage from "./components/singlePage/SinglePage";
import { InterfaceSmartphoneView, InterfaceTipo } from "./types/types";
export const SmartphoneView = createContext<InterfaceTipo | null>(null);
const App = () => {
  const [context, setContext] = useState<InterfaceSmartphoneView>({
    smartView: false,
    openSidebar: false,
  });

  useEffect(() => {
    window.screen.width <= 700
      ? setContext({ smartView: true })
      : setContext({ smartView: false });
  }, []);
  return (
    <SmartphoneView.Provider value={{ context, setContext }}>
      <SinglePage />
    </SmartphoneView.Provider>
  );
};
export default App;
