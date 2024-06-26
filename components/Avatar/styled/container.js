'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
    require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _attachThemeAttrs = _interopRequireDefault(require('../../../styles/helpers/attachThemeAttrs'));

var _color = require('../../../styles/helpers/color');

var _templateObject;

var StyledContainer = (0, _attachThemeAttrs['default'])(_styledComponents['default'].span)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
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
        return (0, _color.isValidColor)(props.backgroundColor)
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
var _default = StyledContainer;
exports['default'] = _default;
