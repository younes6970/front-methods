import styled from "styled-components";
import { font16 } from "../../../styles/color/js/font";
import { colorReq, colorRes } from "../../../styles/color/js/color";

export const HttpBox = styled.p`
  margin: 10px 0;
  padding: 0;
  color: ${colorReq};
  font-size: ${font16};
  direction: ltr;
  span {
    color: ${colorReq};
    &:first-child {
      color: ${colorRes};
      margin: 0 5px;
      display: inline-block;
    }
    &:last-child {
      color: ${colorRes};
      margin: 0 5px;
      display: inline-block;
    }
  }
`;
