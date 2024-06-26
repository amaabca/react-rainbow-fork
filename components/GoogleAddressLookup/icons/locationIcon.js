'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var LocationIcon = function LocationIcon(props) {
    var className = props.className;
    return _react['default'].createElement(
        'svg',
        {
            className: className,
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
        },
        _react['default'].createElement(
            'g',
            {
                fill: 'none',
                fillRule: 'nonzero',
            },
            _react['default'].createElement('path', {
                fill: '#A4A7B5',
                d:
                    'M21.953 16.827c.934.513 2.047 1.386 2.047 2.632 0 .955-.657 2.316-3.786 3.38C18.01 23.586 15.092 24 12 24c-3.092 0-6.01-.413-8.214-1.162C.656 21.775 0 20.414 0 19.458c0-1.245 1.113-2.118 2.047-2.631a.703.703 0 1 1 .677 1.232c-.837.46-1.318.97-1.318 1.4 0 .525.744 1.339 2.832 2.048 2.063.7 4.82 1.087 7.762 1.087 2.943 0 5.7-.386 7.762-1.087 2.088-.71 2.832-1.523 2.832-2.048 0-.43-.48-.94-1.318-1.4a.703.703 0 1 1 .677-1.232zM6.692 20.49c-1.747-.493-2.632-1.207-2.632-2.122 0-.915.885-1.629 2.631-2.122.388-.11.81-.206 1.258-.287.243.42.498.853.765 1.298-.496.075-.962.166-1.385.274-1.285.327-1.754.696-1.851.837.097.142.566.51 1.851.838 1.216.31 2.781.486 4.43.502a3.27 3.27 0 0 0 .482 0c1.649-.016 3.213-.192 4.43-.502 1.285-.328 1.754-.696 1.851-.838-.097-.141-.566-.51-1.851-.837a14.166 14.166 0 0 0-1.385-.274c.267-.445.522-.878.765-1.299.448.082.87.178 1.258.288 1.746.493 2.631 1.207 2.631 2.122 0 .915-.885 1.63-2.632 2.122-1.427.404-3.312.626-5.308.626s-3.881-.222-5.309-.626z',
            }),
            _react['default'].createElement('path', {
                fill: '#EE3840',
                d:
                    'M12 18.311a1.77 1.77 0 0 0 1.521-.853c2.288-3.743 5.015-8.677 5.015-10.922A6.544 6.544 0 0 0 12 0a6.544 6.544 0 0 0-6.536 6.536c0 2.245 2.727 7.178 5.015 10.922A1.77 1.77 0 0 0 12 18.31zM9.373 6.087A2.63 2.63 0 0 1 12 3.46a2.63 2.63 0 0 1 2.627 2.627A2.63 2.63 0 0 1 12 8.715a2.63 2.63 0 0 1-2.627-2.628z',
            }),
        ),
    );
};

LocationIcon.propTypes = {
    className: _propTypes['default'].string,
};
LocationIcon.defaultProps = {
    className: undefined,
};
var _default = LocationIcon;
exports['default'] = _default;
