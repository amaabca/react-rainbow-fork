'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgSpain(_ref) {
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
                    'M0 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39C31.648 19.831 32 17.956 32 16c0-1.957-.352-3.832-.995-5.565L16 9.043.995 10.435A15.966 15.966 0 000 16z',
                fill: '#FFDA44',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#D80027',
                },
                _react['default'].createElement('path', {
                    d:
                        'M31.005 10.435C28.745 4.342 22.879 0 16 0 9.12 0 3.256 4.342.995 10.435h30.01zM.995 21.565C3.255 27.658 9.121 32 16 32c6.88 0 12.744-4.342 15.005-10.435H.995z',
                }),
            ),
        ),
    );
}

SvgSpain.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgSpain.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgSpain;
exports['default'] = _default;
