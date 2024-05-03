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

var SpinnerContainer = _styledComponents['default'].div(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    margin-right: 8px;\n',
        ])),
);

var _default = SpinnerContainer;
exports['default'] = _default;
