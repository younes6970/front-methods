import PropTypes from "prop-types";
import { Div } from "../../styles/styles";
import Header from "../header/Header";
import Description from "../description/Description";
import { useRouter } from "next/router";
import {ToastContainer} from "react-toastify";
const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Div dir={"column"} w={"100%"} content={"center"} item={"center"}>
        <Header />
        {!pathname.includes("/sample") && <Description />}
        {children}
      </Div>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
