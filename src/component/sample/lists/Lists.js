import { useEffect } from "react";
import { requestGetLists } from "../request";

const Lists = () => {
  const getLists = (page) => {
    const params = {
      page,
    };
    requestGetLists(params).then((data) => {
      console.log("data is", data);
    });
  };
  useEffect(() => {
    getLists(1);
  }, []);
  return <h1>lists</h1>;
};
export default Lists;
