import {txtShowMethods} from "../text";
import {Green, Orange, Purple, Withe} from "../../../styles/styles";
import Item from "../item/Item";

const PostPro = () =>{
    return <Item
        url={txtShowMethods.proUrl}
        des={txtShowMethods.proText}
        method={txtShowMethods.proMethod}
        post
        h={510}
    >
        <Purple m>body</Purple>
        <Withe m>:</Withe>
        <Purple m>JSON</Purple>
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
}
export default PostPro