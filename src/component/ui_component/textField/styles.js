import styled from "styled-components";
import { BORDER, RADIUS, SHADOW } from "../../../styles/color/js/styles";
import { black, dark } from "../../../styles/color/js/color";
import { font16 } from "../../../styles/color/js/font";

export const Input = styled.input`
  font-size: ${font16};
  padding: 10px;
  display: inline-block;
  outline: none;
  width: calc(100% - 20px);
  height: 100%;
  font-family: inherit;
  border: none;
  color: ${black};
  margin: 0 10px;
  box-sizing: border-box;
  flex: 1;
  appearance: none;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  &::placeholder {
    color: ${black};
  }
`;
export const BoxInput = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  position: relative;
`;
export const Label = styled.label`
  font-size: ${font16};
  font-weight: 600;
  color: ${dark};
`;
export const DivField = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-bottom: ${BORDER}66;
  margin-bottom: 35px;
  position: relative;
  box-shadow: 0 4px 4px -4px #a1b5c1;
`;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 540px;
  box-shadow: ${SHADOW};
  border-radius: ${RADIUS};
`;
