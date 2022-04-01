import { useContext, useState } from "react";
import { SmartphoneView } from "../../App";
import Button from "../../components/button/Button";

const Home = () => {
  const [state, setState] = useState("");
  const [state1, setState1] = useState("");
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { user } = context;
  const { firstName, lastName, email, isLogged } = user;
  return (
    <div>
      <>
        <input type="text" onChange={(e) => setState(e.currentTarget.value)} />
        <label htmlFor="cars">Choose a car:</label>
        <select
          name="cars"
          id="cars"
          onChange={(e) => setState1(e.currentTarget.value)}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </>
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
