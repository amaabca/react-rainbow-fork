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

var _margins = require('../../../styles/margins');

var _templateObject;

var StyledRightIcon = _styledComponents['default'].span(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])(['\n    margin-left: ', ';\n'])),
    _margins.MARGIN_XX_SMALL,
);

var _default = StyledRightIcon;
exports['default'] = _default;
