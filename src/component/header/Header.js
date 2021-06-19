import { Div, H, HeadBox, SVG } from "../../styles/styles";
import Logo from "../../asset/logo.svg";

const Header = (props) => {
  return (
    <HeadBox>
      <Div base content={"space-between"} item={"center"}>
        <SVG w={30} h={50}>
          <Logo className={"svg"} />
        </SVG>
        <H>http.methods</H>
      </Div>
    </HeadBox>
  );
};
export default Header
