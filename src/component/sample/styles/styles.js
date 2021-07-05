import styled, { css } from "styled-components";
import { font16 } from "../../../styles/color/js/font";
import {
  baseDark,
  colorRes,
  dark,
  light,
} from "../../../styles/color/js/color";
import { BORDER, RADIUS, SHADOW } from "../../../styles/color/js/styles";

export const Btn = styled.button`
  padding: 13px 30px;
  font-size: ${font16};
  color: ${light};
  background-color: ${colorRes};
  text-align: center;
  border-radius: ${RADIUS};
  outline: none;
  cursor: pointer;
  border: none;
  align-self: end;
  margin: 20px 0;
  width: 100%;
  &:disabled {
    background-color: ${colorRes}55;
    cursor: not-allowed;
  }
`;
export const Table = styled.table`
  width: 100%;
  box-sizing: border-box;
  border-spacing: 0;
  box-shadow: ${SHADOW};
  border-radius: ${RADIUS};
  overflow: hidden;
  border-collapse: collapse;
`;
export const Thead = styled.thead`
  background-color: ${dark};
  color: ${light};
`;
export const Tr = styled.tr`
  border-bottom: ${BORDER};
  &:last-child {
    border: none;
  }
`;
export const Th = styled.th`
  text-align: start;
  padding: 10px 8px;
  &:last-child {
    text-align: center;
  }
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 0 5px;
`;
