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

var StyledInnerContainer = _styledComponents['default'].div(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    position: relative;\n    ',
            '\n',
        ])),
    function(props) {
        return (
            props.readOnly &&
            !props.disabled &&
            '\n        :hover {\n            cursor: text;\n        }\n    '
        );
    },
);

var _default = StyledInnerContainer;
exports['default'] = _default;
