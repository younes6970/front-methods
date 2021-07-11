import LoginFormik from "./LoginForm";
import { requestPostLogin } from "../../request";
import { useRouter } from "next/router";
import Http from "../../../ui_component/http/Http";
import { txtShowMethods } from "../../../showMethods/text";

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
      <Http url={txtShowMethods.proUrl} http={txtShowMethods.proMethod} />
      <LoginFormik onPost={requestLogin} />
    </>
  );
};
export default Login;
