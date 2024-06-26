'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgTaiwan(_ref) {
    var className = _ref.className,
        style = _ref.style;
    return _react['default'].createElement(
        'svg',
        {
            width: 31,
            height: 31,
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
                    'M31 15.5C31 24.06 24.06 31 15.5 31 6.94 31 0 24.06 0 15.5L15.5 0C24.06 0 31 6.94 31 15.5z',
                fill: '#D80027',
            }),
            _react['default'].createElement('path', {
                d: 'M15.5 15.5V0C6.94 0 0 6.94 0 15.5h15.5z',
                fill: '#0052B4',
            }),
            _react['default'].createElement('path', {
                fill: '#F0F0F0',
                d:
                    'M13.478 9.071l-1.893.89 1.008 1.834-2.055-.393-.26 2.076-1.432-1.527-1.432 1.527-.26-2.076-2.056.393 1.008-1.833-1.893-.89 1.893-.891-1.008-1.834 2.055.394.26-2.077 1.433 1.527 1.431-1.527.26 2.077 2.056-.394-1.008 1.834z',
            }),
            _react['default'].createElement('circle', {
                fill: '#0052B4',
                cx: 8.846,
                cy: 9.071,
                r: 2.885,
            }),
            _react['default'].createElement('path', {
                d:
                    'M8.846 10.609A1.54 1.54 0 017.308 9.07c0-.848.69-1.537 1.538-1.537.847 0 1.537.69 1.537 1.537a1.54 1.54 0 01-1.537 1.538z',
                fill: '#F0F0F0',
            }),
        ),
    );
}

SvgTaiwan.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgTaiwan.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgTaiwan;
exports['default'] = _default;
