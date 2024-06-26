import React from 'react';
import PropTypes from 'prop-types';

function SvgUnitedKingdom(_ref) {
    var className = _ref.className,
        style = _ref.style;
    return React.createElement(
        'svg',
        {
            width: 32,
            height: 32,
            viewBox: '0 0 32 32',
            className: className,
            style: style,
        },
        React.createElement(
            'g',
            {
                fillRule: 'nonzero',
                fill: 'none',
            },
            React.createElement('path', {
                d:
                    'M.501 12.178C2.618 3.62 11.265-1.592 19.822.525c8.558 2.117 13.77 10.764 11.653 19.321-2.117 8.55-10.764 13.77-19.321 11.653C3.604 29.374-1.616 20.727.5 12.178',
                fill: '#223C72',
            }),
            React.createElement('path', {
                d:
                    'M27.305 4.76L20.89 9.034V.824a15.896 15.896 0 00-9.842.008v8.202L4.654 4.776a15.804 15.804 0 00-3.459 5.26l1.689 1.132H.784c-.105.331-.202.67-.283 1.01a15.867 15.867 0 00.331 8.832h2.093l-1.672 1.115a15.867 15.867 0 003.515 5.22l6.278-4.185v8.008c.364.12.736.226 1.108.315a15.9 15.9 0 008.735-.3V23.16l6.303 4.202a15.835 15.835 0 003.523-5.22l-1.705-1.14h2.133a15.934 15.934 0 00.057-9.85h-2.141l1.729-1.148a16.303 16.303 0 00-3.483-5.244',
                fill: '#EFEBE7',
            }),
            React.createElement('path', {
                d:
                    'M8.59 11.16L2.667 7.216A15.915 15.915 0 001.6 9.1l3.095 2.06H8.59zm20.695-3.968a16.74 16.74 0 00-1.317-1.721l-7.08 4.71v.979h2.425l5.972-3.968zM2.707 24.848c.396.598.84 1.172 1.317 1.714l7.014-4.663v-.889H8.485l-5.778 3.838zm28.994-11.636H18.844V.307a15.962 15.962 0 00-5.745 0v12.897H.283a15.954 15.954 0 00.024 5.745h12.784v12.736c1.947.363 3.887.347 5.745.016V18.949h12.825c.371-1.939.371-3.878.04-5.737zm-8.25 7.798l5.802 3.863c.395-.598.76-1.22 1.074-1.875l-2.982-1.988h-3.894z',
                fill: '#EF3827',
            }),
            React.createElement('path', {
                d: 'M20.889 2.489v1.034c.333-.194.5-.38.5-.557 0-.17-.167-.332-.5-.477',
                fill: '#303F66',
            }),
        ),
    );
}

SvgUnitedKingdom.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
SvgUnitedKingdom.defaultProps = {
    className: undefined,
    style: undefined,
};
export default SvgUnitedKingdom;
