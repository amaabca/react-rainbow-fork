'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = UploadIcon;

var _react = _interopRequireDefault(require('react'));

function UploadIcon() {
    return _react['default'].createElement(
        'svg',
        {
            width: '64',
            height: '48',
            viewBox: '0 0 64 48',
        },
        _react['default'].createElement(
            'g',
            {
                fill: 'none',
            },
            _react['default'].createElement('path', {
                fill: 'currentColor',
                d:
                    'M49.903 18.963c-1.506 0-3.005.245-4.426.719.288-1.21.433-2.452.433-3.713C45.91 7.164 38.747 0 29.942 0c-8.512 0-15.49 6.693-15.946 15.093C6.077 16.07 0 22.862 0 30.94c0 8.805 7.164 15.968 15.969 15.968h33.934c7.704 0 13.972-6.268 13.972-13.972 0-7.705-6.268-13.973-13.972-13.973z',
            }),
            _react['default'].createElement('path', {
                fill: '#000',
                fillOpacity: '.102',
                d:
                    'M50.9 44.912H16.968C8.162 44.912.998 37.75.998 28.943c0-2.15.43-4.208 1.212-6.09C.805 25.233 0 28 0 30.94c0 8.805 7.164 15.968 15.969 15.968h33.934c5.862 0 10.892-3.63 12.963-8.76-2.45 4.051-6.897 6.764-11.965 6.764z',
            }),
            _react['default'].createElement('path', {
                fill: '#FFF',
                d:
                    'M38.133 27.24l-6.987-6.987c-.39-.39-1.021-.39-1.411 0l-6.987 6.987c-.616.616-.162 1.703.706 1.703h1.996v9.981c0 .551.447.998.998.998h7.985c.55 0 .998-.447.998-.998v-9.98h1.996c.868 0 1.322-1.088.706-1.704z',
            }),
        ),
    );
}
