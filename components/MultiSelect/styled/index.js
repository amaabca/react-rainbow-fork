'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.StyledText = exports.StyledPlaceholder = exports.StyledInput = exports.StyledDropdown = exports.StyledCountText = exports.StyledContainer = exports.StyledCombobox = exports.StyledChipContainer = exports.StyledChip = exports.StyledButtonIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
    require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _attachThemeAttrs = _interopRequireDefault(require('../../../styles/helpers/attachThemeAttrs'));

var _fontSizes = require('../../../styles/fontSizes');

var _Chip = _interopRequireDefault(require('../../Chip'));

var _ButtonIcon = _interopRequireDefault(require('../../ButtonIcon'));

var _Structural = require('../../Structural');

var _InternalDropdown = _interopRequireDefault(require('../../InternalDropdown'));

var _borderRadius = require('../../../styles/borderRadius');

var _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7,
    _templateObject8,
    _templateObject9,
    _templateObject10;

var StyledContainer = _styledComponents['default'].div(
    _templateObject ||
        (_templateObject = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n',
        ])),
);

exports.StyledContainer = StyledContainer;

var StyledInput = _styledComponents['default'].input(
    _templateObject2 ||
        (_templateObject2 = (0, _taggedTemplateLiteral2['default'])([
            '\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n    clip: rect(1px, 1px, 1px, 1px);\n    white-space: nowrap; /* added line */\n',
        ])),
);

exports.StyledInput = StyledInput;
var StyledCombobox = (0, _attachThemeAttrs['default'])(_styledComponents['default'].div)(
    _templateObject3 ||
        (_templateObject3 = (0, _taggedTemplateLiteral2['default'])([
            '\n    font: inherit;\n    background-color: ',
            ';\n    border: 1px solid ',
            ';\n    border-radius: 20px;\n    width: 100%;\n    transition: all 0.1s linear, padding 0s, border 0s;\n    display: flex;\n    color: ',
            ';\n    font-size: ',
            ';\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0.1rem 1px;\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            '\n\n    ',
            '\n\n    :focus,\n    :active,\n    :focus-within {\n        outline: 0;\n        padding: 0.0325rem 0;\n        border: 2px solid ',
            ';\n        background-color: ',
            ';\n        box-shadow: ',
            ';\n    }\n\n    ',
            '    \n\n    ',
            '\n    \n        ',
            ';\n\n        ',
            ';\n    \n        ',
            ';\n    \n',
        ])),
    function(props) {
        return props.palette.background.main;
    },
    function(props) {
        return props.palette.border.main;
    },
    function(props) {
        return props.palette.text.main;
    },
    _fontSizes.FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_HEADING_MEDIUM,
                ';\n        border-radius: 30px;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_TEXT_MEDIUM,
                ';\n        border-radius: 18px;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.isBare &&
            '\n        background: transparent;\n        border-color: transparent;\n        '
        );
    },
    function(props) {
        return (
            props.variant === 'bare' &&
            '\n        background: transparent;\n        border-color: transparent;\n        '
        );
    },
    function(props) {
        return props.palette.brand.main;
    },
    function(props) {
        return props.palette.background.main;
    },
    function(props) {
        return props.shadows.brand;
    },
    function(props) {
        return (
            props.error &&
            '\n        border: 2px solid '
                .concat(
                    props.palette.error.main,
                    ';\n        padding: 0.0375rem 0;\n\n        :focus,\n        :active {\n            outline: 0;\n            background-color: ',
                )
                .concat(props.palette.background.main, ';\n            border: 2px solid ')
                .concat(props.palette.error.main, ';\n            box-shadow: ')
                .concat(props.shadows.error, ';\n        }\n        ')
        );
    },
    function(props) {
        return (
            props.disabled &&
            '\n        background-color: '
                .concat(props.palette.background.disabled, ';\n        border: 1px solid ')
                .concat(props.palette.border.disabled, ';\n        color: ')
                .concat(
                    props.palette.text.disabled,
                    ';\n        cursor: not-allowed;\n        user-select: none;\n\n        :focus,\n        :active {\n            box-shadow: none;\n            background-color: ',
                )
                .concat(props.palette.background.disabled, ';\n            border: 1px solid ')
                .concat(props.palette.border.disabled, ';\n        }\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n                border-radius: '.concat(
                _borderRadius.BORDER_RADIUS_SQUARE,
                ';\n            ',
            )
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n                border-radius: '.concat(
                _borderRadius.BORDER_RADIUS_SEMI_SQUARE,
                ';\n            ',
            )
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n                border-radius: '.concat(
                _borderRadius.BORDER_RADIUS_SEMI_ROUNDED,
                ';\n            ',
            )
        );
    },
);
exports.StyledCombobox = StyledCombobox;

var StyledChipContainer = _styledComponents['default'].div(
    _templateObject4 ||
        (_templateObject4 = (0, _taggedTemplateLiteral2['default'])([
            '\n    display: flex;\n    flex-wrap: wrap;\n    flex-grow: 1;\n    align-items: center;\n    overflow: hidden;\n',
        ])),
);

exports.StyledChipContainer = StyledChipContainer;
var StyledChip = (0, _styledComponents['default'])(_Chip['default'])(
    _templateObject5 ||
        (_templateObject5 = (0, _taggedTemplateLiteral2['default'])([
            '\n    margin: 0.1rem 0 0.1rem 0.2rem;\n',
        ])),
);
exports.StyledChip = StyledChip;
var StyledButtonIcon = (0, _styledComponents['default'])(_ButtonIcon['default'])(
    _templateObject6 ||
        (_templateObject6 = (0, _taggedTemplateLiteral2['default'])([
            '\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin: 0.3rem 0.4rem;\n\n    svg {\n        width: 0.85rem !important;\n        height: 0.85rem !important;\n        font-size: 0.85rem !important;\n        ',
            ';\n        ',
            ';\n    }\n',
        ])),
    function(props) {
        return (
            props.sizeIcon === 'large' &&
            '\n            width: 1.25rem !important;\n            height: 1.25rem !important;\n            font-size: 1.25rem !important;\n        '
        );
    },
    function(props) {
        return (
            props.sizeIcon === 'small' &&
            '\n            width: 0.8rem !important;\n            height: 0.8rem !important;\n            font-size: 0.8rem !important;\n        '
        );
    },
);
exports.StyledButtonIcon = StyledButtonIcon;
var StyledPlaceholder = (0, _attachThemeAttrs['default'])(_styledComponents['default'].span)(
    _templateObject7 ||
        (_templateObject7 = (0, _taggedTemplateLiteral2['default'])([
            '\n    color: ',
            ';\n    font-weight: 500;\n    font-size: ',
            ';\n    align-self: center;\n    max-width: 100%;\n    padding: 0 0.8rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    function(props) {
        return props.palette.text.header;
    },
    _fontSizes.FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_HEADING_MEDIUM,
                ';\n        height: 3.1rem;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_TEXT_MEDIUM,
                ';\n        height: 1.7rem;\n    ',
            )
        );
    },
);
exports.StyledPlaceholder = StyledPlaceholder;
var StyledText = (0, _attachThemeAttrs['default'])(
    (0, _styledComponents['default'])(_Structural.TruncatedText),
)(
    _templateObject8 ||
        (_templateObject8 = (0, _taggedTemplateLiteral2['default'])([
            '\n    color: ',
            ';\n    font-weight: 500;\n    font-size: ',
            ';\n    align-self: center;\n    max-width: 100%;\n    padding: 0 0.8rem;\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    function(props) {
        return props.palette.text.main;
    },
    _fontSizes.FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_HEADING_MEDIUM,
                ';\n        height: 3.1rem;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_TEXT_MEDIUM,
                ';\n        height: 1.7rem;\n    ',
            )
        );
    },
);
exports.StyledText = StyledText;
var StyledCountText = (0, _attachThemeAttrs['default'])(_styledComponents['default'].span)(
    _templateObject9 ||
        (_templateObject9 = (0, _taggedTemplateLiteral2['default'])([
            '\n    color: ',
            ';\n    font-weight: bold;\n    font-size: ',
            ';\n    align-self: center;\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            '\n',
        ])),
    function(props) {
        return props.palette.text.title;
    },
    _fontSizes.FONT_SIZE_TEXT_LARGE,
    function(props) {
        return (
            props.size === 'large' &&
            '\n        line-height: 3.275rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_HEADING_MEDIUM,
                ';\n        height: 3.1rem;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n        line-height: 1.775rem;\n        font-size: '.concat(
                _fontSizes.FONT_SIZE_TEXT_MEDIUM,
                ';\n        height: 1.7rem;\n    ',
            )
        );
    },
    function(props) {
        return props.readOnly && '\n            margin-right: 0.8rem;\n        ';
    },
);
exports.StyledCountText = StyledCountText;
var StyledDropdown = (0, _styledComponents['default'])(_InternalDropdown['default'])(
    _templateObject10 ||
        (_templateObject10 = (0, _taggedTemplateLiteral2['default'])(['\n    ', '\n'])),
    function(props) {
        return props.showCheckbox && '\n        width: '.concat(props.width, 'px;\n        ');
    },
);
exports.StyledDropdown = StyledDropdown;
