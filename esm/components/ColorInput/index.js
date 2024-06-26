import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                  _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
    }
    return target;
}

import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useScrollingIntent } from '@rainbow-modules/hooks';
import Label from '../Input/label';
import StyledContainer from '../Input/styled/container';
import InternalOverlay from '../InternalOverlay';
import ColorPicker from '../ColorPicker';
import {
    StyledAlpha,
    StyledAlphaInput,
    StyledCard,
    StyledContent,
    StyledInput,
    ColorInputContainer,
} from './styled';
import {
    useOutsideClick,
    useWindowResize,
    useUniqueIdentifier,
    useReduxForm,
    useErrorMessageId,
    useLabelId,
} from '../../libs/hooks';
import {
    StyledFlagContainer,
    StyledIndicator,
    StyledInputContainer,
    StyledTrigger,
} from '../PhoneInput/styled';
import AssistiveText from '../AssistiveText';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import { useFocusIndex, useHandleBlur, useHandleFocus } from '../PhoneInput/hooks';
import ColorSample from './colorSample';
import { decomposeColor, hexToRgb, hexToRgba, recomposeColor } from '../../styles/helpers/color';
import isHexColor from '../../styles/helpers/color/isHexColor';
import StyledIconContainer from '../Input/styled/iconContainer';
import getHexString from './helpers/getHexString';
import getColorValue from './helpers/getColorValue';

var ColorInput = function ColorInput(props) {
    var _useReduxForm = useReduxForm(props),
        id = _useReduxForm.id,
        className = _useReduxForm.className,
        style = _useReduxForm.style,
        value = _useReduxForm.value,
        onChange = _useReduxForm.onChange,
        defaultColors = _useReduxForm.defaultColors,
        variant = _useReduxForm.variant,
        onClick = _useReduxForm.onClick,
        label = _useReduxForm.label,
        labelAlignment = _useReduxForm.labelAlignment,
        hideLabel = _useReduxForm.hideLabel,
        required = _useReduxForm.required,
        readOnly = _useReduxForm.readOnly,
        disabled = _useReduxForm.disabled,
        error = _useReduxForm.error,
        tabIndex = _useReduxForm.tabIndex,
        name = _useReduxForm.name,
        placeholder = _useReduxForm.placeholder,
        bottomHelpText = _useReduxForm.bottomHelpText,
        focusInProps = _useReduxForm.onFocus,
        blurInProps = _useReduxForm.onBlur,
        size = _useReduxForm.size,
        borderRadius = _useReduxForm.borderRadius;

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

    var _useState3 = useState(getColorValue(value)),
        _useState4 = _slicedToArray(_useState3, 2),
        colorValue = _useState4[0],
        setColorValue = _useState4[1];

    var _useState5 = useState(value),
        _useState6 = _slicedToArray(_useState5, 2),
        sampleColor = _useState6[0],
        setSampleColor = _useState6[1];

    var pickerRef = useRef();
    var containerRef = useRef();
    var triggerRef = useRef();
    var alphaInputRef = useRef();
    var inputRef = useRef();
    var inputId = useUniqueIdentifier('color-input');
    var errorMessageId = useErrorMessageId(error);
    var labelId = useLabelId(label);

    var _useFocusIndex = useFocusIndex(containerRef, triggerRef, inputRef, alphaInputRef),
        _useFocusIndex2 = _slicedToArray(_useFocusIndex, 2),
        focusIndex = _useFocusIndex2[0],
        setFocusIndex = _useFocusIndex2[1];

    useOutsideClick(
        containerRef,
        function() {
            setFocusIndex(-1);
        },
        focusIndex > -1,
    );
    useOutsideClick(
        pickerRef,
        function(event) {
            if (
                event.target !== triggerRef.current &&
                !triggerRef.current.contains(event.target) &&
                !pickerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        },
        isOpen,
    );
    useScrollingIntent({
        callback: function callback() {
            return setIsOpen(false);
        },
        isListening: isOpen,
        triggerElementRef: function triggerElementRef() {
            return triggerRef;
        },
        threshold: 5,
    });
    useWindowResize(function() {
        return setIsOpen(false);
    }, isOpen);
    var onBlur = useCallback(
        function() {
            var hex = value.hex;
            if (!isHexColor(hex)) setSampleColor(undefined);
            blurInProps(value);
        },
        [value, blurInProps],
    );
    var onFocus = useCallback(
        function() {
            return focusInProps(value);
        },
        [value, focusInProps],
    );
    var handleFocus = useHandleFocus({
        focusIndex: focusIndex,
        onFocus: onFocus,
        setFocusIndex: setFocusIndex,
        value: value,
    });
    var handleBlur = useHandleBlur({
        focusIndex: focusIndex,
        onBlur: onBlur,
        value: value,
    });

    var handleClick = function handleClick(event) {
        if (focusIndex === 1) {
            setFocusIndex(0);
        } else {
            setFocusIndex(1);
        }

        event.preventDefault();
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
        return onClick(event);
    };

    var handleChange = function handleChange(event) {
        var eventValue = event.target.value;
        var alpha = value.alpha;
        var hex = getHexString(eventValue);
        var isValid = isHexColor(hex);
        var newValue = {
            hex: hex,
            alpha: alpha,
            isValid: isValid,
        };

        if (isValid) {
            setSampleColor(newValue);
            setColorValue(getColorValue(newValue));
        }

        onChange(newValue);
    };

    var handleAlphaChange = function handleAlphaChange(event) {
        if (!event.target.value) {
            onChange(
                _objectSpread(
                    _objectSpread({}, value),
                    {},
                    {
                        alpha: null,
                    },
                ),
            );
            return;
        }

        var alpha = Number.parseInt(event.target.value || '0', 10);
        if (alpha > 100) alpha = 100;
        else if (alpha < 0) alpha = 0;
        alpha /= 100;

        var newValue = _objectSpread(
            _objectSpread({}, value),
            {},
            {
                alpha: alpha,
            },
        );

        setSampleColor(newValue);
        setColorValue(getColorValue(newValue));
        if (!Number.isNaN(alpha)) onChange(newValue);
    };

    var handleColorChange = function handleColorChange(color) {
        var hex = color.hex,
            rgba = color.rgba;
        var newValue = {
            hex: hex,
            alpha: rgba[3],
            isValid: isHexColor(hex),
        };
        setColorValue(color);
        setSampleColor(newValue);
        onChange(newValue);
    };

    var isFocus = focusIndex > -1 || isOpen;
    var inputValue =
        (value && value.hex) || value.hex === '' ? value.hex.replace('#', '') : '000000';
    var alphaValue =
        (value && value.alpha) || value.alpha === 0 ? Math.round(value.alpha * 100) : '';
    return React.createElement(
        StyledContainer,
        {
            id: id,
            className: className,
            style: style,
            ref: containerRef,
        },
        React.createElement(Label, {
            label: label,
            labelAlignment: labelAlignment,
            hideLabel: hideLabel,
            required: required,
            inputId: inputId,
            readOnly: readOnly,
            id: labelId,
            size: size,
        }),
        React.createElement(
            StyledInputContainer,
            {
                disabled: disabled,
                readOnly: readOnly,
                error: error,
                isFocus: isFocus,
                borderRadius: borderRadius,
                size: size,
            },
            React.createElement(
                StyledTrigger,
                {
                    ref: triggerRef,
                    onClick: handleClick,
                    onFocus: function onFocus(event) {
                        return handleFocus(event, 0);
                    },
                    onBlur: handleBlur,
                    tabIndex: tabIndex,
                    disabled: disabled,
                    type: 'button',
                },
                React.createElement(
                    StyledFlagContainer,
                    {
                        disabled: disabled,
                    },
                    React.createElement(ColorSample, {
                        value: sampleColor,
                        size: size,
                    }),
                    React.createElement(StyledIndicator, {
                        error: error,
                        disabled: disabled,
                    }),
                ),
                React.createElement(AssistiveText, {
                    text: 'pick color',
                }),
            ),
            React.createElement(
                ColorInputContainer,
                null,
                React.createElement(StyledIconContainer, null, '#'),
                React.createElement(StyledInput, {
                    id: inputId,
                    ref: inputRef,
                    name: name,
                    type: 'text',
                    value: inputValue,
                    placeholder: placeholder,
                    tabIndex: tabIndex,
                    onFocus: function onFocus(event) {
                        return handleFocus(event, 2);
                    },
                    onBlur: handleBlur,
                    onClick: onClick,
                    onChange: handleChange,
                    disabled: disabled,
                    readOnly: readOnly,
                    required: required,
                    'aria-labelledby': labelId,
                    'aria-describedby': errorMessageId,
                    error: error,
                    isFocus: isFocus,
                    size: size,
                }),
            ),
            React.createElement(
                StyledAlpha,
                {
                    disabled: disabled,
                },
                React.createElement(StyledAlphaInput, {
                    type: 'number',
                    min: '0',
                    max: '100',
                    ref: alphaInputRef,
                    onFocus: function onFocus(event) {
                        return handleFocus(event, 3);
                    },
                    onBlur: handleBlur,
                    onChange: handleAlphaChange,
                    value: alphaValue,
                    size: size,
                }),
                '%',
            ),
        ),
        React.createElement(
            RenderIf,
            {
                isTrue: bottomHelpText,
            },
            React.createElement(
                HelpText,
                {
                    alignSelf: 'center',
                },
                bottomHelpText,
            ),
        ),
        React.createElement(
            RenderIf,
            {
                isTrue: error,
            },
            React.createElement(
                ErrorText,
                {
                    alignSelf: 'center',
                    id: errorMessageId,
                },
                error,
            ),
        ),
        React.createElement(
            InternalOverlay,
            {
                isVisible: isOpen,
                triggerElementRef: function triggerElementRef() {
                    return triggerRef;
                },
            },
            React.createElement(
                'div',
                {
                    ref: pickerRef,
                },
                React.createElement(
                    StyledCard,
                    {
                        borderRadius: borderRadius,
                    },
                    React.createElement(
                        StyledContent,
                        null,
                        React.createElement(ColorPicker, {
                            value: colorValue,
                            defaultColors: defaultColors,
                            variant: variant,
                            onChange: handleColorChange,
                        }),
                    ),
                ),
            ),
        ),
    );
};

ColorInput.toRgb = function(value) {
    var hex = value.hex;
    var arr = decomposeColor(hexToRgb(hex)).values;

    arr.toString = function() {
        return recomposeColor({
            type: 'rgb',
            values: arr,
        });
    };

    return arr;
};

ColorInput.toRgba = function(value) {
    var hex = value.hex,
        alpha = value.alpha;
    var arr = decomposeColor(hexToRgba(hex, alpha)).values;

    arr.toString = function() {
        return recomposeColor({
            type: 'rgba',
            values: arr,
        });
    };

    return arr;
};

ColorInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.shape({
        hex: PropTypes.string,
        alpha: PropTypes.number,
        isValid: PropTypes.bool,
    }),
    defaultColors: PropTypes.array,
    variant: PropTypes.oneOf(['default', 'colors-fixed']),
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    hideLabel: PropTypes.bool,
    placeholder: PropTypes.string,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    required: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
ColorInput.defaultProps = {
    id: undefined,
    value: {
        hex: '#000000',
        alpha: 1,
    },
    defaultColors: undefined,
    variant: 'default',
    tabIndex: 0,
    onChange: function onChange() {},
    className: undefined,
    style: undefined,
    name: undefined,
    placeholder: null,
    bottomHelpText: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
    onClick: function onClick() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onKeyDown: function onKeyDown() {},
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    size: 'medium',
    borderRadius: 'rounded',
};
export default ColorInput;
