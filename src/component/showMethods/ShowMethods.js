import { Div, P } from "../../styles/styles";
import PostSimple from "./httpComponent/PostSimple";
import PostPro from "./httpComponent/PostPro";
import GetParams from "./httpComponent/GetParams";
import GetUrl from "./httpComponent/GetUrl";
import PostNew from "./httpComponent/PostNew";
import PostUpdate from "./httpComponent/PostUpdate";
import PutUpdate from "./httpComponent/PutUpdate";
import DeleteParams from "./httpComponent/DeleteParams";
import DeleteId from "./httpComponent/DeleteId";
import { colorDark } from "../../styles/color/js/color";
import { txtShowMethods } from "./text";
import { RADIUS } from "../../styles/color/js/styles";
import GetUserParams from "./httpComponent/GetUserParams";
import GetUserUrl from "./httpComponent/GetUserUrl";

const ShowMethods = () => {
  return (
    <Div base dir={"column"} m={"40px 0 30px"} p={"0 10px"}>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"space-between"}
        m={"0 0 20px"}
        rpvBox
      >
        <PostSimple />
        <PostPro />
      </Div>
      <P
        bg={`${colorDark}44`}
        p={"5px 20px"}
        m={"10px auto 30px"}
        radius={RADIUS}
        rpvBox
      >
        {txtShowMethods.token}
      </P>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"space-between"}
        m={"0 0 20px"}
        rpvBox
      >
        <GetParams />
        <GetUrl />
      </Div>
      <Div
        w={"100%"}
        dir={"row"}
        item={"center"}
        content={"space-between"}
        m={"0 0 20px"}
        rpvBox
      >
        <GetUserParams />
        <GetUserUrl />
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
        rpvBox
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
        rpvBox
      >
        <DeleteParams />
        <DeleteId />
      </Div>
    </Div>
  );
};
export default ShowMethods;
