import PropTypes from "prop-types";
import {HttpBox} from "./styles";
const Http = ({ http, url }) => {
  return (
    <HttpBox>
      [<span>{http}</span>
      <span>:</span>
      <span>{url}</span>]
    </HttpBox>
  );
};
export default Http;
Http.propTypes = {
  http: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
