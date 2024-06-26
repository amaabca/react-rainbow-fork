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

var _templateObject;

var StyledDays = (0, _attachThemeAttrs['default'])(_styledComponents['default'].div)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    align-items: flex-start;\n    width: 100%;\n    flex: 1 1 auto;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    margin-right: 1px;\n\n    > div:first-child {\n        width: 11px;\n        min-width: 11px;\n        height: 100%;\n        border-right: 1px solid ',
            ';\n    }\n',
        ])),
    function(props) {
        return props.palette.border.divider;
    },
);
var _default = StyledDays;
exports['default'] = _default;
