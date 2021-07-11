import React, { useEffect, useState } from "react";
import { requestGetLists } from "../request";
import Loading from "../../ui_component/loading/Loading";
import BoxList from "./boxList/BoxList";
import { Div } from "../../../styles/styles";
import methods from "../../../confing/methods";
import { useRouter } from "next/router";
import { ItemPage, Page } from "../styles/styles";
import { toast } from "react-toastify";
import Http from "../../ui_component/http/Http";
import { txtShowMethods } from "../../showMethods/text";

const Lists = () => {
  const {
    push,
    query: { page },
  } = useRouter();

  const [lists, setLists] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const getLists = (page = 1) => {
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
  const handlePage = (x) => {
    push(`?page=${x}`);
    +page !== +x && getLists(x);
  };
  const handleQuery = () => {
    !!!methods.coverTypeof(page) && push(`?page=${1}`);
  };
  const handleDelete = (id) => {
    const idx = lists.findIndex((list) => +list.id === +id);
    const newValue = [...lists];
    newValue.splice(idx, 1);
    setLists(newValue);
    toast.success("با موفقیت پاک شد");
  };
  useEffect(() => {
    handleQuery();
    getLists(page);
  }, []);
  return (
    <Div base dir={"column"} content={"center"} item={"center"}>
      <Http url={txtShowMethods.listUrlParams} http={txtShowMethods.get} />
      <Http url={txtShowMethods.listDeleteUrl} http={txtShowMethods.delete} />
      <Div h={"585px"} w={"100%"} m={"30px 0"}>
        {isLoad ? (
          <Loading />
        ) : (
          <BoxList lists={lists} onDelete={handleDelete} />
        )}
      </Div>
      <Page>
        <ItemPage active={+page === 1} onClick={() => handlePage(1)}>
          {methods.convertToPersian(1)}
        </ItemPage>
        <ItemPage active={+page === 2} onClick={() => handlePage(2)}>
          {methods.convertToPersian(2)}
        </ItemPage>
        <ItemPage active={+page === 3} onClick={() => handlePage(3)}>
          {methods.convertToPersian(3)}
        </ItemPage>
      </Page>
    </Div>
  );
};
export default Lists;
