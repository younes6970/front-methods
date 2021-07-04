import LoginFormik from "./LoginForm";
import { requestPostLogin } from "../../request";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const { push } = useRouter();
  const requestLogin = (values, setSubmitting) => {
    requestPostLogin(values)
      .then((data) => {
        const {
          data: { token },
        } = data;
        localStorage.setItem("token", `Bearer ${token}`);
        setSubmitting(false);
        push("/sample/lists");
      })
      .catch((err) => {
        setSubmitting(false);
      });
  };
  return (
    <>
      <LoginFormik onPost={requestLogin} />
    </>
  );
};
export default Login;
