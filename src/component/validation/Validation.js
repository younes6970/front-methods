import { Copy, Div, Http } from "../../styles/styles";
import { font16 } from "../../styles/color/js/font";
import { text } from "../../confing/text";
import PropTypes from "prop-types";
import Filed from "./component/filed/Filed";
import Valid from "./component/valid/Valid";
const Validation = () => {
  return (
    <Div base m={"40px 0 30px"}>
      <Div dir={"column"} p={"20px"} content={"flex-end"} item={"end"}>
        <Copy m={"0 0 10px"} font={font16}>
          <Http>{text.post}</Http>:<Http>{text.postSimple}</Http>
        </Copy>
        <Div ltr m={"10px"}>
          <Filed item={"username"} />
          <Valid value={"not.isEmpty."} />
        </Div>
        <Div ltr m={"10px"}>
          <Filed item={"password"} />
          <Valid value={"not.isEmpty."} />
        </Div>
      </Div>
    </Div>
  );
};
export default Validation;
