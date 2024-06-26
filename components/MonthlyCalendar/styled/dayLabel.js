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

var _fontSizes = require('../../../styles/fontSizes');

var _attachThemeAttrs = _interopRequireDefault(require('../../../styles/helpers/attachThemeAttrs'));

var _templateObject;

var StyledDayLabel = (0, _attachThemeAttrs['default'])(_styledComponents['default'].div)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    color: ',
            ';\n    font-size: ',
            ';\n    font-weight: 400;\n    text-align: right;\n    padding: 7px 7px 0 0;\n',
        ])),
    function(props) {
        return props.palette.text.main;
    },
    _fontSizes.FONT_SIZE_TEXT_LARGE,
);
var _default = StyledDayLabel;
exports['default'] = _default;
