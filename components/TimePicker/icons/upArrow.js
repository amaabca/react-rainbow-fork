'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = UpArrow;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function UpArrow(_ref) {
    var className = _ref.className;
    return _react['default'].createElement(
        'svg',
        {
            width: '8px',
            height: '5px',
            viewBox: '0 0 8 5',
            className: className,
        },
        _react['default'].createElement(
            'g',
            {
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
            },
            _react['default'].createElement(
                'g',
                {
                    id: 'Components-Datepicker-open-clock-3',
                    transform: 'translate(-622.000000, -276.000000)',
                    fill: 'currentColor',
                    fillRule: 'nonzero',
                },
                _react['default'].createElement(
                    'g',
                    {
                        transform: 'translate(380.000000, 256.000000)',
                    },
                    _react['default'].createElement(
                        'g',
                        {
                            transform: 'translate(235.000000, 10.000000)',
                        },
                        _react['default'].createElement(
                            'g',
                            null,
                            _react['default'].createElement(
                                'g',
                                {
                                    transform:
                                        'translate(11.275000, 11.893750) rotate(-450.000000) translate(-11.275000, -11.893750) translate(8.868750, 7.768750)',
                                },
                                _react['default'].createElement('path', {
                                    d:
                                        'M0.482052941,7.67294706 C0.369188235,7.67294706 0.255870588,7.62995882 0.1694,7.54328235 C-0.00329411765,7.37058824 -0.00329411765,7.09112353 0.1694,6.91842941 L3.23095294,3.85708235 L0.1694,0.795529412 C-0.00329411765,0.622835294 -0.00329411765,0.343123529 0.1694,0.170676471 C0.342094118,-0.00201764706 0.621805882,-0.00201764706 0.794458824,0.170676471 L4.16821176,3.54442941 C4.34090588,3.71712353 4.34090588,3.99683529 4.16821176,4.16928235 L0.794458824,7.54324118 C0.708276471,7.62971176 0.595164706,7.67294706 0.482052941,7.67294706 Z',
                                }),
                            ),
                        ),
                    ),
                ),
            ),
        ),
    );
}

UpArrow.propTypes = {
    className: _propTypes['default'].string,
};
UpArrow.defaultProps = {
    className: undefined,
};
