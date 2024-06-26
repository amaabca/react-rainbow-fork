import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { isValidColor } from '../../../styles/helpers/color';
var StyledContainer = attachThemeAttrs(styled.span)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    background-color: ',
            ';\n    color: ',
            ';\n    border-radius: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 2.5rem;\n    line-height: 1;\n    overflow: hidden;\n    vertical-align: middle;\n    width: 2.5rem;\n    box-sizing: border-box;\n\n    &:hover,\n    &:focus {\n        color: ',
            ';\n    }\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    function(props) {
        return isValidColor(props.backgroundColor)
            ? props.backgroundColor
            : props.palette.brand.main;
    },
    function(props) {
        return props.palette.getContrastText(props.palette.brand.main);
    },
    function(props) {
        return props.palette.getContrastText(props.palette.brand.main);
    },
    function(props) {
        return (
            props.size === 'large' &&
            '\n            font-size: 1.125rem;\n            height: 3.2rem;\n            width: 3.2rem;\n        '
        );
    },
    function(props) {
        return (
            props.size === 'medium' &&
            '\n            font-size: 1rem;\n            height: 2.5rem;\n            width: 2.5rem;\n        '
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n            font-size: 0.625rem;\n            height: 1.5rem;\n            width: 1.5rem;\n        '
        );
    },
    function(props) {
        return (
            props.size === 'x-small' &&
            '\n            font-size: 0.625rem;\n            height: 1.25rem;\n            width: 1.25rem;\n        '
        );
    },
);
export default StyledContainer;
