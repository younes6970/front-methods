import { withFormik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../../ui_component/textField/TextField";
import { useInput } from "../../../../confing/hooks/useForm";
import { Center } from "../../../ui_component/textField/styles";
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
          maxLength={30}
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
  validationSchema: Yup.object().shape({}),
  handleSubmit: (values, { props, setSubmitting }) => {},
})(LoginForm)

export default LoginFormik;
