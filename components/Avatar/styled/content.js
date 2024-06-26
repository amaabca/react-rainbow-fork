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

var _templateObject;

var StyledContent = (0, _attachThemeAttrs['default'])(_styledComponents['default'].span)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    height: 100%;\n    text-shadow: ',
            ';\n    box-sizing: border-box;\n    width: 100%\n\n    &:hover {\n        color: currentColor;\n        cursor: default;\n    }\n\n    &[title] {\n        text-decoration: none;\n        cursor: default;\n    }\n\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    function(props) {
        return props.shadows.shadow_1;
    },
    function(props) {
        var inverseText = props.palette.getContrastText(props.palette.background.secondary);
        return (
            props.initialsVariant === 'inverse' &&
            '\n                background-color: '
                .concat(props.palette.background.secondary, ';\n                color: ')
                .concat(
                    inverseText,
                    ';\n                text-shadow: none;\n            \n                &:hover {\n                    color: ',
                )
                .concat(
                    inverseText,
                    ';\n                    cursor: default;\n                }\n            ',
                )
        );
    },
    function(props) {
        return (
            props.as === 'abbr' &&
            '\n            border: 0;\n            text-decoration: none;\n            background: transparent;\n        '
        );
    },
);
var _default = StyledContent;
exports['default'] = _default;
