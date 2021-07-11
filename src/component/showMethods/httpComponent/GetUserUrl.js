import Item from "../item/Item";
import {txtShowMethods} from "../text";


const GetUserUrl = () =>{

    return (
        <Item
            url={txtShowMethods.getUserU}
            des={txtShowMethods.userText}
            method={txtShowMethods.get}
            http={txtShowMethods.userHttpId}
            h={510}
            rpvH
        />
    );
}
export default GetUserUrl