import {Div, H, HeadBox, SVG, Ul} from "../../styles/styles";
import Logo from "../../asset/logo.svg";
import { dataHeaders } from "./data";
import Link from "next/link";

const Header = (props) => {
  return (
    <HeadBox>
      <Div ltr base content={"space-between"} item={"center"}>
        <Div item={"center"}>
         <Link href={"/"}>
           <a className={"link"}>
             <H m={"0 0 0 15px"}>http.methods</H>
             <SVG w={30} h={50}>
               <Logo className={"svg"} />
             </SVG>
           </a>
         </Link>

        </Div>
        <Div>
          <Ul>
            {dataHeaders.map((header) => {
              return (
                <li key={header.id}>
                  <Link href={header.link}>
                    <a>{header.title}</a>
                  </Link>
                </li>
              );
            })}
          </Ul>
        </Div>
      </Div>
    </HeadBox>
  );
};
export default Header;
