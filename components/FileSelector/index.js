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

var _label = _interopRequireDefault(require('../Input/label'));

var _RenderIf = _interopRequireDefault(require('../RenderIf'));

var _helpText = _interopRequireDefault(require('../Input/styled/helpText'));

var _errorText = _interopRequireDefault(require('../Input/styled/errorText'));

var _styled = require('./styled');

var _icons = require('./icons');

var _hooks = require('../../libs/hooks');

var _icon = _interopRequireDefault(require('./icon'));

var _getText = _interopRequireDefault(require('./helpers/getText'));

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

var FileSelector = _react['default'].forwardRef(function(props, ref) {
    var _useReduxForm = (0, _hooks.useReduxForm)(props),
        className = _useReduxForm.className,
        style = _useReduxForm.style,
        id = _useReduxForm.id,
        name = _useReduxForm.name,
        label = _useReduxForm.label,
        error = _useReduxForm.error,
        uploadIcon = _useReduxForm.uploadIcon,
        bottomHelpText = _useReduxForm.bottomHelpText,
        placeholder = _useReduxForm.placeholder,
        tabIndex = _useReduxForm.tabIndex,
        required = _useReduxForm.required,
        multiple = _useReduxForm.multiple,
        disabled = _useReduxForm.disabled,
        variant = _useReduxForm.variant,
        labelAlignment = _useReduxForm.labelAlignment,
        hideLabel = _useReduxForm.hideLabel,
        accept = _useReduxForm.accept,
        onChange = _useReduxForm.onChange,
        onFocus = _useReduxForm.onFocus,
        onBlur = _useReduxForm.onBlur,
        value = _useReduxForm.value,
        size = _useReduxForm.size,
        borderRadius = _useReduxForm.borderRadius;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
        isDragOver = _useState2[0],
        setIsDragOver = _useState2[1];

    var _useState3 = (0, _react.useState)(),
        _useState4 = (0, _slicedToArray2['default'])(_useState3, 2),
        files = _useState4[0],
        setFiles = _useState4[1];

    var _useState5 = (0, _react.useState)(),
        _useState6 = (0, _slicedToArray2['default'])(_useState5, 2),
        hasFocus = _useState6[0],
        setHasFocus = _useState6[1];

    var inputId = (0, _hooks.useUniqueIdentifier)('input');
    var buttonId = (0, _hooks.useUniqueIdentifier)('cancel-button');
    var dropzoneId = (0, _hooks.useUniqueIdentifier)('dropzone');
    var labelId = (0, _hooks.useLabelId)(label);
    var errorMessageId = (0, _hooks.useErrorMessageId)(error);
    var inputRef = (0, _react.useRef)();
    (0, _react.useImperativeHandle)(ref, function() {
        return {
            focus: function focus() {
                inputRef.current.focus();
            },
            click: function click() {
                inputRef.current.click();
            },
            blur: function blur() {
                inputRef.current.blur();
            },
        };
    });

    var clearInput = function clearInput() {
        inputRef.current.value = '';

        if (!/safari/i.test(navigator.userAgent)) {
            inputRef.current.type = '';
            inputRef.current.type = 'file';
        }
    };

    var handleDragEnter = function handleDragEnter() {
        if (disabled) {
            return;
        }

        setIsDragOver(true);
    };

    var handleDragLeave = function handleDragLeave(event) {
        if (!event.relatedTarget || event.relatedTarget.id !== buttonId) {
            setIsDragOver(false);
        }
    };

    var handleDrop = function handleDrop(event) {
        setIsDragOver(false);
        setFiles(event.nativeEvent.dataTransfer.files);
    };

    var handleChange = function handleChange(event) {
        var eventFiles = event.target.files;
        setFiles(eventFiles);

        if (onChange) {
            onChange(eventFiles);
        }
    };

    var handleCancel = function handleCancel(event) {
        event.preventDefault();
        event.stopPropagation();
        var list = new DataTransfer();
        setFiles(list.files);
        clearInput();

        if (onChange) {
            onChange(list.files);
        }
    };

    var handleFocus = function handleFocus(event) {
        setHasFocus(true);
        onFocus(event);
    };

    var handleBlur = function handleBlur(event) {
        setHasFocus(false);
        onBlur(event);
    };

    var text = (0, _getText['default'])(files, placeholder, value);
    var isFileSelected = files && files.length > 0;
    var isSingleFile = files && files.length === 1;
    var shouldRenderCancel = isFileSelected && !isDragOver && value !== null;
    return _react['default'].createElement(
        _styled.StyledContainer,
        {
            id: id,
            className: className,
            style: style,
        },
        _react['default'].createElement(_label['default'], {
            label: label,
            labelAlignment: labelAlignment,
            hideLabel: hideLabel,
            required: required,
            inputId: inputId,
            id: labelId,
            size: size,
        }),
        _react['default'].createElement(
            _styled.StyledDropzone,
            {
                id: dropzoneId,
                variant: variant,
                isDragOver: isDragOver,
                hasFocus: hasFocus,
                disabled: disabled,
                error: error,
                size: size,
                borderRadius: borderRadius,
            },
            _react['default'].createElement(_styled.StyledInput, {
                type: 'file',
                id: inputId,
                name: name,
                multiple: multiple,
                disabled: disabled,
                required: required,
                onChange: handleChange,
                tabIndex: tabIndex,
                accept: accept,
                onFocus: handleFocus,
                onBlur: handleBlur,
                'aria-labelledby': labelId,
                'aria-describedby': errorMessageId,
                ref: inputRef,
                onDragEnter: handleDragEnter,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
            }),
            _react['default'].createElement(
                _styled.StyledBackdrop,
                {
                    isFileSelected: isFileSelected,
                    variant: variant,
                    size: size,
                    borderRadius: borderRadius,
                },
                _react['default'].createElement(
                    _styled.StyledIconContainer,
                    {
                        iconPosition: 'left',
                        isSingleFile: isSingleFile,
                        variant: variant,
                        error: error,
                        disabled: disabled,
                        size: size,
                        isDragOver: isDragOver,
                    },
                    _react['default'].createElement(_icon['default'], {
                        files: files,
                        error: error,
                        isDragOver: isDragOver,
                        value: value,
                        uploadIcon: uploadIcon,
                    }),
                ),
                _react['default'].createElement(_styled.TruncatedText, null, text),
                _react['default'].createElement(
                    _RenderIf['default'],
                    {
                        isTrue: shouldRenderCancel,
                    },
                    _react['default'].createElement(
                        _styled.StyledIconContainer,
                        {
                            iconPosition: 'right',
                            size: size,
                        },
                        _react['default'].createElement(_styled.StyledButtonIcon, {
                            id: buttonId,
                            icon: _react['default'].createElement(_icons.CancelIcon, null),
                            onClick: handleCancel,
                            pickerVariant: variant,
                            sizeIcon: size,
                        }),
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

FileSelector.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
    id: _propTypes['default'].string,
    name: _propTypes['default'].string,
    label: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    error: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    uploadIcon: _propTypes['default'].node,
    bottomHelpText: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    placeholder: _propTypes['default'].string,
    tabIndex: _propTypes['default'].oneOfType([
        _propTypes['default'].number,
        _propTypes['default'].string,
    ]),
    required: _propTypes['default'].bool,
    multiple: _propTypes['default'].bool,
    disabled: _propTypes['default'].bool,
    variant: _propTypes['default'].oneOf(['inline', 'multiline']),
    labelAlignment: _propTypes['default'].oneOf(['left', 'center', 'right']),
    hideLabel: _propTypes['default'].bool,
    accept: _propTypes['default'].string,
    onChange: _propTypes['default'].func,
    onFocus: _propTypes['default'].func,
    onBlur: _propTypes['default'].func,
    value: _propTypes['default'].object,
    size: _propTypes['default'].oneOf(['small', 'medium', 'large']),
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
FileSelector.defaultProps = {
    className: undefined,
    style: undefined,
    id: undefined,
    name: undefined,
    label: undefined,
    error: undefined,
    uploadIcon: undefined,
    bottomHelpText: undefined,
    placeholder: 'Drag & Drop or Click to Browse',
    tabIndex: undefined,
    required: false,
    multiple: false,
    disabled: false,
    variant: 'inline',
    labelAlignment: 'center',
    hideLabel: false,
    accept: undefined,
    value: undefined,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    size: 'medium',
    borderRadius: 'rounded',
};
var _default = FileSelector;
exports['default'] = _default;
