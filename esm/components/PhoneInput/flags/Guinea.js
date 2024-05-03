import React from 'react';
import PropTypes from 'prop-types';

function SvgGuinea(_ref) {
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
                    'M21.565.995A15.965 15.965 0 0016 0c-1.957 0-3.832.352-5.565.995L9.739 16l.696 15.005c1.733.643 3.608.995 5.565.995 1.957 0 3.832-.352 5.565-.995L22.261 16 21.565.995z',
                fill: '#FFDA44',
            }),
            React.createElement('path', {
                d: 'M0 16c0 6.88 4.342 12.744 10.435 15.005V.995C4.342 3.255 0 9.121 0 16z',
                fill: '#D80027',
            }),
            React.createElement('path', {
                d: 'M32 16C32 9.12 27.658 3.256 21.565.995v30.01C27.658 28.745 32 22.879 32 16z',
                fill: '#6DA544',
            }),
        ),
    );
}

SvgGuinea.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
SvgGuinea.defaultProps = {
    className: undefined,
    style: undefined,
};
export default SvgGuinea;
