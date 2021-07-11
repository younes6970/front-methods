import Item from "../item/Item";
import { txtShowMethods } from "../text";
import { Blue, Green, Orange, Purple, Withe } from "../../../styles/styles";

const PostNew = () => {
  return (
    <Item
      url={txtShowMethods.listUrl}
      des={txtShowMethods.listNew}
      method={txtShowMethods.proMethod}
      full
      isValidation
      h={620}
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
        name
      </Purple>
      <Withe>:</Withe>
      <Green>"younes"</Green>
      <Orange m>,</Orange>
      <br />
      <Purple p m>
        code
      </Purple>
      <Withe>:</Withe>
      <Blue>6969</Blue>
      <Orange m>,</Orange>
      <br />
      <Purple p m>
        age
      </Purple>
      <Withe>:</Withe>
      <Blue>30</Blue>
      <Orange m>,</Orange>
      <br />
      <Withe m>
        {"({"}
      </Withe>
      <Orange>,</Orange>
      <br />
    </Item>
  );
};
export default PostNew;
