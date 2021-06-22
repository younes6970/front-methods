import styled, { css } from "styled-components";
import { BORDER, RADIUS, SHADOW, SHADOW_BOX, WIDTH } from "./color/js/styles";
import PropTypes from "prop-types";
import { font16, font18, font20 } from "./color/js/font";
import {
  baseDark,
  colorCopy,
  colorReq,
  colorRes,
  dark,
  textDark,
  textLight,
} from "./color/js/color";
export const HeadBox = styled.header`
  width: 100%;
  border: ${BORDER};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Base = css`
  max-width: ${WIDTH};
  width: 100%;
`;
export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li{
    list-style: none;
    margin-left: 10px;
    &:last-child{
      margin-left: 10px;
    }
    a{
      color: ${dark};
      font-size: ${font16};
      text-decoration: none;
      font-weight: normal;
      transition: all 0.5ms;
      padding: 5px 20px;
      border-radius: 20px;
      &:hover{
        color: ${colorRes};
        font-weight: 500;
        transition: all 0.5ms;
      }
    }
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "row"};
  justify-content: ${(props) => props.content || "flex-start"};
  align-items: ${(props) => props.item || "start"};
  ${(props) => props.w && `width :  ${props.w}`};
  background: ${(props) => props.ground || "none"};
  ${(props) => props.base && Base};
  ${(props) => props.m && `margin : ${props.m}`};
  ${(props) => props.p && `padding : ${props.p}`};
  box-sizing: border-box;
  ${(props) => props.ltr && "  direction: ltr"};
`;
Div.propTypes = {
  dir: PropTypes.string,
  content: PropTypes.string,
  item: PropTypes.string,
  w: PropTypes.string,
  ground: PropTypes.string,
  base: PropTypes.bool,
  m: PropTypes.string,
  p: PropTypes.string,
  ltr: PropTypes.string,
};
export const Box = styled(Div)`
  border: ${BORDER};
  border-radius: ${RADIUS};
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => props.h}px;
`;
Box.propTypes = {
  h: PropTypes.number.isRequired,
};
export const H = styled.h1`
  font-size: ${(props) => props.font || `${font20}`};
  color: ${(props) => props.color || `${dark}`};
  margin: ${(props) => props.m || 0};
  padding: ${(props) => props.p || 0};
`;
H.propTypes = {
  font: PropTypes.string,
  color: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
};
export const SVG = styled.div`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
`;
SVG.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
};

export const P = styled.p`
  ${(props) => props.w && `width :  ${props.w}`};
  font-size: ${(props) => props.font || font18};
  color: ${(props) => props.color || dark};
  background-color: ${(props) => props.bg || null};
  margin: ${(props) => props.m || 0};
  padding: ${(props) => props.p || 0};
  ${(props) => props.self && `align-self : ${props.self}`};
  box-sizing: border-box;
  ${(props) => props.span && `display: inline-block`};
  text-align: justify;
  border-radius: ${(props) => `${props.radius}px` || null};
`;
P.proptypes = {
  w: PropTypes.string,
  font: PropTypes.string,
  color: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  self: PropTypes.string,
  span: PropTypes.bool,
  bg: PropTypes.string,
  radius: PropTypes.number,
};
export const Copy = styled(P)`
  background-color: ${colorCopy};
  padding: 10px 20px;
  border-radius: 100px;
  direction: ltr;
  align-self: ${(props) => props.self || "center"};
  cursor: pointer;
  margin: ${(props) => props.m || null};
`;
Copy.propTypes = {
  m: PropTypes.string,
  self: PropTypes.string,
};
export const Http = styled.span`
  display: inline-block;
  margin: 0 2px;
`;
export const Ide = styled.div`
  direction: ltr;
  width: 98%;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: ${baseDark};
  margin: 0 auto 1%;
  border-radius: ${RADIUS};
`;
export const Code = styled.span`
  font-size: ${font16};
  margin: ${(props) => (props.m ? "3px 0" : "3px 2px")};
  display: inline-block;
  ${(props) => props.p && `padding: 0 0 0 20px`};
`;
export const Orange = styled(Code)`
  color: #edb365;
`;
export const Withe = styled(Code)`
  color: #fff;
`;
export const Green = styled(Code)`
  color: #698655;
`;
export const Purple = styled(Code)`
  color: #97758b;
`;
export const Blue = styled(Code)`
  color: #6897bb;
`;
export const Text = styled.span`
  color: ${(props) => props.color || dark};
  font-size: ${font16};
`;
Text.propTypes = {
  color: PropTypes.string,
};
