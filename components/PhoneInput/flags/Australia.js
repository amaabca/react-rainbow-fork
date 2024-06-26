'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgAustralia(_ref) {
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
            _react['default'].createElement(
                'g',
                {
                    fill: '#D80027',
                },
                _react['default'].createElement('path', {
                    d: 'M8.095 2.087a16.076 16.076 0 00-6.008 6.008V16H6.26V6.26H16V2.088H8.095z',
                }),
                _react['default'].createElement('path', {
                    d: 'M16 14.032l-5.685-5.684H8.348L16 16v-1.968z',
                }),
            ),
            _react['default'].createElement(
                'g',
                {
                    fill: '#F0F0F0',
                },
                _react['default'].createElement('path', {
                    d:
                        'M9.65 18.783l.878 1.836 1.983-.459-.888 1.832 1.594 1.264-1.985.448.006 2.035-1.588-1.273-1.588 1.273.006-2.035-1.986-.448 1.595-1.264-.888-1.832 1.983.459zM23.955 22.26l.44.919.99-.23-.443.916.797.633-.993.223.003 1.018-.794-.637-.794.637.003-1.018-.993-.223.798-.633-.444-.915.991.229zM19.87 12.522l.44.918.991-.23-.444.916.798.633-.993.223.003 1.018-.794-.637-.794.637.003-1.018-.993-.223.797-.633-.444-.915.992.229zM23.955 6.957l.44.918.99-.23-.443.916.797.632-.993.224.003 1.018-.794-.637-.794.637.003-1.018-.993-.224.798-.632-.444-.916.991.23zM27.523 11.13l.439.919.991-.23-.444.916.798.632-.993.224.003 1.018-.794-.637-.794.637.003-1.018-.993-.224.797-.632-.444-.916.992.23zM24.972 16l.345 1.063h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.117z',
                }),
            ),
        ),
    );
}

SvgAustralia.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgAustralia.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgAustralia;
exports['default'] = _default;
