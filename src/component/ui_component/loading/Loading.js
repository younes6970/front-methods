import { Load } from "./styles";
import Loader from "react-loader-spinner";
import {colorReq} from "../../../styles/color/js/color";
const Loading = () => {
  return (
    <Load>
      <Loader
        type="BallTriangle"
        color={colorReq}
        height={100}
        width={100}
      />
    </Load>
  );
};
export default Loading;
