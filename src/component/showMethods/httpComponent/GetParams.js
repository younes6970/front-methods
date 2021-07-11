import Item from "../item/Item";
import { txtShowMethods } from "../text";
import { Blue, Orange, Purple, Withe } from "../../../styles/styles";

const GetParams = () => {
  return (
    <Item
      url={txtShowMethods.listUrlParams}
      des={txtShowMethods.listTextParams}
      method={txtShowMethods.get}
      h={510}
      rpvH
    >
      <Purple>Params</Purple>
      <Withe>:</Withe>
      <Withe>}</Withe>
      <br />
      <Purple p>page</Purple>
      <Withe>:</Withe>
      <Blue>1</Blue>
      <br />
      <Withe>{"{"}</Withe>
      <Orange>,</Orange>
      <br />
    </Item>
  );
};
export default GetParams;
