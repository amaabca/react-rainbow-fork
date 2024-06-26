import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
var StyledContainer = attachThemeAttrs(styled.div)(
    _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
            '\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    .StripeElement--focus {\n        padding: 0.5175rem 1rem 0 0.9375rem;\n        border: 2px solid ',
            ';\n        background-color: ',
            ';\n        box-shadow: ',
            ';\n        outline: 0;\n\n        ',
            ';\n    \n        ',
            ';\n    }\n\n    .StripeElement--webkit-autofill {\n        background-color: ',
            ' !important;\n    }\n\n    ',
            '\n\n',
        ])),
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
            props.size === 'large' &&
            '\n                padding: 0.84rem 1.125rem 0 1.125rem;\n            '
        );
    },
    function(props) {
        return (
            props.size === 'small' &&
            '\n                padding: 0.32rem 0.75rem 0 0.75rem;\n            '
        );
    },
    function(props) {
        return props.palette.background.main;
    },
    function(props) {
        return (
            props.error &&
            '\n        .StripeElement--empty {\n            padding: 0.5175rem 1rem 0 0.9375rem;\n            border: 2px solid '
                .concat(
                    props.palette.error.main,
                    ';\n        }\n\n        .StripeElement--invalid {\n            padding: 0.5175rem 1rem 0 0.9375rem;\n            background-color: ',
                )
                .concat(props.palette.background.main, ';\n            border: 2px solid ')
                .concat(
                    props.palette.error.main,
                    ';\n            background-clip: padding-box;\n        }\n\n        .StripeElement--focus {\n            background-color: ',
                )
                .concat(props.palette.background.main, ';\n            border: 2px solid ')
                .concat(props.palette.error.main, ';\n            box-shadow: ')
                .concat(props.shadows.error, ';\n            outline: 0;\n        }\n    ')
        );
    },
);
export default StyledContainer;
