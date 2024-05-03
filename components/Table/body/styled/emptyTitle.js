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

var _attachThemeAttrs = _interopRequireDefault(
    require('../../../../styles/helpers/attachThemeAttrs'),
);

var _fontSizes = require('../../../../styles/fontSizes');

var _templateObject;

var StyledEmptyTitle = (0, _attachThemeAttrs['default'])(_styledComponents['default'].h1)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    font-size: ',
            ';\n    font-weight: 900;\n    text-align: center;\n    color: ',
            ';\n    margin: 0;\n    padding: 0;\n',
        ])),
    _fontSizes.FONT_SIZE_HEADING_MEDIUM,
    function(props) {
        return props.palette.text.main;
    },
);
var _default = StyledEmptyTitle;
exports['default'] = _default;