'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgTajikistan(_ref) {
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
                    'M1.588 9.043A15.937 15.937 0 000 16c0 2.493.57 4.853 1.588 6.956L16 24.348l14.412-1.392A15.937 15.937 0 0032 16c0-2.493-.57-4.853-1.588-6.957L16 7.654 1.588 9.042z',
                fill: '#F0F0F0',
            }),
            _react['default'].createElement('path', {
                d: 'M1.588 22.956C4.176 28.308 9.657 32 16 32s11.824-3.692 14.412-9.044H1.588z',
                fill: '#6DA544',
            }),
            _react['default'].createElement('path', {
                d: 'M1.588 9.043h28.824C27.824 3.692 22.343 0 16 0S4.176 3.692 1.588 9.043z',
                fill: '#D80027',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#FFDA44',
                },
                _react['default'].createElement('path', {
                    d:
                        'M13.217 20.174h5.566v-2.365l-1.113.556-1.67-1.67-1.67 1.67-1.113-.556zM10.033 17.391l.26.797h.837l-.678.493.26.797-.679-.492-.678.492.26-.797-.679-.493h.838zM10.836 14.609l.26.797h.838l-.679.492.26.798-.679-.493-.678.493.26-.798-.679-.492h.838zM13.132 12.522l.26.797h.837l-.678.493.26.797-.679-.493-.678.493.259-.797-.678-.493h.838zM21.967 17.391l-.26.797h-.837l.678.493-.26.797.679-.492.678.492-.26-.797.679-.493h-.838zM21.164 14.609l-.26.797h-.837l.678.492-.26.798.679-.493.678.493-.26-.798.679-.492h-.838zM18.868 12.522l-.26.797h-.837l.678.493-.26.797.679-.493.678.493-.259-.797.678-.493h-.838zM16 11.478l.26.797h.837l-.678.493.26.797-.679-.492-.678.492.259-.797-.678-.493h.838z',
                }),
            ),
        ),
    );
}

SvgTajikistan.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgTajikistan.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgTajikistan;
exports['default'] = _default;
