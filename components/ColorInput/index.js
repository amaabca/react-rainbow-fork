'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _hooks = require('@rainbow-modules/hooks');

var _label = _interopRequireDefault(require('../Input/label'));

var _container = _interopRequireDefault(require('../Input/styled/container'));

var _InternalOverlay = _interopRequireDefault(require('../InternalOverlay'));

var _ColorPicker = _interopRequireDefault(require('../ColorPicker'));

var _styled = require('./styled');

var _hooks2 = require('../../libs/hooks');

var _styled2 = require('../PhoneInput/styled');

var _AssistiveText = _interopRequireDefault(require('../AssistiveText'));

var _RenderIf = _interopRequireDefault(require('../RenderIf'));

var _helpText = _interopRequireDefault(require('../Input/styled/helpText'));

var _errorText = _interopRequireDefault(require('../Input/styled/errorText'));

var _hooks3 = require('../PhoneInput/hooks');

var _colorSample = _interopRequireDefault(require('./colorSample'));

var _color = require('../../styles/helpers/color');

var _isHexColor = _interopRequireDefault(require('../../styles/helpers/color/isHexColor'));

var _iconContainer = _interopRequireDefault(require('../Input/styled/iconContainer'));

var _getHexString = _interopRequireDefault(require('./helpers/getHexString'));

var _getColorValue = _interopRequireDefault(require('./helpers/getColorValue'));

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj['default'] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

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
                  (0, _defineProperty2['default'])(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
    }
    return target;
}

var ColorInput = function ColorInput(props) {
    var _useReduxForm = (0, _hooks2.useReduxForm)(props),
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

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

    var _useState3 = (0, _react.useState)((0, _getColorValue['default'])(value)),
        _useState4 = (0, _slicedToArray2['default'])(_useState3, 2),
        colorValue = _useState4[0],
        setColorValue = _useState4[1];

    var _useState5 = (0, _react.useState)(value),
        _useState6 = (0, _slicedToArray2['default'])(_useState5, 2),
        sampleColor = _useState6[0],
        setSampleColor = _useState6[1];

    var pickerRef = (0, _react.useRef)();
    var containerRef = (0, _react.useRef)();
    var triggerRef = (0, _react.useRef)();
    var alphaInputRef = (0, _react.useRef)();
    var inputRef = (0, _react.useRef)();
    var inputId = (0, _hooks2.useUniqueIdentifier)('color-input');
    var errorMessageId = (0, _hooks2.useErrorMessageId)(error);
    var labelId = (0, _hooks2.useLabelId)(label);

    var _useFocusIndex = (0, _hooks3.useFocusIndex)(
            containerRef,
            triggerRef,
            inputRef,
            alphaInputRef,
        ),
        _useFocusIndex2 = (0, _slicedToArray2['default'])(_useFocusIndex, 2),
        focusIndex = _useFocusIndex2[0],
        setFocusIndex = _useFocusIndex2[1];

    (0, _hooks2.useOutsideClick)(
        containerRef,
        function() {
            setFocusIndex(-1);
        },
        focusIndex > -1,
    );
    (0, _hooks2.useOutsideClick)(
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
    (0, _hooks.useScrollingIntent)({
        callback: function callback() {
            return setIsOpen(false);
        },
        isListening: isOpen,
        triggerElementRef: function triggerElementRef() {
            return triggerRef;
        },
        threshold: 5,
    });
    (0, _hooks2.useWindowResize)(function() {
        return setIsOpen(false);
    }, isOpen);
    var onBlur = (0, _react.useCallback)(
        function() {
            var hex = value.hex;
            if (!(0, _isHexColor['default'])(hex)) setSampleColor(undefined);
            blurInProps(value);
        },
        [value, blurInProps],
    );
    var onFocus = (0, _react.useCallback)(
        function() {
            return focusInProps(value);
        },
        [value, focusInProps],
    );
    var handleFocus = (0, _hooks3.useHandleFocus)({
        focusIndex: focusIndex,
        onFocus: onFocus,
        setFocusIndex: setFocusIndex,
        value: value,
    });
    var handleBlur = (0, _hooks3.useHandleBlur)({
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
        var hex = (0, _getHexString['default'])(eventValue);
        var isValid = (0, _isHexColor['default'])(hex);
        var newValue = {
            hex: hex,
            alpha: alpha,
            isValid: isValid,
        };

        if (isValid) {
            setSampleColor(newValue);
            setColorValue((0, _getColorValue['default'])(newValue));
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
        setColorValue((0, _getColorValue['default'])(newValue));
        if (!Number.isNaN(alpha)) onChange(newValue);
    };

    var handleColorChange = function handleColorChange(color) {
        var hex = color.hex,
            rgba = color.rgba;
        var newValue = {
            hex: hex,
            alpha: rgba[3],
            isValid: (0, _isHexColor['default'])(hex),
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
    return _react['default'].createElement(
        _container['default'],
        {
            id: id,
            className: className,
            style: style,
            ref: containerRef,
        },
        _react['default'].createElement(_label['default'], {
            label: label,
            labelAlignment: labelAlignment,
            hideLabel: hideLabel,
            required: required,
            inputId: inputId,
            readOnly: readOnly,
            id: labelId,
            size: size,
        }),
        _react['default'].createElement(
            _styled2.StyledInputContainer,
            {
                disabled: disabled,
                readOnly: readOnly,
                error: error,
                isFocus: isFocus,
                borderRadius: borderRadius,
                size: size,
            },
            _react['default'].createElement(
                _styled2.StyledTrigger,
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
                _react['default'].createElement(
                    _styled2.StyledFlagContainer,
                    {
                        disabled: disabled,
                    },
                    _react['default'].createElement(_colorSample['default'], {
                        value: sampleColor,
                        size: size,
                    }),
                    _react['default'].createElement(_styled2.StyledIndicator, {
                        error: error,
                        disabled: disabled,
                    }),
                ),
                _react['default'].createElement(_AssistiveText['default'], {
                    text: 'pick color',
                }),
            ),
            _react['default'].createElement(
                _styled.ColorInputContainer,
                null,
                _react['default'].createElement(_iconContainer['default'], null, '#'),
                _react['default'].createElement(_styled.StyledInput, {
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
            _react['default'].createElement(
                _styled.StyledAlpha,
                {
                    disabled: disabled,
                },
                _react['default'].createElement(_styled.StyledAlphaInput, {
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
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: bottomHelpText,
            },
            _react['default'].createElement(
                _helpText['default'],
                {
                    alignSelf: 'center',
                },
                bottomHelpText,
            ),
        ),
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: error,
            },
            _react['default'].createElement(
                _errorText['default'],
                {
                    alignSelf: 'center',
                    id: errorMessageId,
                },
                error,
            ),
        ),
        _react['default'].createElement(
            _InternalOverlay['default'],
            {
                isVisible: isOpen,
                triggerElementRef: function triggerElementRef() {
                    return triggerRef;
                },
            },
            _react['default'].createElement(
                'div',
                {
                    ref: pickerRef,
                },
                _react['default'].createElement(
                    _styled.StyledCard,
                    {
                        borderRadius: borderRadius,
                    },
                    _react['default'].createElement(
                        _styled.StyledContent,
                        null,
                        _react['default'].createElement(_ColorPicker['default'], {
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
    var arr = (0, _color.decomposeColor)((0, _color.hexToRgb)(hex)).values;

    arr.toString = function() {
        return (0, _color.recomposeColor)({
            type: 'rgb',
            values: arr,
        });
    };

    return arr;
};

ColorInput.toRgba = function(value) {
    var hex = value.hex,
        alpha = value.alpha;
    var arr = (0, _color.decomposeColor)((0, _color.hexToRgba)(hex, alpha)).values;

    arr.toString = function() {
        return (0, _color.recomposeColor)({
            type: 'rgba',
            values: arr,
        });
    };

    return arr;
};

ColorInput.propTypes = {
    id: _propTypes['default'].string,
    value: _propTypes['default'].shape({
        hex: _propTypes['default'].string,
        alpha: _propTypes['default'].number,
        isValid: _propTypes['default'].bool,
    }),
    defaultColors: _propTypes['default'].array,
    variant: _propTypes['default'].oneOf(['default', 'colors-fixed']),
    onChange: _propTypes['default'].func,
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
    name: _propTypes['default'].string,
    label: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    labelAlignment: _propTypes['default'].oneOf(['left', 'center', 'right']),
    hideLabel: _propTypes['default'].bool,
    placeholder: _propTypes['default'].string,
    bottomHelpText: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    required: _propTypes['default'].bool,
    error: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    disabled: _propTypes['default'].bool,
    readOnly: _propTypes['default'].bool,
    tabIndex: _propTypes['default'].oneOfType([
        _propTypes['default'].number,
        _propTypes['default'].string,
    ]),
    onClick: _propTypes['default'].func,
    onFocus: _propTypes['default'].func,
    onBlur: _propTypes['default'].func,
    onKeyDown: _propTypes['default'].func,
    size: _propTypes['default'].oneOf(['small', 'medium', 'large']),
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
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
var _default = ColorInput;
exports['default'] = _default;
