import { withFormik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../ui_component/textField/TextField";
import { useInput } from "../../../confing/hooks/useForm";
import { Div } from "../../../styles/styles";
import { Btn } from "../styles/styles";
import { useRouter } from "next/router";
import { colorDark } from "../../../styles/color/js/color";
import methods from "../../../confing/methods";

const UserForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setValues,
  setFieldValue,
  setFieldError,
  ...props
}) => {
  const [handleInput] = useInput();
  const { back } = useRouter();
  const handleBack = () => {
    back();
  };
  return (
    <Form>
      <TextField
        name={"name"}
        title={"نام"}
        onChange={(e) => handleInput(e, "name", values, setValues)}
        maxLength={"30"}
        type={"text"}
        placeholder={"نام خود را وارد کنید..."}
        value={values.name}
        error={errors.name}
        touched={touched.name}
      />
      <TextField
        name={"username"}
        title={"نام کاربری"}
        onChange={(e) => handleInput(e, "username", values, setValues)}
        maxLength={"30"}
        type={"text"}
        placeholder={"نام کاربری خود را وارد کنید..."}
        value={values.username}
        error={errors.username}
        touched={touched.username}
      />
      <TextField
        name={"age"}
        title={"سن"}
        onChange={(e) => handleInput(e, "age", values, setValues)}
        maxLength={"2"}
        type={"tel"}
        placeholder={"سن خود را وارد کنید..."}
        value={values.age}
        error={errors.age}
        touched={touched.age}
      />
      <TextField
        name={"code"}
        title={"کد"}
        onChange={(e) => handleInput(e, "code", values, setValues)}
        maxLength={"4"}
        type={"tel"}
        placeholder={"کد خود را وارد کنید..."}
        value={values.code}
        error={errors.code}
        touched={touched.code}
      />
      <Div>
        <Btn
          bg={colorDark}
          m={"0 0 0 10px"}
          onClick={handleBack}
          disabled={isSubmitting}
          type={"button"}
        >
          برگشت
        </Btn>
        <Btn m={"0 10px 0 0"} disabled={isSubmitting} type={"submit"}>
          ثبت
        </Btn>
      </Div>
    </Form>
  );
};

const UserFormik = withFormik({
  mapPropsToValues({ edit }) {
    return {
      id: edit.id,
      name: edit?.name ?? "",
      username: edit?.username ?? "",
      age: edit?.age ?? 0,
      code: edit?.code ?? 1111,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("این فیلد الزامی است."),
    username: Yup.string()
      .required("این فیلد الزامی است.")
      .min(4, "کمتر از ٤ کارکتر نباشد.")
      .test("username", "از حروف انگلیسی استفاده شود.", (value) => {
        if (methods.isEnglish(value)) return true;
        return false;
      }),
    age: Yup.number().required().required("این فیلد الزامی است."),
    code: Yup.number().required().required("این فیلد الزامی است."),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onEdit(values, setSubmitting);
  },
})(UserForm);
export default UserFormik;
