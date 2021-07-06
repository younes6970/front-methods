import {Copy, Div, Http, P} from "../../styles/styles";
import { font16 } from "../../styles/color/js/font";
import { text } from "../../confing/text";
import Filed from "./component/filed/Filed";
import Valid from "./component/valid/Valid";
import styles from "./styles/validation.module.scss";
import {colorDark} from "../../styles/color/js/color";
import {txtValidation} from "./text";
import {RADIUS} from "../../styles/color/js/styles";
const Validation = () => {
  return (
    <Div base m={"40px 0 30px"} dir={"column"}>
      <P bg={`${colorDark}44`} p={"5px 20px"} m={"0 auto 35px"} radius={RADIUS}>{txtValidation.textValidation}</P>
      <Div w={"100%"} m={"10px 0"} content={"space-evenly"} item={"center"}>
        <Div
          dir={"column"}
          p={"20px"}
          content={"flex-end"}
          item={"end"}
          className={styles.boxBorder}
          w={"542px"}
        >
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
        <Div
          dir={"column"}
          p={"20px"}
          content={"flex-end"}
          item={"end"}
          className={styles.boxBorder}
          w={"542px"}
        >
          <Copy m={"0 0 10px"} font={font16}>
            <Http>{text.post}</Http>:<Http>{text.postPro}</Http>
          </Copy>
          <Div ltr m={"10px 0 10px"}>
            <Filed item={"username"} />
            <Valid
              value={"isLength({min:4,max:14}).isEnglish."}
            />
          </Div>
          <Div ltr m={"10px 0 10px"}>
            <Filed item={"password"} />
            <Valid value={"isLength({min:8,max:30}).isEnglish+string(Aa)+number."} />
          </Div>
        </Div>
      </Div>
      <Div w={"100%"} m={"10px 0"} content={"space-evenly"} item={"center"}>
        <Div
          dir={"column"}
          p={"20px"}
          content={"flex-end"}
          item={"end"}
          className={styles.boxBorder}
          w={"542px"}
        >
          <Copy m={"0 0 10px"} font={font16}>
            <Http>{text.post}</Http>:<Http>{text.postList}</Http>
          </Copy>
          <Div ltr m={"10px"}>
            <Filed item={"username"} />
            <Valid
              value={"isLength({min:4,max:14}).isEnglish."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"name"} />
            <Valid value={"isLength({max:30})."} />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"code"} />
            <Valid
              value={"isNumeric.isLength({min:4,max:4})."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"age"} />
            <Valid
              value={"isNumeric.isLength({min:2,max:3})."}
            />
          </Div>
        </Div>
        <Div
          dir={"column"}
          p={"20px"}
          content={"flex-end"}
          item={"end"}
          className={styles.boxBorder}
          w={"542px"}
        >
          <Copy m={"0 0 10px"} font={font16}>
            <Http>{text.put}</Http>:<Http>{text.postList}</Http>
          </Copy>
          <Div ltr m={"10px"}>
            <Filed item={"username"} />
            <Valid
              value={"isLength({min:4,max:14}).isEnglish."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"name"} />
            <Valid value={"isLength({max:30})."} />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"code"} />
            <Valid
              value={"isNumeric.isLength({min:4,max:4})."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"age"} />
            <Valid
              value={"isNumeric.isLength({min:2,max:3})."}
            />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
export default Validation;
