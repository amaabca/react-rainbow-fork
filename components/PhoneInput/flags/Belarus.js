'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgBelarus(_ref) {
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
                fill: '#FCFCFC',
                cx: 16,
                cy: 16,
                r: 16,
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#A2001D',
                },
                _react['default'].createElement('path', {
                    d: 'M6.609 14.84l-1.74-3.155L6.61 8.58l1.739 3.105z',
                }),
                _react['default'].createElement('path', {
                    d:
                        'M3.13 14.84l-1.739-3.155 1.74-3.105 1.739 3.105zM6.609 23.42l-1.74-3.155 1.74-3.106 1.739 3.106z',
                }),
                _react['default'].createElement('path', {
                    d:
                        'M3.13 23.42l-1.739-3.155 1.74-3.106 1.739 3.106zM8.348 3.106l-.493-.88a16.044 16.044 0 00-2.474 1.807l1.228 2.228 1.739-3.155zM6.609 25.74l-1.241 2.215c.762.679 1.59 1.286 2.473 1.81l.507-.92-1.74-3.106z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M9.74 20.174v10.554A15.947 15.947 0 0016 32c6.88 0 12.744-4.342 15.005-10.435L9.739 20.174z',
                fill: '#6DA544',
            }),
            _react['default'].createElement('path', {
                d:
                    'M31.005 21.565C31.648 19.832 32 17.957 32 16c0-8.837-7.163-16-16-16a15.95 15.95 0 00-6.26 1.272v20.293h21.265z',
                fill: '#A2001D',
            }),
        ),
    );
}

SvgBelarus.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgBelarus.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgBelarus;
exports['default'] = _default;
