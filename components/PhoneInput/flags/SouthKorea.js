'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgSouthKorea(_ref) {
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
                fill: '#F0F0F0',
                cx: 16,
                cy: 16,
                r: 16,
            }),
            _react['default'].createElement('path', {
                d:
                    'M21.565 16c0 1.391-2.491 4.87-5.565 4.87-3.074 0-5.565-3.479-5.565-4.87a5.565 5.565 0 1111.13 0z',
                fill: '#D80027',
            }),
            _react['default'].createElement('path', {
                d: 'M21.565 16a5.565 5.565 0 11-11.13 0',
                fill: '#0052B4',
            }),
            _react['default'].createElement('path', {
                fill: '#000',
                d:
                    'M21.902 20.919l1.476-1.476.984.984-1.476 1.475zM19.443 23.379l1.475-1.476.984.984-1.476 1.475zM24.854 23.87l1.476-1.476.984.983-1.476 1.476zM22.394 26.33l1.476-1.476.984.983-1.476 1.476zM23.379 22.394l1.475-1.475.984.983-1.476 1.476zM20.92 24.854l1.476-1.476.983.984-1.476 1.476zM24.854 11.08L20.92 7.147l.984-.984 3.935 3.935zM20.92 10.098l-1.476-1.476.984-.984 1.475 1.476zM23.379 12.557l-1.476-1.476.984-.983 1.475 1.476zM23.87 7.146L22.394 5.67l.984-.983 1.476 1.475zM26.33 9.605L24.854 8.13l.984-.984 1.476 1.476zM5.67 22.395l3.935 3.935-.984.984-3.935-3.936zM9.606 23.378l1.475 1.476-.983.984-1.476-1.476zM7.146 20.919l1.475 1.476-.983.983-1.476-1.476zM8.622 19.444l3.935 3.935-.984.983-3.935-3.935zM9.605 5.67L5.67 9.605l-.983-.984 3.935-3.935zM11.08 7.145L7.147 11.08l-.984-.983 3.935-3.935zM12.557 8.622l-3.935 3.935-.984-.984 3.935-3.935z',
            }),
        ),
    );
}

SvgSouthKorea.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgSouthKorea.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgSouthKorea;
exports['default'] = _default;
