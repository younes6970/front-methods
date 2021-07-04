import useRedirect from "../../../confing/hooks/useRedirect";

import dynamic from "next/dynamic";
import Loading from "../../../component/ui_component/loading/Loading";
const Lists = dynamic(() => import("../../../component/sample/lists/Lists"), {
  ssr: false,
  loading: () => <Loading />,
});
const PageList = () => {
  const [isLoading] = useRedirect("/sample/login", false);
  return <>{isLoading ? <Loading /> : <Lists />}</>;
};
export default PageList;
