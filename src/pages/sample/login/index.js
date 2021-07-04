import dynamic from "next/dynamic";
import useRedirect from "../../../confing/hooks/useRedirect";
import Loading from "../../../component/ui_component/loading/Loading";

const Login = dynamic(
  () => import("../../../component/sample/login/component/Login"),
  { ssr: false, loading: () => <Loading /> }
);

const PageLogin = () => {
  const [isLoading] = useRedirect("/sample/lists" , true);

  return <> {isLoading ? <Loading /> : <Login />}</>;
};
export default PageLogin;
