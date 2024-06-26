'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgGrenada(_ref) {
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
                cx: 16.031,
                cy: 15.969,
                r: 15.969,
            }),
            _react['default'].createElement('path', {
                d:
                    'M7.03 2.777A15.894 15.894 0 0116.032 0c3.339 0 6.438 1.025 9 2.777l-9 .694-9-.694z',
                fill: '#A2001D',
            }),
            _react['default'].createElement('path', {
                fill: '#0052B4',
                d: 'M16.031 15.969l-1.019-1.02-.27.485z',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#496E2D',
                },
                _react['default'].createElement('path', {
                    d:
                        'M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677zM27.323 4.677c6.236 6.236 6.236 16.347 0 22.584L16.03 15.969 27.323 4.677z',
                }),
            ),
            _react['default'].createElement('circle', {
                fill: '#A2001D',
                cx: 16.031,
                cy: 15.969,
                r: 5.554,
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#FFDA44',
                },
                _react['default'].createElement('path', {
                    d:
                        'M16.031 10.414l1.245 3.832h4.03l-3.26 2.369 1.245 3.832-3.26-2.368-3.26 2.368 1.245-3.832-3.26-2.369h4.03zM16.069 0l-.043.001h.085L16.07 0z',
                }),
            ),
            _react['default'].createElement(
                'g',
                {
                    fill: '#A2001D',
                },
                _react['default'].createElement('path', {
                    d:
                        'M16.037 0h-.011A15.918 15.918 0 004.74 4.676h22.582A15.919 15.919 0 0016.037 0zM4.74 27.261a15.919 15.919 0 0011.291 4.677c4.41 0 8.401-1.787 11.29-4.677H4.742z',
                }),
            ),
            _react['default'].createElement(
                'g',
                {
                    fill: '#FFDA44',
                },
                _react['default'].createElement('path', {
                    d:
                        'M16.031 1.736l.259.795h.836l-.677.492.26.796-.678-.492-.677.492.259-.796-.677-.492h.837zM12.159 1.736l.258.795h.837l-.677.492.259.796-.677-.492-.677.492.259-.796-.677-.492h.836zM19.903 1.736l.259.795h.836l-.676.492.258.796-.677-.492-.676.492.258-.796-.677-.492h.837zM16.031 28.119l.259.796h.836l-.677.491.26.796-.678-.492-.677.492.259-.796-.677-.491h.837zM12.159 28.119l.258.796h.837l-.677.491.259.796-.677-.492-.677.492.259-.796-.677-.491h.836zM19.903 28.119l.259.796h.836l-.676.491.258.796-.677-.492-.676.492.258-.796-.677-.491h.837zM4.928 15.705a1.389 1.389 0 01-2.347 1.485c-.742-1.173-.312-3.089-.312-3.089s1.916.43 2.66 1.604z',
                }),
            ),
            _react['default'].createElement('circle', {
                fill: '#A2001D',
                cx: 4.126,
                cy: 17.035,
                r: 1,
            }),
        ),
    );
}

SvgGrenada.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgGrenada.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgGrenada;
exports['default'] = _default;
