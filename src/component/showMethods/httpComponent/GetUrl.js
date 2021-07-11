import Item from "../item/Item";
import { txtShowMethods } from "../text";


const GetUrl = () => {

  return (
    <Item
      url={txtShowMethods.listUrlId}
      des={txtShowMethods.listTextParams}
      method={txtShowMethods.get}
      http={txtShowMethods.listHttpId}
      h={510}
      rpvH
    />
  );
};

export default GetUrl;
