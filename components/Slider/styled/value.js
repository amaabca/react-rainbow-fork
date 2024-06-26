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

var StyledValue = (0, _attachThemeAttrs['default'])(_styledComponents['default'].span)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    margin: 0 0.5rem;\n    color: ',
            ';\n    font-size: ',
            ';\n    width: ',
            'ch;\n',
        ])),
    function(props) {
        return props.palette.text.label;
    },
    _fontSizes.FONT_SIZE_TEXT_LARGE,
    function(props) {
        return props.width;
    },
);
var _default = StyledValue;
exports['default'] = _default;
