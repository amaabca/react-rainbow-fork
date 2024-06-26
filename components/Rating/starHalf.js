'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = StarHalf;

var _react = _interopRequireDefault(require('react'));

function StarHalf() {
    return _react['default'].createElement(
        'svg',
        {
            width: '19px',
            height: '18px',
            viewBox: '0 0 19 18',
        },
        _react['default'].createElement(
            'defs',
            null,
            _react['default'].createElement(
                'linearGradient',
                {
                    id: 'grad1',
                    x1: '0%',
                    y1: '0%',
                    x2: '100%',
                    y2: '0%',
                },
                _react['default'].createElement('stop', {
                    offset: '0%',
                    style: {
                        stopColor: 'currentColor',
                        stopOpacity: 1,
                    },
                }),
                _react['default'].createElement('stop', {
                    offset: '50%',
                    style: {
                        stopColor: 'currentColor',
                        stopOpacity: 1,
                    },
                }),
                _react['default'].createElement('stop', {
                    offset: '50%',
                    style: {
                        stopColor: 'currentColor',
                        stopOpacity: 0,
                    },
                }),
                _react['default'].createElement('stop', {
                    offset: '100%',
                    style: {
                        stopColor: 'currentColor',
                        stopOpacity: 0,
                    },
                }),
            ),
        ),
        _react['default'].createElement(
            'g',
            {
                stroke: 'none',
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
            },
            _react['default'].createElement(
                'g',
                {
                    transform: 'translate(-573.000000, -660.000000)',
                    fill: 'url(#grad1)',
                    fillRule: 'nonzero',
                    stroke: 'currentColor',
                },
                _react['default'].createElement(
                    'g',
                    {
                        transform: 'translate(484.000000, 421.000000)',
                    },
                    _react['default'].createElement(
                        'g',
                        {
                            transform: 'translate(89.000000, 239.000000)',
                        },
                        _react['default'].createElement('path', {
                            d:
                                'M17.6973466,7.80245247 L17.6973988,7.80240068 C17.9269906,7.5745488 18.0077374,7.24137929 17.9080108,6.92833545 C17.8087389,6.61745213 17.5554493,6.40002745 17.2427134,6.35366266 L12.7752952,5.692643 C12.4206526,5.64004986 12.1155909,5.41432965 11.9590506,5.09066156 L9.96180552,0.968818436 C9.82079713,0.677613692 9.54005993,0.5 9.22518472,0.5 C8.91064778,0.5 8.6299276,0.677642899 8.48886757,0.968954241 L6.49147885,5.09070733 C6.33477823,5.41470649 6.02934346,5.64042666 5.674543,5.69304318 L1.20711741,6.35406387 C0.89483547,6.40016141 0.64125572,6.61784529 0.542092775,6.9283868 C0.442262618,7.24175549 0.523009366,7.57492501 0.75263261,7.80280803 L3.98506022,11.0113057 C4.23823799,11.2629008 4.35360111,11.623387 4.29414566,11.9756465 L3.53152484,16.5065155 C3.48817715,16.7622003 3.55181491,17.0029955 3.71254643,17.1969739 C3.95813967,17.4942225 4.38699931,17.581691 4.72215007,17.40233 L8.71777453,15.2629437 C9.03139912,15.0954864 9.41773106,15.0958719 9.73308901,15.2632079 L13.7288733,17.4024825 C13.8508116,17.4678735 13.9769492,17.5 14.10806,17.5 C14.3483963,17.5 14.5777352,17.3905163 14.7385031,17.1961525 C14.8985832,17.0032423 14.9622427,16.7620146 14.9187525,16.5059703 L14.1558654,11.9757124 C14.0964482,11.6229915 14.2117366,11.2629261 14.4651247,11.011122 L17.6973466,7.80245247 Z',
                        }),
                    ),
                ),
            ),
        ),
    );
}
