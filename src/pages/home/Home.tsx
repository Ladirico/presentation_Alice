import { useContext } from "react";
import { SmartphoneView } from "../../App";
import Button from "../../components/button/button";

const Home = () => {
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { user } = context;
  const { firstName, lastName, email, isLogged } = user;

  return (
    <div>
      Benvenuto {firstName} {lastName} sei una grande testa di cazzo e per
      ricordartelo ti abbiamo iscritto alla newsletter con la mail che ci hai
      dato {email} per ricordarti ogni giorno, più volte al giorno, quanto ci
      stai sui coglioni
      <Button
        funcOnClick={() =>
          setContext({
            ...context,
            user: {
              userName: context.user.userName,
              password: context.user.password,
              email: context.user.email,
              firstName: context.user.firstName,
              lastName: context.user.lastName,
              age: context.user.age,
              isLogged: isLogged ? false : context.user.isLogged,
            },
          })
        }
        icon="back"
        message="sloggati"
      />
    </div>
  );
};
export default Home;
