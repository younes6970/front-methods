import { Copy, Div, Http } from "../../styles/styles";
import { font16 } from "../../styles/color/js/font";
import { text } from "../../confing/text";
import Filed from "./component/filed/Filed";
import Valid from "./component/valid/Valid";
import styles from "./styles/validation.module.scss";
const Validation = () => {
  return (
    <Div base m={"40px 0 30px"} dir={"column"}>
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
          <Div ltr m={"10px"}>
            <Filed item={"username"} />
            <Valid
              value={"not.isEmpty.isLength({ min: 4, max: 14 }).isEnglish."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"password"} />
            <Valid value={"not.isEmpty.have(string + number)."} />
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
              value={"not.isEmpty.isLength({ min: 4, max: 14 }).isEnglish."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"name"} />
            <Valid value={"not.isEmpty.isLength({ max: 30 })."} />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"code"} />
            <Valid
              value={"not.isEmpty.isNumeric.isLength({ min: 4, max: 4 })."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"age"} />
            <Valid
              value={"not.isEmpty.isNumeric.isLength({ min: 2, max: 3 })."}
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
              value={"not.isEmpty.isLength({ min: 4, max: 14 }).isEnglish."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"name"} />
            <Valid value={"not.isEmpty.isLength({ max: 30 })."} />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"code"} />
            <Valid
              value={"not.isEmpty.isNumeric.isLength({ min: 4, max: 4 })."}
            />
          </Div>
          <Div ltr m={"10px"}>
            <Filed item={"age"} />
            <Valid
              value={"not.isEmpty.isNumeric.isLength({ min: 2, max: 3 })."}
            />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
export default Validation;
