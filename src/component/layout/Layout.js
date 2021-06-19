import PropTypes from "prop-types";
import { Div } from "../../styles/styles";
import Header from "../header/Header";
import Description from "../description/Description";
const Layout = ({ children }) => {
  return (
    <Div dir={"column"} w={"100%"} content={"center"} item={"center"}>
      <Header />
      <Description />
      {children}
    </Div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
