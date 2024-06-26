'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgCaymanIslands(_ref) {
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
                    'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16C0 16.004 16 .002 16 0c8.837 0 16 7.163 16 16z',
                fill: '#0052B4',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#F0F0F0',
                },
                _react['default'].createElement('path', {
                    d:
                        'M16.019 0h-.022.022zM15.957 16.3h.343v-.343l-.343.343zM16 8.348V0h-.003C7.162.002 0 7.164 0 16h8.348v-4.7l4.7 4.7h2.91l.042-.043V13.05l-4.7-4.701H16z',
                }),
            ),
            _react['default'].createElement('circle', {
                fill: '#6DA544',
                cx: 22.956,
                cy: 9.043,
                r: 2.783,
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#D80027',
                },
                _react['default'].createElement('path', {
                    d: 'M8.095 2.087a16.076 16.076 0 00-6.008 6.008V16H6.26V6.261H16V2.087H8.095z',
                }),
                _react['default'].createElement('path', {
                    d:
                        'M16 14.032l-5.685-5.684H8.348L16 16v-1.968zM18.087 8.348h9.739v4.173h-9.74z',
                }),
            ),
            _react['default'].createElement(
                'g',
                {
                    fill: '#496E2D',
                },
                _react['default'].createElement('path', {
                    d: 'M27.826 16.188zM18.087 16.188z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M18.087 18.783v2.782h1.464a4.85 4.85 0 003.405 1.392 4.85 4.85 0 003.406-1.392h1.464v-2.782h-9.74z',
                fill: '#FFDA44',
            }),
            _react['default'].createElement('path', {
                d:
                    'M18.087 11.826V16c0 3.727 4.87 4.87 4.87 4.87s4.87-1.143 4.87-4.87v-4.174h-9.74z',
                fill: '#338AF3',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#F3F3F3',
                },
                _react['default'].createElement('path', {
                    d:
                        'M22.956 14.056c-1.217 0-1.217 1.113-2.434 1.113-1.218 0-1.218-1.113-2.435-1.113v1.947c1.217 0 1.217 1.113 2.435 1.113 1.217 0 1.217-1.113 2.434-1.113 1.218 0 1.218 1.113 2.435 1.113 1.218 0 1.218-1.113 2.435-1.113v-1.947c-1.217 0-1.217 1.113-2.435 1.113-1.217 0-1.217-1.113-2.435-1.113zM22.956 10.156c-1.217 0-1.217 1.114-2.434 1.114-1.218 0-1.218-1.114-2.435-1.114v1.948c1.217 0 1.217 1.113 2.435 1.113 1.217 0 1.217-1.113 2.434-1.113 1.218 0 1.218 1.113 2.435 1.113 1.218 0 1.218-1.113 2.435-1.113v-1.948c-1.217 0-1.217 1.114-2.435 1.114-1.217 0-1.217-1.114-2.435-1.114z',
                }),
            ),
        ),
    );
}

SvgCaymanIslands.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgCaymanIslands.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgCaymanIslands;
exports['default'] = _default;
