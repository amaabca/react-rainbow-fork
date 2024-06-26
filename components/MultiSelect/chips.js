'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _styled = require('./styled');

var Chips = function Chips(props) {
    var value = props.value,
        variant = props.variant,
        onDelete = props.onDelete,
        disabled = props.disabled,
        readOnly = props.readOnly,
        size = props.size,
        borderRadius = props.borderRadius;

    var getDeleteCallback = function getDeleteCallback(val) {
        return disabled || readOnly
            ? null
            : function() {
                  return onDelete(val);
              };
    };

    if (!value) {
        return null;
    }

    if (Array.isArray(value)) {
        return value.map(function(val) {
            return _react['default'].createElement(_styled.StyledChip, {
                key: val.name,
                label: val.label,
                variant: variant,
                onDelete: getDeleteCallback(val),
                size: size,
                borderRadius: borderRadius,
            });
        });
    }

    return _react['default'].createElement(_styled.StyledChip, {
        label: value.label,
        variant: variant,
        onDelete: getDeleteCallback(value),
    });
};

Chips.propTypes = {
    value: _propTypes['default'].oneOfType([
        _propTypes['default'].shape({
            name: _propTypes['default'].string,
            label: _propTypes['default'].string,
        }),
        _propTypes['default'].arrayOf(
            _propTypes['default'].shape({
                name: _propTypes['default'].string,
                label: _propTypes['default'].string,
            }),
        ),
    ]),
    variant: _propTypes['default'].oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    disabled: _propTypes['default'].bool,
    readOnly: _propTypes['default'].bool,
    onDelete: _propTypes['default'].func,
    size: _propTypes['default'].oneOf(['small', 'medium', 'large']),
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
Chips.defaultProps = {
    value: undefined,
    variant: 'base',
    disabled: undefined,
    readOnly: undefined,
    onDelete: function onDelete() {},
    size: 'medium',
    borderRadius: 'rounded',
};
var _default = Chips;
exports['default'] = _default;
