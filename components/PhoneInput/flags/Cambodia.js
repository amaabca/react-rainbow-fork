'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgCambodia(_ref) {
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
                    'M0 16c0 2.772.705 5.379 1.945 7.652L16 25.044l14.055-1.392A15.929 15.929 0 0032 16c0-2.772-.705-5.379-1.945-7.652L16 6.956 1.945 8.348A15.929 15.929 0 000 16z',
                fill: '#D80027',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#0052B4',
                },
                _react['default'].createElement('path', {
                    d:
                        'M1.945 8.348h28.11C27.34 3.374 22.065 0 16 0 9.935 0 4.66 3.374 1.945 8.348zM16 32c6.065 0 11.34-3.374 14.055-8.348H1.945C4.66 28.626 9.935 32 16 32z',
                }),
            ),
            _react['default'].createElement('path', {
                fill: '#F0F0F0',
                d:
                    'M21.565 19.13v-2.086h-1.391V14.26l-1.391-1.391-1.392 1.39v-2.782L16 10.087l-1.391 1.391v2.783l-1.392-1.391-1.39 1.39v2.784h-1.392v2.086H9.043v2.087h13.913V19.13z',
            }),
        ),
    );
}

SvgCambodia.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgCambodia.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgCambodia;
exports['default'] = _default;
