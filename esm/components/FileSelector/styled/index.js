import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import IconContainer from '../../Input/styled/iconContainer';
import ButtonIcon from '../../ButtonIcon';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import {
    BORDER_RADIUS_2,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
import {
    FONT_SIZE_TEXT_MEDIUM,
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_TEXT_SMALL,
} from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';
import replaceAlpha from '../../../styles/helpers/color/replaceAlpha';
export var StyledContainer = styled.div(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n',
        ])),
);
export var StyledDropzone = attachThemeAttrs(styled.div)(
    _templateObject2 ||
        (_templateObject2 = _taggedTemplateLiteral([
            '     \n    position: relative;\n    width: 100%;\n    height: 2.5rem;\n    padding: 4px;\n    border: dashed 1px ',
            ';\n    border-radius: ',
            ';\n    background-color: ',
            ';\n    color: ',
            ';\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8125rem;\n\n    ',
            ';\n\n    ',
            ';\n\n    &:hover {\n        cursor: pointer;\n        border: dashed 1px ',
            ';\n    }\n\n    ',
            '\n\n    ',
            '\n\n    ',
            '\n\n    ',
            '\n    \n    ',
            '\n\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            ';\n\n',
        ])),
    function(props) {
        return props.palette.text.disabled;
    },
    BORDER_RADIUS_2,
    function(props) {
        return props.palette.background.disabled;
    },
    function(props) {
        return props.palette.text.main;
    },
    function(props) {
        return (
            props.size === 'large' &&
            '\n            line-height: 3.275rem;\n            font-size: '.concat(
                FONT_SIZE_TEXT_LARGE,
                ';\n            height: 3.4rem;\n    ',
            )
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n            line-height: 1.775rem;\n            font-size: '.concat(
                FONT_SIZE_TEXT_SMALL,
                ';\n            height: 1.9rem;\n    ',
            )
        );
    },
    function(props) {
        return props.palette.brand.main;
    },
    function(props) {
        return (
            props.hasFocus &&
            '\n        outline: 0;\n        border: solid 1px '
                .concat(props.palette.brand.main, ';\n        box-shadow: ')
                .concat(props.shadows.brand, ';\n    ')
        );
    },
    function(props) {
        return (
            props.variant === 'multiline' &&
            '\n        min-height: 12rem;\n        border-radius: 27px;\n        height: 100%;\n        width: 100%;\n    '
        );
    },
    function(props) {
        return (
            props.error &&
            '\n        color: '
                .concat(props.palette.error.main, ';\n        border: dashed 1px ')
                .concat(props.palette.error.main, ';\n        background-color: ')
                .concat(replaceAlpha(props.palette.error.main, 0.1), ';\n\n        ')
                .concat(
                    props.hasFocus &&
                        '\n            outline: 0;\n            border: solid 1px '
                            .concat(props.palette.error.main, ';\n            box-shadow: ')
                            .concat(props.shadows.error, ';\n        '),
                    '\n\n        &:hover {\n            border: dashed 1px ',
                )
                .concat(props.palette.error.main, ';\n        };\n    ')
        );
    },
    function(props) {
        return (
            props.disabled &&
            '\n        color: '
                .concat(props.palette.text.disabled, ';\n        border: dashed 1px ')
                .concat(props.palette.text.disabled, ';\n        background-color: ')
                .concat(
                    props.palette.background.disabled,
                    ';\n\n        &:hover {\n            cursor: not-allowed;\n            border-color: ',
                )
                .concat(props.palette.text.disabled, ';\n        }\n    ')
        );
    },
    function(props) {
        return (
            props.isDragOver &&
            '\n        color: '
                .concat(props.palette.brand.main, ';\n        background-color: ')
                .concat(replaceAlpha(props.palette.brand.main, 0.05), ';\n        border-color: ')
                .concat(props.palette.brand.main, ';\n    ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_ROUNDED, ';\n        ')
        );
    },
);
export var TruncatedText = styled.span(
    _templateObject3 ||
        (_templateObject3 = _taggedTemplateLiteral([
            '\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    pointer-events: none;\n',
        ])),
);
export var StyledBackdrop = attachThemeAttrs(styled.div)(
    _templateObject4 ||
        (_templateObject4 = _taggedTemplateLiteral([
            '\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 2.35rem;\n    padding-right: ',
            ';\n    border-radius: ',
            ';\n    pointer-events: none;\n\n    ',
            ';\n    ',
            ';\n\n    ',
            '\n\n    ',
            '\n\n    \n    ',
            ';\n\n    ',
            ';\n\n    ',
            ';\n',
        ])),
    PADDING_MEDIUM,
    BORDER_RADIUS_2,
    function(props) {
        return props.size === 'small' && '\n            padding-left: 2rem;\n        ';
    },
    function(props) {
        return props.size === 'large' && '\n            padding-left: 3rem;\n        ';
    },
    function(props) {
        return (
            props.isFileSelected &&
            '\n        justify-content: left;\n        background-color: '.concat(
                props.palette.background.highlight,
                ';\n        padding-right: 2.35rem;\n        ',
            )
        );
    },
    function(props) {
        return (
            props.variant === 'multiline' &&
            '\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n        font-size: '
                .concat(FONT_SIZE_TEXT_MEDIUM, ';\n        padding: ')
                .concat(
                    PADDING_MEDIUM,
                    ';\n        background: transparent;\n        height: 100%;\n        width: 100%;\n        \n        ',
                )
                .concat(
                    props.size === 'large' &&
                        '\n                font-size: '.concat(
                            FONT_SIZE_TEXT_LARGE,
                            ';\n            ',
                        ),
                    ';\n    \n        ',
                )
                .concat(
                    props.size === 'small' &&
                        '\n                font-size: '.concat(
                            FONT_SIZE_TEXT_SMALL,
                            ';\n            ',
                        ),
                    ';\n    ',
                )
        );
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_SQUARE, ';\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n            border-radius: '.concat(BORDER_RADIUS_SEMI_ROUNDED, ';\n        ')
        );
    },
);
export var StyledIconContainer = attachThemeAttrs(styled(IconContainer))(
    _templateObject5 ||
        (_templateObject5 = _taggedTemplateLiteral([
            '\n    svg {\n        width: 24px !important;\n        height: 24px !important;\n        font-size: 24px !important;\n        color: ',
            ';\n\n        ',
            '\n\n        ',
            '\n\n        ',
            '\n\n        ',
            ';\n        ',
            ';\n    }\n\n    ',
            '\n\n    ',
            '\n    ',
            '\n\n    ',
            '\n',
        ])),
    function(props) {
        return props.palette.brand.main;
    },
    function(props) {
        return (
            props.error && '\n            color: '.concat(props.palette.error.main, ';\n        ')
        );
    },
    function(props) {
        return (
            props.disabled &&
            '\n            color: '.concat(props.palette.text.disabled, ';\n        ')
        );
    },
    function(props) {
        return (
            props.isDragOver &&
            '\n            color: '.concat(props.palette.brand.main, ';\n        ')
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n                width: 20px !important;\n                height: 20px !important;\n            '
        );
    },
    function(props) {
        return (
            props.size === 'large' &&
            '\n            width: 28px !important;\n            height: 28px !important;\n        '
        );
    },
    function(props) {
        return (
            props.isSingleFile &&
            props.variant === 'inline' &&
            '\n        svg {\n            width: 18px !important;\n            height: 18px !important;\n            font-size: 18px !important;\n            '
                .concat(
                    props.size === 'small' &&
                        '\n                width: 14px !important;\n                height: 14px !important;\n            ',
                    ';\n            ',
                )
                .concat(
                    props.size === 'large' &&
                        '\n                width: 24px !important;\n                height: 24px !important;\n            ',
                    ';\n        }\n    ',
                )
        );
    },
    function(props) {
        return (
            props.iconPosition === 'left' &&
            '\n        width: unset;\n        left: 0.8rem;\n        '
                .concat(
                    props.size === 'small' && '\n            left: 0.7rem;\n        ',
                    ';\n        ',
                )
                .concat(
                    props.size === 'large' && '\n            left: 1.2rem;\n        ',
                    ';\n    ',
                )
        );
    },
    function(props) {
        return (
            props.iconPosition === 'right' &&
            '\n            right: 0.3rem;\n            '
                .concat(
                    props.size === 'small' && '\n                right: 0.1rem;\n            ',
                    ';\n            ',
                )
                .concat(
                    props.size === 'large' && '\n                right: 0.6rem;\n            ',
                    ';\n    ',
                )
        );
    },
    function(props) {
        return (
            props.variant === 'multiline' &&
            '\n        position: static;\n        width: 64px;\n        height: auto;\n        margin-bottom: '
                .concat(
                    MARGIN_X_SMALL,
                    ';\n        svg {\n            width: 64px !important;\n            height: 64px !important;\n            font-size: 64px !important;\n            ',
                )
                .concat(
                    props.size === 'small' &&
                        '\n                width: 40px !important;\n                height: 40px !important;\n            ',
                    ';\n            ',
                )
                .concat(
                    props.size === 'large' &&
                        '\n                width: 80px !important;\n                height: 80px !important;\n            ',
                    ';\n\n            ',
                )
                .concat(
                    props.error &&
                        '\n                height: 40px !important;\n                width: 40px !important;\n                font-size: 40px !important;\n                '
                            .concat(
                                props.size === 'small' &&
                                    '\n                    height: 32px !important;\n                    width: 32px !important;\n                ',
                                ';\n                ',
                            )
                            .concat(
                                props.size === 'large' &&
                                    '\n                    height: 60px !important;\n                    width: 60px !important;\n                ',
                                ';\n            ',
                            ),
                    '\n        }\n    ',
                )
        );
    },
);
export var StyledButtonIcon = styled(ButtonIcon)(
    _templateObject6 ||
        (_templateObject6 = _taggedTemplateLiteral([
            '\n    width: unset;\n    height: unset;\n    pointer-events: auto;\n    margin-right: 6px;\n    ',
            '\n\n    svg {\n        pointer-events: none;\n        width: 20px;\n        height: 20px;\n        ',
            ';\n        ',
            ';\n    }\n',
        ])),
    function(props) {
        return (
            props.pickerVariant === 'multiline' &&
            '\n        position: absolute;\n        top: 12px;\n        right: 2px;\n    '
        );
    },
    function(props) {
        return (
            props.sizeIcon === 'small' &&
            '\n                width: 16px !important;\n                height: 16px !important;\n            '
        );
    },
    function(props) {
        return (
            props.sizeIcon === 'large' &&
            '\n                width: 30px !important;\n                height: 30px !important;\n            '
        );
    },
);
export var StyledInput = styled.input(
    _templateObject7 ||
        (_templateObject7 = _taggedTemplateLiteral([
            '\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    ',
            '\n',
        ])),
    function(props) {
        return (
            props.disabled &&
            '\n        &:hover {\n            cursor: not-allowed;\n        }\n    '
        );
    },
);
