import styled, { css } from "styled-components";
import { font16 } from "../../../styles/color/js/font";
import { colorRes, light } from "../../../styles/color/js/color";
import { RADIUS } from "../../../styles/color/js/styles";


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
  &:disabled{
    background-color: ${colorRes}55;
    cursor: not-allowed;
  }
  
`;
