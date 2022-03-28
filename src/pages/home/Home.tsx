import { useContext } from "react";
import { SmartphoneView } from "../../App";
import Button from "../../components/button/button";

const Home = () => {
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { firstName, lastName, email } = context;
  console.log(context);

  return (
    <div>
      Benvenuto {firstName} {lastName} sei una grande testa di cazzo e per
      ricordartelo ti abbiamo iscritto alla newsletter con la mail che ci hai
      dato {email} per ricordarti ogni giorno, più volte al giorno, quanto ci
      stai sui coglioni
      <Button
        funcOnClick={() => {
          setContext({ ...context, isLogged: false });
        }}
        icon="back"
        message="sloggati coglione"
      />
    </div>
  );
};
export default Home;
