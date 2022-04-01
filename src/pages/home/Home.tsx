import { useContext, useState } from "react";
import { SmartphoneView } from "../../App";
import Button from "../../components/button/Button";

const Home = () => {
  const [state, setState] = useState("");
  const [state1, setState1] = useState("");
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { user } = context;
  const { firstName, email, isLogged } = user;
  return <div>benvenuto {firstName}</div>;
};
export default Home;
