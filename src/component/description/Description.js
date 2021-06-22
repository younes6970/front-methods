import { Div, P } from "../../styles/styles";
import { txtDescription } from "./text";
import { font20 } from "../../styles/color/js/font";
import { colorReq, colorRes } from "../../styles/color/js/color";
import { useRouter } from "next/router";

const Description = () => {
  const { pathname } = useRouter();
  return (
    <Div w={"100%"} base dir={"column"} item={"center"}>
      <P m={"18px 0"} font={font20}>
        {txtDescription.description}
      </P>
      <P color={colorRes}>
        <P as={"span"} span m={"0 5px"} color={colorReq}>
          [
        </P>
        <>
          {pathname.includes("/validation") ? (
            txtDescription.validate
          ) : (
            <>
              {" "}
              {txtDescription.get}
              <P as={"span"} span m={"0 4px"} color={colorReq}>
                ,
              </P>
              {txtDescription.post}
              <P as={"span"} span m={"0 4px"} color={colorReq}>
                ,
              </P>
              {txtDescription.delete}
              <P as={"span"} span m={"0 4px"} color={colorReq}>
                ,
              </P>
              {txtDescription.put}
            </>
          )}
        </>
        <P as={"span"} span m={"0 5px"} color={colorReq}>
          ]
        </P>
      </P>
    </Div>
  );
};
export default Description;
