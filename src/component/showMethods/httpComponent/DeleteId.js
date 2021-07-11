import Item from "../item/Item";
import { txtShowMethods } from "../text";


const DeleteId = () => {

  return (
    <Item
      url={txtShowMethods.listDeleteUrlId}
      des={txtShowMethods.listDelete}
      method={txtShowMethods.delete}
      http={txtShowMethods.listHttpDeleteId}
      rpvH
      h={510}
    />
  );
};
export default DeleteId;
