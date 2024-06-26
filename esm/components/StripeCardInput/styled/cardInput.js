import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import {
    BORDER_RADIUS_2,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledCardInput = attachThemeAttrs(styled.div)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    height: 2.5rem;\n    background-color: ',
            ';\n    border: 1px solid ',
            ';\n    border-radius: ',
            ';\n    padding: 0.58rem 1rem 0 1rem;\n    cursor: text;\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            '\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            ';\n\n',
        ])),
    function(props) {
        return props.palette.background.main;
    },
    function(props) {
        return props.palette.border.main;
    },
    BORDER_RADIUS_2,
    function(props) {
        return (
            props.size === 'large' &&
            '\n            padding: 0.9rem 1.2rem 0 1.2rem;\n            height: 3.4rem;\n        '
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n            padding: 0.38rem 0.8rem 0 0.8rem;\n            height: 1.9rem;\n        '
        );
    },
    function(props) {
        return (
            props.disabled &&
            '\n        background-color: '
                .concat(
                    props.palette.background.disabled,
                    ' !important;\n        border: 1px solid ',
                )
                .concat(
                    props.palette.border.disabled,
                    ' !important;\n        cursor: not-allowed;\n        user-select: none;\n\n        &:focus,\n            &:active {\n                box-shadow: none;\n                background-color: ',
                )
                .concat(
                    props.palette.background.disabled,
                    ' !important;\n                border: 1px solid ',
                )
                .concat(props.palette.border.disabled, ' !important;\n            }\n    ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_ROUNDED, ';\n        ')
        );
    },
);
export default StyledCardInput;
