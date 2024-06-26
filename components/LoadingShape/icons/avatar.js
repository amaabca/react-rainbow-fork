'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var AvatarIcon = function AvatarIcon(props) {
    var className = props.className,
        style = props.style;
    return _react['default'].createElement(
        'svg',
        {
            className: className,
            style: style,
            viewBox: '0 0 16 15',
        },
        _react['default'].createElement(
            'g',
            {
                id: 'pages',
                stroke: 'none',
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
            },
            _react['default'].createElement(
                'g',
                {
                    id: 'LoadingShape',
                    transform: 'translate(-17.000000, -26.000000)',
                    fill: 'currentColor',
                    fillRule: 'nonzero',
                },
                _react['default'].createElement('path', {
                    d:
                        'M25.068222,36.5848519 C27.4635119,36.6218105 29.6594293,37.459896 31.510255,39.0703466 L31.798535,39.3297809 C31.8788598,39.4037189 31.923862,39.4516656 31.9669085,39.5201038 C32.115079,39.7551597 32.0895537,40.0227671 31.894073,40.2207242 C31.6962266,40.4210631 31.4265204,40.4461339 31.1906602,40.2934083 C31.1497529,40.2669957 31.1173204,40.2421601 31.0766838,40.2064948 L30.969131,40.1076769 C29.1418644,38.4358698 26.9952296,37.6405856 24.5436151,37.7328582 C22.4131652,37.8130139 20.5342407,38.5853842 18.9237442,40.0339916 L18.7420987,40.2011232 L18.700019,40.2371933 L18.700019,40.2371933 C18.4537878,40.4424112 18.1589643,40.447963 17.9235165,40.2262262 C17.6821833,39.9986643 17.6936848,39.6247126 17.9507826,39.3975206 L18.4165209,38.9857613 L18.6515606,38.7855074 L18.8565771,38.6210429 L19.0579085,38.4715087 C20.702822,37.2944139 22.5314859,36.6802027 24.6595598,36.5946968 L25.0621105,36.5848519 L25.068222,36.5848519 Z M24.9041939,26.7500005 C27.1467628,26.754525 28.9473281,28.5637448 28.9433061,30.8082829 C28.9392532,33.0282033 27.1203557,34.8282985 24.8857994,34.8256139 C22.6793483,34.8229141 20.8623915,32.9977879 20.8678499,30.7898076 C20.8731866,28.6268271 22.5766456,26.8558857 24.7035846,26.7545685 L24.9041939,26.7500005 Z M24.9062395,27.8827433 C23.3222486,27.8773031 22.0046832,29.18513 22.0013536,30.7656886 C21.998043,32.3751983 23.28938,33.6846464 24.8843891,33.691083 C26.4946751,33.6974327 27.8010762,32.4100083 27.8097095,30.8095749 C27.8181812,29.1951631 26.5219712,27.8884263 24.9062395,27.8827433 Z',
                    id: 'Combined-Shape',
                }),
            ),
        ),
    );
};

AvatarIcon.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
AvatarIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = AvatarIcon;
exports['default'] = _default;
