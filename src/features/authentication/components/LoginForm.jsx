import { Link } from "react-router-dom";

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.emailOrPhone) {
    errors.emailOrPhone = "Required";
  }
  if (!values.password) {
    errors.password = "Password cannot be empty";
  }
  return errors;
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <input
            onChange={formik.handleChange}
            type="text"
            name="emailOrPhone"
            id="emailOrPhone"
            placeholder="E-mail/ Phone Number"
            value={formik.values.emailOrPhone}
            onBlur={formik.handleBlur}
          />
          <p
            className={
              formik.touched.emailOrPhone && formik.errors.emailOrPhone
                ? "form--error form--error__active"
                : "form--error "
            }
          >
            {formik.errors.emailOrPhone}
          </p>
        </div>
        <div className="">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <p
            className={
              formik.touched.password && formik.errors.password
                ? "form--error form--error__active"
                : "form--error "
            }
          >
            {formik.errors.password}
          </p>
        </div>

        <p>
          <Link to="">Forgot Password?</Link>
        </p>
        <input type="submit" value="Login" className="btn" />
      </form>
    </>
  );
};

export default LoginForm;
