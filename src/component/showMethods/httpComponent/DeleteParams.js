import Item from "../item/Item";
import {txtShowMethods} from "../text";
import {Blue, Orange, Purple, Withe} from "../../../styles/styles";


const DeleteParams = () =>{

    return  <Item
        url={txtShowMethods.listDeleteUrl}
        des={txtShowMethods.listDelete}
        method={txtShowMethods.delete}
        h={ 510}
        rpvH
    >
        <Purple>Params</Purple>
        <Withe>:</Withe>
        <Withe>}</Withe>
        <br />
        <Purple p>id</Purple>
        <Withe>:</Withe>
        <Blue>1</Blue>
        <br />
        <Withe>{"{"}</Withe>
        <Orange>,</Orange>
        <br />
    </Item>
}
export default DeleteParams