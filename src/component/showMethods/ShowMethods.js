import { Div, } from "../../styles/styles";
import PostSimple from "./httpComponent/PostSimple";
import PostPro from "./httpComponent/PostPro";
import GetParams from "./httpComponent/GetParams";
import GetUrl from "./httpComponent/GetUrl";
import PostNew from "./httpComponent/PostNew";
import PostUpdate from "./httpComponent/PostUpdate";
import PutUpdate from "./httpComponent/PutUpdate";
import DeleteParams from "./httpComponent/DeleteParams";
import DeleteId from "./httpComponent/DeleteId";

const ShowMethods = () => {
  return (
    <Div base dir={"column"} m={"40px 0 30px"}>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"space-between"}
        m={"0 0 20px"}
      >
        <PostSimple />
        <PostPro />
      </Div>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"space-between"}
        m={"0 0 20px"}
      >
        <GetParams />
        <GetUrl />
      </Div>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"flex-start"}
        m={"0 0 20px"}
      >
        <PostNew />
      </Div>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"space-between"}
        m={"0 0 20px"}
      >
        <PostUpdate />
        <PutUpdate />
      </Div>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"space-between"}
        m={"0 0 20px"}
      >
        <DeleteParams />
        <DeleteId />
      </Div>
    </Div>
  );
};
export default ShowMethods;
