import Item from "../item/Item";
import { txtShowMethods } from "../text";
import { Div } from "../../../styles/styles";

const GetUrl = () => {
  return (
    <Item
      url={txtShowMethods.listUrlId}
      des={txtShowMethods.listTextParams}
      method={txtShowMethods.get}
      http={txtShowMethods.listHttpId}
      h={510}
    />
  );
};

export default GetUrl;
