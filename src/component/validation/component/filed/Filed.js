import PropTypes from "prop-types";
import {Text} from "../../../../styles/styles";
import { colorRes} from "../../../../styles/color/js/color";

const Filed = ({ item }) => {
  return (
    <Text>
      filed(<Text color={colorRes}>{item}</Text>)
    </Text>
  );
};

Filed.propTypes = {
  item: PropTypes.string.isRequired,
};
export default Filed;
