'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function SvgGuyana(_ref) {
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
                    'M1.223 9.823A15.9 15.9 0 000 15.956c0 2.173.436 4.244 1.223 6.132l12.006-6.132L1.223 9.823z',
                fill: '#029D49',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#FBD015',
                },
                _react['default'].createElement('path', {
                    d:
                        'M32.1 15.956c0 .233-.056.464-.131.695a2.02 2.02 0 00.131-.695zM31.969 15.26c.075.232.131.463.131.696 0-.233-.047-.465-.131-.695z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M2.472 7.43A15.874 15.874 0 000 15.956c0 3.136.908 6.059 2.472 8.525l10.757-8.525L2.472 7.43z',
                fill: '#CD2029',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#029D49',
                },
                _react['default'].createElement('path', {
                    d:
                        'M21.291 11.463l10.559 3.143a18.042 18.042 0 01.06 1.35C31.91 7.143 24.768 0 15.956 0c3.569 0 4.658 5.234 5.336 11.463zM31.893 16.65c-.01.22-.025.438-.043.656l-10.622 3.142c-.678 6.228-1.704 11.463-5.273 11.463 8.812 0 15.956-7.144 15.956-15.955 0 .233-.008.464-.018.695z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M31.85 14.606l-9.803-3.237c.318 2.922-1.445 6.84-1.764 9.762l11.567-3.826a18.113 18.113 0 00.06-1.35 15.865 15.865 0 00-.06-1.349z',
                fill: '#FBD015',
            }),
            _react['default'].createElement(
                'g',
                {
                    fill: '#029D49',
                },
                _react['default'].createElement('path', {
                    d:
                        'M2.65 24.452zM1.512 9.265zM1.823 8.636zM2.012 23.237zM1.223 9.898c.159-.168.33-.334.5-.5-.169.166-.34.332-.5.5zM1.723 22.589c-.169-.167-.34-.332-.5-.5.16.168.331.334.5.5zM2.151 8.021zM2.323 23.86z',
                }),
            ),
            _react['default'].createElement(
                'g',
                {
                    fill: '#14A755',
                },
                _react['default'].createElement('path', {
                    d:
                        'M22.325 20.448L3.985 26.5a15.912 15.912 0 0011.97 5.412c3.569 0 5.692-5.234 6.37-11.463zM3.986 5.412l18.34 6.051C21.646 5.234 19.523 0 15.955 0a15.913 15.913 0 00-11.97 5.412z',
                }),
            ),
            _react['default'].createElement(
                'g',
                {
                    fill: '#029D49',
                },
                _react['default'].createElement('path', {
                    d:
                        'M3.984 26.498zM2.473 7.427zM2.214 23.647zM2.55 24.277c-.167-.166-.337-.333-.5-.5.165.167.332.334.5.5zM2.853 24.89c-.146-.166-.298-.33-.44-.5.142.17.294.334.44.5zM3.992 26.506l-.008-.008zM2.413 7.927c.148-.167.301-.332.449-.5-.148.168-.301.333-.449.5zM2.05 8.458zM1.912 23.015c-.174-.165-.335-.333-.5-.5.165.167.326.335.5.5zM4.02 5.412c-.014.015-.027.033-.04.046.015-.015.03-.033.04-.046zM1.713 9.05zM1.223 22.088v.004-.004zM1.41 9.674c.169-.167.33-.335.5-.5-.172.165-.333.333-.5.5zM1.223 9.826v-.003z',
                }),
            ),
            _react['default'].createElement('path', {
                d:
                    'M22.325 11.463L3.985 5.412l-.005.006c-.553.628-1.056 1.3-1.507 2.01l-.06.093a16.475 16.475 0 00-.7 1.244c-.068.136-.136.271-.2.409-.036.074-.068.15-.102.224-.064.141-.128.282-.188.425l12.006 6.133-12.006 6.132c.06.144.125.286.189.427.033.074.065.148.1.222.065.138.133.275.202.41a15.722 15.722 0 00.336.63l.1.174c.086.148.173.295.263.44l.06.092A16.133 16.133 0 003.985 26.5l18.34-6.051a42.398 42.398 0 000-8.985z',
                fill: '#FCD943',
            }),
        ),
    );
}

SvgGuyana.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
SvgGuyana.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = SvgGuyana;
exports['default'] = _default;
