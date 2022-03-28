import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { SmartphoneView } from "../../App";
const LogIn = () => {
  const starterContext = useContext(SmartphoneView);
  const { context, setContext } = starterContext;

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
      age: Yup.number()
        .integer()
        .default(0)
        .test("non ho capito", "troppo lungo", (val) => val <= 110), // comment out this line and validation works
    }),
    onSubmit: (values) => {
      setContext({
        ...context,
        lastName: values.lastName,
        firstName: values.firstName,
        email: values.email,
        age: values.age,
        isLogged: true,
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <br />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <br />
      <br />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />
      <br />
      {formik.values.firstName ? (
        <>
          <label htmlFor="age">Insert Age</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age ? (
            <div>{formik.errors.age}</div>
          ) : null}
          <br />
          <br />
        </>
      ) : (
        <></>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};
export default LogIn;
