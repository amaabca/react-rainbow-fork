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

var _fontSizes = require('../../../styles/fontSizes');

var _templateObject;

var StyledLabel = (0, _attachThemeAttrs['default'])(_styledComponents['default'].span)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    font-size: ',
            ';\n    color: ',
            ';\n    display: block;\n',
        ])),
    _fontSizes.FONT_SIZE_TEXT_MEDIUM,
    function(props) {
        return props.palette.text.main;
    },
);
var _default = StyledLabel;
exports['default'] = _default;
