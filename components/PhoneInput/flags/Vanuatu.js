'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgVanuatu(_ref) {
    var className = _ref.className,
        style = _ref.style;
    return _react['default'].createElement(
        'svg',
        {
            width: 32,
            height: 32,
            viewBox: '0 0 32 32',
            className: className,
            style: style,
        },
        _react['default'].createElement(
            'g',
            {
                fillRule: 'nonzero',
                fill: 'none',
            },
            _react['default'].createElement('path', {
                d:
                    'M31.875 15.938c0-.705-.046-1.399-.134-2.079H13.859l-9.191-9.19c-6.224 6.223-6.224 16.314 0 22.539l9.19-9.191h17.883c.088-.68.134-1.375.134-2.08z',
                fill: '#000',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#F0F0F0',
                },
                _react['default'].createElement('path', {
                    d:
                        'M32.027 17.083c-.026.167-.05.334-.08.5.03-.166.054-.333.08-.5zM31.831 14.2c.047.167.094.334.137.5-.043-.166-.09-.333-.137-.5zM31.947 14.658c.03.167.054.333.08.5-.026-.167-.05-.333-.08-.5z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M31.74 13.859c.008.055.014.11.02.164C30.816 6.123 24.093 0 15.939 0a15.888 15.888 0 00-11.27 4.668l9.19 9.191h17.883z',
                fill: '#D80027',
            }),
            _react['default'].createElement('path', {
                d:
                    'M31.74 18.017H13.859l-9.19 9.19a15.888 15.888 0 0011.27 4.669c8.154 0 14.877-6.124 15.823-14.024l-.02.165z',
                fill: '#6DA544',
            }),
            _react['default'].createElement('path', {
                d: 'M31.917 17.515c-.042.167-.09.333-.136.5.047-.167.094-.333.136-.5z',
                fill: '#F0F0F0',
            }),
            _react['default'].createElement('path', {
                d:
                    'M31.834 14.792zM31.76 14.023zM31.798 14.36zM31.907 15.938zM31.964 16.827zM32.01 17.217zM31.924 17.675zM31.87 15.575zM31.856 15.14zM31.96 16.393z',
                fill: '#000',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#FFDA44',
                },
                _react['default'].createElement('path', {
                    d:
                        'M31.86 15.24H13.273L3.726 5.692c-.309.325-.643.78-.85 1.104l9.13 9.135-9.138 9.138c.181.322.575.799.852 1.109l9.553-9.554h18.59a16.106 16.106 0 00-.003-1.386z',
                }),
                _react['default'].createElement('path', {
                    d:
                        'M3.872 19.335V18a2.419 2.419 0 002.415-2.416c0-.942-.766-1.709-1.709-1.709-.642 0-1.164.523-1.164 1.165 0 .41.334.744.744.744.232 0 .421-.189.421-.42h1.335c0 .968-.787 1.755-1.756 1.755a2.082 2.082 0 01-2.08-2.08c0-1.377 1.122-2.499 2.5-2.499a3.048 3.048 0 013.044 3.045 3.755 3.755 0 01-3.75 3.75z',
                }),
            ),
        ),
    );
}

SvgVanuatu.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgVanuatu.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgVanuatu;
exports['default'] = _default;
