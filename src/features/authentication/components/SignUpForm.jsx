import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password cannot be empty";
  }
  if (!values.phone) {
    errors.phone = "required";
  }
  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      referral: "",
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
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p
            className={
              formik.touched.email && formik.errors.email
                ? "form--error form--error__active"
                : "form--error "
            }
          >
            {formik.errors.email}
          </p>
        </div>
        <div className="">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p
            className={
              formik.touched.phone && formik.errors.phone
                ? "form--error form--error__active"
                : "form--error "
            }
          >
            {formik.errors.phone}
          </p>
        </div>
        <div className="">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
        <p className="password-requirement">
          At least 8 characters with lower case, upper case, a number and a
          special character
        </p>
        <div className="">
          <input
            type="text"
            name="referral"
            id="referral"
            placeholder="Referral Code (Optional)"
            value={formik.values.referral}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="policy">
          <p>
            By registering you agree to Renager's <span>Terms of Uses </span>
            and <span>Privacy Policy</span>
          </p>
        </div>
        <input type="submit" value="Sign up" className="btn" />
      </form>
    </>
  );
};

export default SignUpForm;
