'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _hooks = require('@rainbow-modules/hooks');

var _label = _interopRequireDefault(require('../Input/label'));

var _hooks2 = require('../../libs/hooks');

var _styled = require('./styled');

var _InternalOverlay = _interopRequireDefault(require('../InternalOverlay'));

var _RenderIf = _interopRequireDefault(require('../RenderIf'));

var _helpText = _interopRequireDefault(require('../Input/styled/helpText'));

var _errorText = _interopRequireDefault(require('../Input/styled/errorText'));

var _plus = _interopRequireDefault(require('./icons/plus'));

var _constants = require('../../libs/constants');

var _helpers = require('./helpers');

var _normalizeValue = _interopRequireDefault(require('./helpers/normalizeValue'));

var _content = _interopRequireDefault(require('./content'));

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

var MultiSelect = _react['default'].forwardRef(function(props, ref) {
    var _useReduxForm = (0, _hooks2.useReduxForm)(props),
        id = _useReduxForm.id,
        className = _useReduxForm.className,
        style = _useReduxForm.style,
        label = _useReduxForm.label,
        labelAlignment = _useReduxForm.labelAlignment,
        hideLabel = _useReduxForm.hideLabel,
        placeholder = _useReduxForm.placeholder,
        error = _useReduxForm.error,
        bottomHelpText = _useReduxForm.bottomHelpText,
        required = _useReduxForm.required,
        disabled = _useReduxForm.disabled,
        readOnly = _useReduxForm.readOnly,
        tabIndex = _useReduxForm.tabIndex,
        variant = _useReduxForm.variant,
        chipVariant = _useReduxForm.chipVariant,
        isBare = _useReduxForm.isBare,
        isLoading = _useReduxForm.isLoading,
        value = _useReduxForm.value,
        onChange = _useReduxForm.onChange,
        onFocus = _useReduxForm.onFocus,
        onBlur = _useReduxForm.onBlur,
        children = _useReduxForm.children,
        showCheckbox = _useReduxForm.showCheckbox,
        enableSearch = _useReduxForm.enableSearch,
        size = _useReduxForm.size,
        borderRadius = _useReduxForm.borderRadius;

    var triggerRef = (0, _react.useRef)();
    var dropdownContainerRef = (0, _react.useRef)();
    var dropdownRef = (0, _react.useRef)();
    var comboboxRef = (0, _react.useRef)();
    var inputRef = (0, _react.useRef)();
    (0, _react.useImperativeHandle)(ref, function() {
        return {
            focus: function focus() {
                triggerRef.current.focus();
            },
            click: function click() {
                triggerRef.current.click();
            },
            blur: function blur() {
                triggerRef.current.blur();
            },
        };
    });

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

    var labelId = (0, _hooks2.useLabelId)('label');
    var comboboxId = (0, _hooks2.useUniqueIdentifier)('combobox');
    var dropdownId = (0, _hooks2.useUniqueIdentifier)('dropdown');
    var inputId = (0, _hooks2.useUniqueIdentifier)('input');
    var errorMessageId = (0, _hooks2.useErrorMessageId)();

    var closeAndFocusInput = function closeAndFocusInput() {
        setIsOpen(false);
        setTimeout(function() {
            return triggerRef.current.focus();
        }, 0);
    };

    var handleChange = function handleChange(val) {
        if (!showCheckbox) {
            closeAndFocusInput();
        }

        return onChange((0, _normalizeValue['default'])(val));
    };

    var handleDelete = function handleDelete(option) {
        if (Array.isArray(value)) {
            return handleChange(
                value.filter(function(val) {
                    return val !== option;
                }),
            );
        }

        return handleChange([]);
    };

    var toggleDropdown = function toggleDropdown() {
        if (disabled || readOnly) return;
        setIsOpen(!isOpen);
    };

    var handleKeyDown = function handleKeyDown(event) {
        if (isOpen) {
            if (
                event.keyCode === _constants.ESCAPE_KEY ||
                (event.keyCode === _constants.TAB_KEY &&
                    !(showCheckbox && event.target.tagName !== 'BUTTON'))
            ) {
                event.preventDefault();
                closeAndFocusInput();
            }
        }

        if (event.target !== comboboxRef.current) return;

        if (event.keyCode === _constants.ENTER_KEY || event.keyCode === _constants.SPACE_KEY) {
            event.preventDefault();
            toggleDropdown();
        }
    };

    var handleClick = function handleClick() {
        if (disabled) {
            return;
        }

        if (isOpen) {
            dropdownRef.current.focus();
            return;
        }

        if (readOnly) {
            inputRef.current.focus();
            return;
        }

        triggerRef.current.focus();
    };

    var handleTriggerClick = function handleTriggerClick(event) {
        event.preventDefault();
        toggleDropdown();
    };

    var handleFocus = function handleFocus() {
        if (!readOnly) {
            triggerRef.current.focus();
        }
    };

    var handleBlur = function handleBlur() {
        if (!readOnly) {
            triggerRef.current.blur();
        }
    };

    (0, _hooks.useOutsideClick)(
        dropdownContainerRef,
        function(event) {
            if (
                event.target !== triggerRef.current.buttonRef.current &&
                !triggerRef.current.buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        },
        isOpen,
    );
    (0, _hooks2.useWindowResize)(function() {
        return setIsOpen(false);
    }, isOpen);

    var _useState3 = (0, _react.useState)(),
        _useState4 = (0, _slicedToArray2['default'])(_useState3, 2),
        chipsBoundingRect = _useState4[0],
        setChipsBoundingRect = _useState4[1];

    var refCallback = function refCallback(element) {
        if (element) {
            var elementRect = JSON.stringify(element.getBoundingClientRect());

            if (!chipsBoundingRect || chipsBoundingRect !== elementRect) {
                setChipsBoundingRect(elementRect);
            }
        }
    };

    var selectedCount = Array.isArray(value) ? value.length : 1;
    var shouldRenderContent = (0, _helpers.hasContent)(value);
    var shouldRenderCount = !!value && selectedCount > 0 && variant === 'default';
    var shouldRenderButton = !readOnly && !disabled;
    var inputTabIndex = readOnly ? tabIndex : '-1';
    var dropdownWidth = comboboxRef.current ? comboboxRef.current.offsetWidth : 0;
    var sizeButton = (0, _helpers.getSizeButton)(size);
    return _react['default'].createElement(
        _styled.StyledContainer,
        {
            id: id,
            className: className,
            style: style,
        },
        _react['default'].createElement(_label['default'], {
            id: labelId,
            label: label,
            labelAlignment: labelAlignment,
            hideLabel: hideLabel,
            required: required,
            inputId: inputId,
            size: size,
        }),
        _react['default'].createElement(
            _styled.StyledCombobox,
            {
                id: comboboxId,
                isBare: isBare,
                error: error,
                disabled: disabled,
                role: 'combobox',
                'aria-controls': dropdownId,
                'aria-expanded': isOpen,
                onClick: handleClick,
                onKeyDown: handleKeyDown,
                ref: comboboxRef,
                'aria-labelledby': labelId,
                variant: variant,
                size: size,
                borderRadius: borderRadius,
            },
            _react['default'].createElement(_styled.StyledInput, {
                id: inputId,
                role: 'textbox',
                'aria-autocomplete': 'none',
                tabIndex: inputTabIndex,
                disabled: disabled,
                onFocus: handleFocus,
                onBlur: handleBlur,
                ref: inputRef,
                readOnly: true,
            }),
            _react['default'].createElement(
                _styled.StyledChipContainer,
                {
                    ref: refCallback,
                },
                _react['default'].createElement(
                    _RenderIf['default'],
                    {
                        isTrue: !shouldRenderContent,
                    },
                    _react['default'].createElement(
                        _styled.StyledPlaceholder,
                        {
                            size: size,
                        },
                        placeholder,
                    ),
                ),
                _react['default'].createElement(
                    _RenderIf['default'],
                    {
                        isTrue: shouldRenderContent,
                    },
                    _react['default'].createElement(_content['default'], {
                        variant: variant,
                        chipVariant: chipVariant,
                        readOnly: readOnly,
                        disabled: disabled,
                        value: value,
                        onDelete: handleDelete,
                        size: size,
                        borderRadius: borderRadius,
                    }),
                ),
            ),
            _react['default'].createElement(
                _RenderIf['default'],
                {
                    isTrue: shouldRenderCount,
                },
                _react['default'].createElement(
                    _styled.StyledCountText,
                    {
                        readOnly: readOnly,
                        size: size,
                    },
                    '(',
                    selectedCount,
                    ')',
                ),
            ),
            _react['default'].createElement(
                _RenderIf['default'],
                {
                    isTrue: shouldRenderButton,
                },
                _react['default'].createElement(_styled.StyledButtonIcon, {
                    title: 'Add',
                    variant: 'neutral',
                    size: sizeButton,
                    icon: _react['default'].createElement(_plus['default'], null),
                    onClick: handleTriggerClick,
                    disabled: disabled,
                    ref: triggerRef,
                    tabIndex: tabIndex,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    sizeIcon: size,
                    borderRadius: borderRadius,
                }),
            ),
            _react['default'].createElement(
                _InternalOverlay['default'],
                {
                    isVisible: isOpen,
                    positionResolver: _helpers.positionResolver,
                    onOpened: function onOpened() {
                        return dropdownRef.current.focus();
                    },
                    triggerElementRef: function triggerElementRef() {
                        return comboboxRef;
                    },
                },
                _react['default'].createElement(
                    'div',
                    {
                        ref: dropdownContainerRef,
                    },
                    _react['default'].createElement(
                        _styled.StyledDropdown,
                        {
                            id: dropdownId,
                            value: value,
                            isLoading: isLoading,
                            onChange: handleChange,
                            ref: dropdownRef,
                            width: dropdownWidth,
                            placeholder: placeholder,
                            showCheckbox: showCheckbox,
                            enableSearch: enableSearch,
                            borderRadius: borderRadius,
                            multiple: true,
                        },
                        children,
                    ),
                ),
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
    );
});

MultiSelect.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
    label: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    labelAlignment: _propTypes['default'].oneOf(['left', 'center', 'right']),
    hideLabel: _propTypes['default'].bool,
    placeholder: _propTypes['default'].string,
    error: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    bottomHelpText: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    required: _propTypes['default'].bool,
    disabled: _propTypes['default'].bool,
    isLoading: _propTypes['default'].bool,
    readOnly: _propTypes['default'].bool,
    tabIndex: _propTypes['default'].oneOfType([
        _propTypes['default'].number,
        _propTypes['default'].string,
    ]),
    variant: _propTypes['default'].oneOf(['default', 'chip', 'bare']),
    enableSearch: _propTypes['default'].bool,
    chipVariant: _propTypes['default'].oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    value: _propTypes['default'].arrayOf(
        _propTypes['default'].shape({
            name: _propTypes['default'].oneOfType([
                _propTypes['default'].string,
                _propTypes['default'].number,
            ]),
            label: _propTypes['default'].string,
            value: _propTypes['default'].any,
        }),
    ),
    onChange: _propTypes['default'].func,
    onFocus: _propTypes['default'].func,
    onBlur: _propTypes['default'].func,
    children: _propTypes['default'].node,
    size: _propTypes['default'].oneOf(['small', 'medium', 'large']),
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
MultiSelect.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    placeholder: null,
    error: null,
    bottomHelpText: null,
    required: false,
    disabled: false,
    readOnly: false,
    isLoading: false,
    tabIndex: 0,
    variant: 'default',
    enableSearch: false,
    chipVariant: 'base',
    value: undefined,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    children: null,
    size: 'medium',
    borderRadius: 'rounded',
};
var _default = MultiSelect;
exports['default'] = _default;
