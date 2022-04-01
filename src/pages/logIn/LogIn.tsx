import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { SmartphoneView } from "../../App";
import Button from "../../components/button/Button";
import {
  FormStyled,
  FormWrapper,
  InputStyled,
  LabelStyled,
  SingleInputStyled,
} from "./Login.style";
const LogIn = () => {
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;
  const { theme } = context;
  const { themeChoose, themePink, themeColored } = theme;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      age: Yup.number().min(0, "Min value 0.").max(110, "Max value 110."),
    }),
    onSubmit: (values) => {
      setContext({
        ...context,
        user: {
          userName: context.user.userName,
          password: context.user.password,
          lastName: values.lastName,
          firstName: values.firstName,
          email: values.email,
          age: values.age,
          isLogged: true,
        },
      });
      // emailjs.send(
      //   "service_pfvk0n3",
      //   "template_qyqaw7e",
      //   {
      //     to_name: `${formik.values.firstName} ${formik.values.lastName}`,
      //     from_name: "Alice",
      //     to_email: formik.values.email,
      //     message: `Benvenuto ${formik.values.firstName} ${formik.values.lastName} ti ho iscritto alla newsletter con la mail che mi hai
      //     dato ${formik.values.email} per ricordarti ogni giorno, più volte al giorno, che ci vediamo il nuovo 7 dicembre aka il 2 aprile`,
      //   },
      //   "I-W8POMgHHcLJq29c"
      // );
    },
  });
  return (
    <>
      <FormWrapper>
        <h1>Login form</h1>
        <FormStyled onSubmit={formik.handleSubmit}>
          <SingleInputStyled>
            <LabelStyled color="black" htmlFor="firstName">
              First Name
            </LabelStyled>
            <InputStyled
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <LabelStyled
                color={themeChoose ? themePink?.c2 : themeColored?.c2}
              >
                {formik.errors.firstName}
              </LabelStyled>
            ) : null}
          </SingleInputStyled>
          <SingleInputStyled>
            <LabelStyled color="black" htmlFor="lastName">
              Last Name
            </LabelStyled>
            <InputStyled
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <LabelStyled
                color={themeChoose ? themePink?.c2 : themeColored?.c2}
              >
                {formik.errors.lastName}
              </LabelStyled>
            ) : null}
          </SingleInputStyled>
          <SingleInputStyled>
            <LabelStyled color="black" htmlFor="email">
              Email Address
            </LabelStyled>
            <InputStyled
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <LabelStyled
                color={themeChoose ? themePink?.c2 : themeColored?.c2}
              >
                {formik.errors.email}
              </LabelStyled>
            ) : null}
          </SingleInputStyled>
          <SingleInputStyled>
            {formik.values.firstName ? (
              <>
                <LabelStyled color="black" htmlFor="age">
                  Insert Age
                </LabelStyled>
                <InputStyled
                  id="age"
                  name="age"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.values.age && formik.errors.age ? (
                  <LabelStyled
                    color={themeChoose ? themePink?.c2 : themeColored?.c2}
                  >
                    {formik.errors.age}
                  </LabelStyled>
                ) : null}
              </>
            ) : null}
          </SingleInputStyled>
          <Button type="submit" icon="login" message="Login"></Button>
        </FormStyled>
      </FormWrapper>
    </>
  );
};
export default LogIn;
