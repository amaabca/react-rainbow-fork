import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var variantMap = {
    card: 'card',
    line: 'line',
};
var StyledContainer = attachThemeAttrs(styled.li)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 2.75rem;\n    background-color: transparent;\n    box-sizing: border-box;\n\n    :nth-child(1) > button::after {\n        background-color: transparent;\n        box-sizing: border-box;\n    }\n\n    @media (max-width: 600px) {\n        width: 0;\n        height: 4rem;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        position: absolute;\n    }\n\n    ',
            ';\n    ',
            ';\n    ',
            ';\n',
        ])),
    function(props) {
        return props.fullWidth && '\n            flex-grow: 1;\n        ';
    },
    function(props) {
        return (
            props.isActive &&
            (variantMap[props.variant] === 'card' || !variantMap[props.variant]) &&
            '\n            background-color: '
                .concat(props.palette.background.main, ';\n            color: ')
                .concat(
                    props.palette.brand.main,
                    ";\n            border-radius: 14px 14px 0 0;\n            z-index: 2;\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n            box-sizing: border-box;\n\n            &::after {\n                left: -40px;\n                content: '';\n                background: transparent;\n                position: absolute;\n                bottom: -16px;\n                height: 56px;\n                width: 56px;\n                border-radius: 100%;\n                border-width: 16px;\n                border-style: solid;\n                border-color: transparent ",
                )
                .concat(
                    props.palette.background.main,
                    " transparent transparent;\n                -webkit-transform: rotate(45deg);\n                box-sizing: border-box;\n            }\n        \n            &::before {\n                right: -40px;\n                content: '';\n                background: transparent;\n                position: absolute;\n                bottom: -16px;\n                height: 56px;\n                width: 56px;\n                border-radius: 100%;\n                border-width: 16px;\n                border-style: solid;\n                border-color: transparent ",
                )
                .concat(
                    props.palette.background.main,
                    ' transparent transparent;\n                -webkit-transform: rotate(145deg);\n                box-sizing: border-box;\n            }\n            \n            @media (max-width: 600px) {\n                border-radius: 0;\n                position: relative;\n                width: 100%;\n            }\n\n            &::after {\n                left: unset;\n                content: unset;\n                background: unset;\n                position: unset;\n                bottom: unset;\n                height: unset;\n                width: unset;\n                border-radius: unset;\n                border-width: unset;\n                border-style: unset;\n                border-color: unset;\n                -webkit-transform: unset;\n                box-sizing: border-box;\n            }\n\n            &::before {\n                background: unset;\n                border-width: unset;\n                border-style: unset;\n                border-color: unset;\n                -webkit-transform: unset;\n                content: "";\n                height: 0.125rem;\n                width: 100%;\n                left: 0;\n                bottom: 0;\n                position: absolute;\n                border-radius: 100px;\n                box-sizing: border-box;\n            }\n        ',
                )
        );
    },
    function(props) {
        return (
            props.isActive &&
            props.variant === 'line' &&
            '\n            color: '.concat(
                props.palette.brand.main,
                ';\n            z-index: 2;\n\n            @media (max-width: 600px) {\n                border-radius: 0;\n                position: relative;\n                width: 100%;\n            }\n        ',
            )
        );
    },
);
export default StyledContainer;
