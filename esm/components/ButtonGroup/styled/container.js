import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
var StyledContainer = attachThemeAttrs(styled.div)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    display: inline-flex;\n\n    button {\n        border-radius: 0;\n        border-width: 1px;\n        margin-left: -1px;\n\n        &:focus {\n            z-index: 1;\n        }\n\n        &:hover {\n            z-index: 1;\n        }\n    }\n\n    > button:first-child,\n    > div:first-child > button {\n        border-radius: 100px 0 0 100px;\n    }\n\n    > button:last-child,\n    > div:last-child > button {\n        border-radius: 0 100px 100px 0;\n    }\n\n    > button:only-child,\n    > div:only-child > button {\n        border-radius: 100px;\n    }\n\n    ',
            '\n\n    ',
            ';\n\n    ',
            ';\n\n    ',
            ';\n\n',
        ])),
    function(props) {
        return (
            props.variant === 'shaded' &&
            '\n        box-shadow: '
                .concat(props.shadows.shadow_10, ';\n        background-color: ')
                .concat(
                    props.palette.background.main,
                    ";\n        border-radius: 100px;\n        > label:last-child > div {\n            display: none;\n        }\n        button {\n            border: none;\n            &::after {\n                content: '';\n                position: absolute;\n                right: 1px;\n                height: 20px;\n                width: 1px;\n                background-color: ",
                )
                .concat(
                    props.palette.border.divider,
                    ';\n                box-sizing: border-box;\n            }\n        }\n        button:last-of-type {\n            &::after {\n                content: none;\n            }\n        }\n    ',
                )
        );
    },
    function(props) {
        return (
            props.borderRadius === 'square' &&
            '\n            border-radius: '
                .concat(
                    BORDER_RADIUS_SQUARE,
                    ';\n            > button:first-child {\n                border-radius: ',
                )
                .concat(BORDER_RADIUS_SQUARE, ' 0 0 ')
                .concat(
                    BORDER_RADIUS_SQUARE,
                    ';\n            };\n            > button:last-child {\n                border-radius: 0 ',
                )
                .concat(BORDER_RADIUS_SQUARE, ' ')
                .concat(BORDER_RADIUS_SQUARE, ' 0;\n            };\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-square' &&
            '\n            border-radius: '
                .concat(
                    BORDER_RADIUS_SEMI_SQUARE,
                    ';\n            > button:first-child {\n                border-radius: ',
                )
                .concat(BORDER_RADIUS_SEMI_SQUARE, ' 0 0 ')
                .concat(
                    BORDER_RADIUS_SEMI_SQUARE,
                    ';\n            };\n            > button:last-child {\n                border-radius: 0 ',
                )
                .concat(BORDER_RADIUS_SEMI_SQUARE, ' ')
                .concat(BORDER_RADIUS_SEMI_SQUARE, ' 0;\n            };\n        ')
        );
    },
    function(props) {
        return (
            props.borderRadius === 'semi-rounded' &&
            '\n            border-radius: '
                .concat(
                    BORDER_RADIUS_SEMI_ROUNDED,
                    ';\n            > button:first-child {\n                border-radius: ',
                )
                .concat(BORDER_RADIUS_SEMI_ROUNDED, ' 0 0 ')
                .concat(
                    BORDER_RADIUS_SEMI_ROUNDED,
                    ';\n            };\n            > button:last-child {\n                border-radius: 0 ',
                )
                .concat(BORDER_RADIUS_SEMI_ROUNDED, ' ')
                .concat(BORDER_RADIUS_SEMI_ROUNDED, ' 0;\n            };\n        ')
        );
    },
);
export default StyledContainer;
