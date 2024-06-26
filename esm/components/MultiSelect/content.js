import React from 'react';
import PropTypes from 'prop-types';
import { getContent } from './helpers';
import { StyledText } from './styled';
import Chips from './chips';

var Content = function Content(props) {
    var variant = props.variant,
        value = props.value,
        chipVariant = props.chipVariant,
        readOnly = props.readOnly,
        disabled = props.disabled,
        onDelete = props.onDelete,
        size = props.size,
        borderRadius = props.borderRadius;

    if (variant === 'chip') {
        return React.createElement(Chips, {
            value: value,
            variant: chipVariant,
            readOnly: readOnly,
            disabled: disabled,
            onDelete: onDelete,
            borderRadius: borderRadius,
            size: size,
        });
    }

    var content = getContent(value);
    return React.createElement(
        StyledText,
        {
            size: size,
        },
        content,
    );
};

Content.propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    variant: PropTypes.oneOf(['default', 'chip']),
    chipVariant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    value: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
            value: PropTypes.any,
        }),
    ),
    onDelete: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
Content.defaultProps = {
    disabled: false,
    readOnly: false,
    variant: 'default',
    chipVariant: 'base',
    value: undefined,
    onDelete: function onDelete() {},
    size: 'medium',
    borderRadius: 'rounded',
};
export default Content;
