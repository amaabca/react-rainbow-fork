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

var _checkmark = _interopRequireDefault(require('../checkmark'));

var _templateObject;

var StyledCheckmarkIcon = (0, _attachThemeAttrs['default'])(
    (0, _styledComponents['default'])(_checkmark['default']),
)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    width: 0.8rem;\n    height: 0.8rem;\n    line-height: 1;\n    margin-left: 0.75rem;\n    flex-shrink: 0;\n    color: ',
            ';\n',
        ])),
    function(props) {
        return props.palette.brand.main;
    },
);
var _default = StyledCheckmarkIcon;
exports['default'] = _default;
