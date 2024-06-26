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

var _ButtonIcon = _interopRequireDefault(require('../../ButtonIcon'));

var _margins = require('../../../styles/margins');

var _templateObject;

var variants = ['brand', 'success', 'warning', 'error'];
var StyledButtonIcon = (0, _attachThemeAttrs['default'])(
    (0, _styledComponents['default'])(_ButtonIcon['default']),
)(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    margin-right: -0.6rem;\n    margin-left: ',
            ';\n    fill: ',
            ';\n    flex-shrink: 0;\n    ',
            ';\n    ',
            ';\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    _margins.MARGIN_XX_SMALL,
    function(props) {
        return props.palette.border.main;
    },
    function(props) {
        return props.variant === 'outline-brand' && 'fill: '.concat(props.palette.brand.main, ';');
    },
    function(props) {
        return (
            variants.includes(props.variant) &&
            'fill: '.concat(props.palette.getContrastText(props.palette[props.variant].main), ';')
        );
    },
    function(props) {
        return props.size === 'medium' && '\n            margin-right: -0.8rem;\n        ';
    },
    function(props) {
        return props.size === 'x-small' && '\n            margin-right: -0.4rem;\n        ';
    },
);
var _default = StyledButtonIcon;
exports['default'] = _default;
