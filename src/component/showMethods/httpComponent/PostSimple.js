import Item from "../item/Item";
import { txtShowMethods } from "../text";
import { Div, Green, Orange, Purple, Withe } from "../../../styles/styles";

const PostSimple = () => {
  return (
    <Item
      url={txtShowMethods.simpleUrl}
      des={txtShowMethods.simpleText}
      method={txtShowMethods.simpleMethod}
      post
      isValidation
      h={520}
    >
      <Purple m>body</Purple>
      <Withe m>:</Withe> <Purple m>JSON</Purple>
      <Withe m>.</Withe>
      <Orange>stringify</Orange>
      <Withe m>{"})"}</Withe>
      <br />
      <Purple p m>
        username
      </Purple>
      <Withe>:</Withe>
      <Green>"younes6970"</Green>
      <Orange m>,</Orange>
      <br />
      <Purple p m>
        password
      </Purple>
      <Withe>:</Withe>
      <Green>"1234zxc"</Green>
      <Orange m>,</Orange>
      <br />
      <Withe p m>
        {"({"}
      </Withe>
      <Orange>,</Orange>
      <br />
    </Item>
  );
};
export default PostSimple;
