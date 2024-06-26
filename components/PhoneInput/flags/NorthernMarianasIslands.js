'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgNorthernMarianasIslands(_ref) {
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
            _react['default'].createElement('circle', {
                fill: '#338AF3',
                cx: 16,
                cy: 16,
                r: 16,
            }),
            _react['default'].createElement('path', {
                d:
                    'M15.496 26.074a1.042 1.042 0 01-.928-.681 1.045 1.045 0 01-1.862-.48 1.045 1.045 0 01-1.726-.847 1.043 1.043 0 01-1.52-1.176 1.043 1.043 0 01-1.254-1.456 1.044 1.044 0 01-.934-1.68 1.043 1.043 0 01-.577-1.833 1.043 1.043 0 01-.196-1.91 1.044 1.044 0 01-.537-1.019h.001c.042-.43.34-.772.728-.894a1.044 1.044 0 01.572-1.835 1.045 1.045 0 01.932-1.68 1.043 1.043 0 011.25-1.46 1.043 1.043 0 011.517-1.179 1.044 1.044 0 011.725-.85 1.044 1.044 0 011.859-.484 1.044 1.044 0 011.919-.1 1.044 1.044 0 011.9.287 1.044 1.044 0 011.804.665 1.043 1.043 0 011.632 1.014 1.044 1.044 0 011.395 1.321 1.044 1.044 0 011.102 1.574 1.045 1.045 0 01.762 1.765 1.043 1.043 0 01.39 1.882c.373.158.636.527.637.959V16c0 .43-.262.801-.634.96a1.043 1.043 0 01-.387 1.883 1.044 1.044 0 01-.758 1.766 1.044 1.044 0 01-1.098 1.577 1.045 1.045 0 01-1.392 1.325 1.045 1.045 0 01-1.63 1.017 1.044 1.044 0 01-1.802.669 1.044 1.044 0 01-1.9.29 1.043 1.043 0 01-.99.587z',
                fill: '#F3F3F3',
            }),
            _react['default'].createElement('circle', {
                fill: '#338AF3',
                cx: 16,
                cy: 16,
                r: 6.957,
            }),
            _react['default'].createElement('path', {
                d:
                    'M17.523 13.639c.341-.254.564-.659.564-1.117v-.696c0-.768-.623-1.391-1.391-1.391h-1.392c-.768 0-1.39.623-1.39 1.391v.696c0 .458.222.863.563 1.117l-1.26 12.796s.696.696 2.783.696c2.087 0 2.783-.696 2.783-.696l-1.26-12.796z',
                fill: '#BDBCC1',
            }),
            _react['default'].createElement('path', {
                fill: '#F0F0F0',
                d:
                    'M16 10.435l1.209 3.72h3.911l-3.164 2.299 1.208 3.72-3.164-2.3-3.165 2.3 1.21-3.72-3.165-2.3h3.911z',
            }),
        ),
    );
}

SvgNorthernMarianasIslands.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgNorthernMarianasIslands.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgNorthernMarianasIslands;
exports['default'] = _default;
