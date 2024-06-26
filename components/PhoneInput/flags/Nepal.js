'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgNepal(_ref) {
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
            _react['default'].createElement(
                'g',
                {
                    fill: '#0052B4',
                },
                _react['default'].createElement('path', {
                    d:
                        'M31.91 17.743l-.004-.004v.004zM31.906 17.74v-.001L14.359.083c-.791.08-1.566.22-2.32.411C5.12 2.256 0 16 0 16s22.4 14.99 24.955 13.26c.512-.346 1.002-.72 1.469-1.122l-10.4-10.399h15.882z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M27.826 16L12.266.44C5.23 2.121 0 8.45 0 16c0 8.837 7.163 16 16 16 3.352 0 6.462-1.031 9.033-2.793L11.826 16h16z',
                fill: '#D80027',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#F0F0F0',
                },
                _react['default'].createElement('path', {
                    d:
                        'M15.217 23.625l-1.954-.92 1.04-1.892-2.121.406-.27-2.144-1.477 1.577-1.478-1.577-.27 2.144-2.12-.406 1.04 1.892-1.954.92 1.954.919-1.04 1.892 2.121-.406.269 2.144 1.478-1.577 1.478 1.577.269-2.144 2.121.406-1.04-1.892zM13.913 8.874l-1.421-.669.757-1.376-1.544.295-.195-1.559-1.075 1.147L9.36 5.565l-.196 1.56-1.543-.296.757 1.377-1.421.668 3.478.696zM14.609 8.874a4.174 4.174 0 01-8.348 0',
                }),
            ),
        ),
    );
}

SvgNepal.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgNepal.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgNepal;
exports['default'] = _default;
