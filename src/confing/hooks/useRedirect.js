import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useRedirect = (url , isToken) => {
  const { push } = useRouter();
  const [isRedirect, setIsRedirect] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!!token && isToken) {
      push(url);
    } else {
      if(!isToken && !!!token){
        push(url);
      }else {
        setIsRedirect(false);
      }
    }
  }, []);
  return [isRedirect];
};
export default useRedirect;
