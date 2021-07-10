import dynamic from "next/dynamic";
import Loading from "../../../../../component/ui_component/loading/Loading";
import useRedirect from "../../../../../confing/hooks/useRedirect";

const User = dynamic(
  () => import("../../../../../component/sample/user/User"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const PageUser = () => {
  const [isLoading] = useRedirect("/sample/login", false);
  return <>{isLoading ? <Loading /> : <User />}</>;
};
export default PageUser;
