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

var _templateObject;

var StyledUl = _styledComponents['default'].ul(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    box-sizing: border-box;\n    ',
            ';\n',
        ])),
    function(props) {
        return props.variant === 'accordion' && '\n        padding-left: 1.25rem;\n        ';
    },
);

var _default = StyledUl;
exports['default'] = _default;
