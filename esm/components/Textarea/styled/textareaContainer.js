import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_1,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
var StyledTextareaContainer = attachThemeAttrs(styled.div)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    display: flex;\n    flex-direction: column;\n    border-radius: ',
            ';\n    transition: all 0.1s linear, padding 0s, border 0s;\n    background-color: ',
            ';\n    border: solid 1px ',
            ';\n\n    ',
            '\n\n    ',
            '\n\n    ',
            '\n\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            ';\n    \n        ',
            ';\n\n        ',
            ';\n    \n        ',
            ';\n',
        ])),
    BORDER_RADIUS_1,
    function(props) {
        return props.palette.background.main;
    },
    function(props) {
        return props.palette.border.main;
    },
    function(props) {
        return (
            props.isFocused &&
            '\n        background-color: '
                .concat(props.palette.background.main, ';\n        border: solid 2px ')
                .concat(props.palette.brand.main, ';\n        box-shadow: ')
                .concat(props.shadows.brand, ';\n        ')
        );
    },
    function(props) {
        return (
            props.variant === 'shaded' &&
            '\n            box-shadow:'.concat(
                props.disabled || props.readOnly ? '' : props.shadows.shadow_10,
                ';\n            border: 1px solid transparent;\n        ',
            )
        );
    },
    function(props) {
        return (
            props.variant === 'shaded' &&
            props.isFocused &&
            '\n            border: 2px solid transparent;\n        '
        );
    },
    function(props) {
        return (
            props.error &&
            '\n            border: solid 2px '
                .concat(
                    props.palette.error.main,
                    ';\n            background-clip: padding-box;\n\n            :focus-within {\n                box-shadow: ',
                )
                .concat(props.shadows.error, ';\n                border: solid 2px ')
                .concat(props.palette.error.main, ';\n            }\n        ')
        );
    },
    function(props) {
        return (
            props.disabled &&
            '\n            background-color: '
                .concat(props.palette.background.disabled, ';\n            border: solid 1px ')
                .concat(props.palette.border.disabled, ';\n            color: ')
                .concat(
                    props.palette.text.disabled,
                    ';\n\n            :focus-within {\n                box-shadow: none;\n            }\n        ',
                )
        );
    },
    function(props) {
        return (
            props.readOnly &&
            '\n            border: none;\n            border-radius: 0;\n            background-color: transparent;\n\n            :focus-within {\n                box-shadow: none;\n                border: none;\n            }\n        '
        );
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n                border-radius: '.concat(BORDER_RADIUS_SQUARE, ';\n            ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n                border-radius: '.concat(BORDER_RADIUS_SEMI_SQUARE, ';\n            ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n                border-radius: '.concat(
                BORDER_RADIUS_SEMI_ROUNDED,
                ';\n            ',
            )
        );
    },
);
export default StyledTextareaContainer;
