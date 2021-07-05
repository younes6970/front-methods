import React, { useEffect, useState } from "react";
import { requestGetLists } from "../request";
import Loading from "../../ui_component/loading/Loading";
import BoxList from "./boxList/BoxList";
import { Div } from "../../../styles/styles";
import methods from "../../../confing/methods";

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const getLists = (page) => {
    const params = {
      page,
    };
    setIsLoad(true);
    requestGetLists(params).then((result) => {
      const { data } = result;
      setLists(data);
      setIsLoad(false);
    });
  };
  const handlePage = (page) => {
    console.log(page);
  };
  useEffect(() => {
    getLists(1);
  }, []);
  return (
    <Div base dir={"column"} content={"center"} item={"center"}>
      <Div h={"510px"} w={"100%"} m={"30px 0"}>{isLoad ? <Loading /> : <BoxList lists={lists} />}</Div>
      <div>
        <button>{methods.convertToPersian(1)}</button>
        <button>{methods.convertToPersian(2)}</button>
        <button>{methods.convertToPersian(3)}</button>
      </div>
    </Div>
  );
};
export default Lists;
