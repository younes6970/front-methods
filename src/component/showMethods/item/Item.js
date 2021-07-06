import {
  Box,
  Copy,
  Div,
  Green,
  Http,
  Ide,
  Orange,
  P,
  Purple,
  Withe,
} from "../../../styles/styles";
import { font16 } from "../../../styles/color/js/font";
import PropTypes from "prop-types";
import BtnValidation from "../../validation/component/btnValidation/BtnValidation";

const Item = ({
  url,
  des,
  children,
  method,
  http,
  post,
  full,
  h,
  isValidation,
}) => {
  return (
    <Box w={full ? "100%" : "48%"} h={h}>
      <Div dir={"column"} w={"100%"} p={"20px 25px"}>
        <Copy font={font16}>
          <Http>{method}</Http>:<Http>{url}</Http>
        </Copy>
        <Div w={"100%"} item={"center"} content={"space-between"} m={"25px 0 0"}>
          <P m={"0"}>>>> {des}</P>
          {isValidation && <BtnValidation />}
        </Div>
      </Div>
      <Ide>
        <code>
          <Orange>fetch</Orange>
          <Withe>)</Withe>
          <Green>"</Green>
          <Green>{!!http ? http : url}</Green>
          <Green>"</Green>
          <Orange>,</Orange>
          <Withe>{"}"}</Withe>
          <br />
          <Purple>method</Purple>
          <Withe>:</Withe>
          <Green>'{method}'</Green>
          <Orange>,</Orange>
          <br />
          <Purple>headers</Purple>
          <Withe>:</Withe>
          <Withe>}</Withe>
          <br />
          <Green p>'Accept'</Green>
          <Withe>:</Withe>
          <Green>'application/json'</Green>
          <Orange>,</Orange>
          <br />
          <Green p>'Content-Type'</Green>
          <Withe>:</Withe>
          <Green>'application/json'</Green>
          <Orange>,</Orange>
          <br />
          {!post && (
            <>
              <Green p>'Authorization'</Green>
              <Withe>:</Withe>
              <Green>{"  Bearer `"}</Green>
              <Withe p>$</Withe>
              <Withe m>}</Withe>
              <Withe m>token</Withe>
              <Withe m>{"{"}</Withe>
              <Green>`</Green>
              <Orange>,</Orange>
              <br />
            </>
          )}
          <Withe>{"{"}</Withe>
          <Orange>,</Orange>
          <br />
          {children}
          <Withe m>{"{"}</Withe>
          <Withe m>(</Withe>
          <Withe m>.</Withe>
          <Orange m>then</Orange>
          <Withe>)</Withe>
          <Withe>res</Withe>
          <Withe>{"<="}</Withe>
          <Withe m>res</Withe>
          <Withe m>.</Withe>
          <Orange m>json</Orange>
          <Withe m>()</Withe>
          <Withe>(</Withe>
        </code>
      </Ide>
    </Box>
  );
};
export default Item;
Item.propTypes = {
  url: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  http: PropTypes.string,
  children: PropTypes.element,
  post: PropTypes.bool,
  full: PropTypes.bool,
  h: PropTypes.number.isRequired,
  isValidation: PropTypes.bool,
};
