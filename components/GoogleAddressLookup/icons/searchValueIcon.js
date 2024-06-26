'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _icons = require('../styled/icons');

var SearchValueIcon = function SearchValueIcon(props) {
    var className = props.className;
    return _react['default'].createElement(
        'svg',
        {
            className: className,
            width: '28',
            height: '28',
            viewBox: '0 0 28 28',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
        },
        _react['default'].createElement(
            _icons.SearchValueIconColor,
            null,
            _react['default'].createElement('circle', {
                cx: '14',
                cy: '14',
                r: '14',
            }),
            _react['default'].createElement(
                _icons.IconPinColor,
                null,
                _react['default'].createElement(
                    'g',
                    {
                        fill: '#FFF',
                        fillRule: 'evenodd',
                        transform: 'translate(7 7)',
                    },
                    _react['default'].createElement('path', {
                        d:
                            'M7.396 7.585l.6-.601a.212.212 0 0 1 .301 0l1.38 1.38a.212.212 0 0 1 0 .301l-.6.6a.212.212 0 0 1-.3 0l-1.381-1.38a.212.212 0 0 1 0-.3z',
                    }),
                    _react['default'].createElement('path', {
                        d:
                            'M4.873 0A4.466 4.466 0 0 0 .412 4.46c0 2.46 2 4.462 4.46 4.462S9.334 6.92 9.334 4.46C9.333 2 7.333 0 4.873 0zm0 .797A3.668 3.668 0 0 1 8.537 4.46a3.668 3.668 0 0 1-3.664 3.664 3.668 3.668 0 0 1-3.665-3.664A3.668 3.668 0 0 1 4.873.797zM8.333 8.973l1.052-1.051a.212.212 0 0 1 .3 0l4.036 4.036c.282.281.36.723.19 1.083a.957.957 0 0 1-1.542.268L8.333 9.273a.212.212 0 0 1 0-.3z',
                    }),
                ),
            ),
        ),
    );
};

SearchValueIcon.propTypes = {
    className: _propTypes['default'].string,
};
SearchValueIcon.defaultProps = {
    className: undefined,
};
var _default = SearchValueIcon;
exports['default'] = _default;
