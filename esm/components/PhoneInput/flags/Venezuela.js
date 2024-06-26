import React from 'react';
import PropTypes from 'prop-types';

function SvgVenezuela(_ref) {
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
                    'M30.412 22.956A15.936 15.936 0 0032 16c0-2.493-.57-4.853-1.588-6.957L16 7.654 1.588 9.042A15.936 15.936 0 000 16c0 2.493.57 4.853 1.588 6.956L16 24.348l14.412-1.392z',
                fill: '#0052B4',
            }),
            React.createElement('path', {
                d: 'M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z',
                fill: '#D80027',
            }),
            React.createElement(
                'g',
                {
                    fill: '#F0F0F0',
                },
                React.createElement('path', {
                    d:
                        'M27.71 19.14l-.845.661.367 1.008-.89-.6-.844.66.295-1.03-.889-.6 1.072-.038.296-1.03.367 1.007zM25.546 15.393l-.568.91.69.82-1.041-.259-.569.91-.074-1.07-1.041-.26.994-.401-.074-1.07.69.821zM22.23 12.61l-.222 1.05.929.536-1.067.112-.223 1.05-.436-.98-1.067.111.797-.717-.436-.98.929.536zM18.164 11.13l.15 1.062 1.055.187-.963.47.149 1.062-.745-.772-.964.47.503-.946-.745-.772 1.057.186zM13.836 11.13l.504.947 1.056-.186-.745.772.503.947-.964-.47-.745.77.15-1.061-.964-.47 1.056-.186zM9.77 12.61l.796.718.929-.536-.436.98.797.718-1.067-.113-.436.98-.223-1.049-1.067-.112.93-.536zM6.454 15.393l.994.401.69-.821-.075 1.07.994.402-1.04.26-.075 1.069-.569-.91-1.04.26.69-.822zM4.29 19.14l1.072.038.366-1.007.296 1.03 1.072.038-.89.6.296 1.03-.845-.66-.889.6.367-1.008z',
                }),
            ),
            React.createElement('path', {
                d: 'M30.412 9.043C27.824 3.692 22.343 0 16 0S4.176 3.692 1.588 9.043h28.824z',
                fill: '#FFDA44',
            }),
        ),
    );
}

SvgVenezuela.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
SvgVenezuela.defaultProps = {
    className: undefined,
    style: undefined,
};
export default SvgVenezuela;
