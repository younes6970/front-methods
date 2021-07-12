import PropTypes from "prop-types";
import {Text} from "../../../../styles/styles";

const Valid = ({value}) => {
    return <Text isText>{value}</Text>;
};
Valid.propTypes = {
    value: PropTypes.string.isRequired,
};
export default Valid