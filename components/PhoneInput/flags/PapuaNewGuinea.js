'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgPapuaNewGuinea(_ref) {
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
                    'M27.26 27.26c-6.236 6.237-16.347 6.237-22.583 0-6.236-6.236-6.236-16.347 0-22.583 6.236-6.236 15.365-5.254 21.602.982 6.236 6.236 7.218 15.365.982 21.601z',
                fill: '#000',
            }),
            _react['default'].createElement('path', {
                d:
                    'M4.677 4.677c6.236-6.236 16.347-6.236 22.584 0 6.236 6.236 6.236 16.347 0 22.584',
                fill: '#A2001D',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#F0F0F0',
                },
                _react['default'].createElement('path', {
                    d:
                        'M12.204 21.523l.258.796h.837l-.677.492.259.795-.677-.492-.677.492.258-.795-.676-.492h.836zM10.067 13.886l.431 1.326h1.394l-1.128.82.431 1.325-1.128-.82-1.128.82.431-1.326-1.128-.819h1.394zM10.067 23.606l.431 1.326h1.394l-1.128.82.431 1.326-1.128-.82-1.128.82.431-1.326-1.128-.82h1.394zM14.144 17.357l.43 1.327h1.395l-1.128.819.43 1.326-1.127-.82-1.128.82.43-1.326-1.127-.82h1.394zM5.99 17.357l.432 1.327h1.394l-1.128.819.43 1.326-1.127-.82-1.128.82.43-1.326-1.127-.82H5.56z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M26.732 11.824a4.134 4.134 0 00-2.637-1.207l2.983-2.32a5.54 5.54 0 00-4.334-1.611 4.146 4.146 0 00-1.067-1.826L20.5 7.217a1.736 1.736 0 10-2.356 2.357l-2.357 1.178c.526.525 1.158.88 1.826 1.066a5.538 5.538 0 001.61 4.334l2.607-3.35c.196-.194.455-.3.73-.3.278 0 .54.108.737.304.196.197.305.459.305.737 0 .278-.109.54-.305.736l.982.982c.458-.459.711-1.069.711-1.718 0-.531-.17-1.036-.482-1.453.456.121.887.36 1.243.716a2.78 2.78 0 010 3.928l.982.982a4.139 4.139 0 001.22-2.946 4.14 4.14 0 00-1.22-2.946z',
                fill: '#FFDA44',
            }),
        ),
    );
}

SvgPapuaNewGuinea.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgPapuaNewGuinea.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgPapuaNewGuinea;
exports['default'] = _default;
