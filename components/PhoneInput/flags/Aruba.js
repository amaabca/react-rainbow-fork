'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgAruba(_ref) {
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
                fill: '#FFDA44',
                cx: 16,
                cy: 16,
                r: 16,
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#338AF3',
                },
                _react['default'].createElement('path', {
                    d:
                        'M16 32c4.85 0 9.195-2.158 12.129-5.565H3.87A15.963 15.963 0 0016 32zM32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 1.444.193 2.843.551 4.174H31.45c.358-1.33.551-2.73.551-4.174zM1.272 22.26a15.95 15.95 0 001.076 2.088h27.304c.407-.665.768-1.362 1.076-2.087H1.272z',
                }),
            ),
            _react['default'].createElement('path', {
                fill: '#F0F0F0',
                d:
                    'M7.332 10.091l-3.126-1.38 3.126-1.379 1.38-3.126 1.38 3.126 3.125 1.38-3.126 1.38-1.38 3.125z',
            }),
            _react['default'].createElement('path', {
                fill: '#D80027',
                d:
                    'M8.712 5.93l.852 1.93 1.93.852-1.93.852-.852 1.93-.852-1.93-1.93-.852 1.93-.852z',
            }),
        ),
    );
}

SvgAruba.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgAruba.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgAruba;
exports['default'] = _default;
