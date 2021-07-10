import styled, { css } from "styled-components";
import { font16 } from "../../../styles/color/js/font";
import {
  baseDark,
  colorReq,
  colorRes,
  dark,
  light,
} from "../../../styles/color/js/color";
import { BORDER, RADIUS, SHADOW } from "../../../styles/color/js/styles";
import { elementType } from "prop-types";

export const Btn = styled.button`
  padding: 13px 30px;
  font-size: ${font16};
  color: ${light};
  background-color: ${(props) => props.bg || colorRes};
  text-align: center;
  border-radius: ${RADIUS};
  outline: none;
  cursor: pointer;
  border: none;
  align-self: end;
  margin: ${(props) => props.m || "20px 0"};
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
export const Page = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;
`;
const active = css`
  background-color: ${colorReq};
  color: ${light};
  box-shadow: none;
  border: none;
`;
export const ItemPage = styled.button`
  padding: 7px 10px;
  margin: 0 5px;
  font-size: ${font16};
  background: none;
  outline: none;
  cursor: pointer;
  border: ${BORDER};
  border-radius: ${RADIUS};
  box-sizing: border-box;
  ${(props) => props.active && active};
`;
