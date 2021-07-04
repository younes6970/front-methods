import { withFormik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../../ui_component/textField/TextField";
import { useInput } from "../../../../confing/hooks/useForm";
import { Center } from "../../../ui_component/textField/styles";
import { Btn } from "../../styles/styles";
import methods from "../../../../confing/methods";
const LoginForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setValues,
  setFieldValue,
  handleSubmit,
  ...props
}) => {
  const [handleInput] = useInput();
  return (
    <Form className={"boxFormLogin"}>
      <Center>
        <TextField
          name={"username"}
          title={"نام کاربری"}
          onChange={(e) => handleInput(e, "username", values, setValues)}
          maxLength={15}
          type={"text"}
          placeholder={"نام کاریری خود را وارد کنید..."}
          value={values.username}
          error={errors.username}
          touched={touched.username}
        />
        <TextField
          name={"password"}
          title={"کلمه عبور"}
          onChange={(e) => handleInput(e, "password", values, setValues)}
          maxLength={14}
          type={"password"}
          placeholder={"رمز عبور خود را وارد کنید..."}
          value={values.password}
          touched={touched.password}
          error={errors.password}
        />
        <Btn type={"submit"} disabled={isSubmitting}>
          ورود
        </Btn>
      </Center>
    </Form>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("تام کاربری الزامی است.")
      .min(4, "کمتر از 4 کارکتر نباشد.")
      .test("username", "از خروف انگلیسی استفاده شود.", (value) => {
        if (methods.isEnglish(value)) return true;
        return false;
      }),
    password: Yup.string()
      .required("تام کلمه عبور الزامی است.")
      .test(
        "password",
        "کمتر از 8 کارکتر و از خروف کوجیک بزرگ اعذاد انگلیسی استفاده شود.",
        (value) => {
          if (methods.isPassword(value)) return true;
          return false;
        }
      ),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onPost(values, setSubmitting);
  },
})(LoginForm);

export default LoginFormik;
