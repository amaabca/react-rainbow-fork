'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = DayOfWeek;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _headerDays = _interopRequireDefault(require('./styled/headerDays'));

var _helpers = require('../Calendar/helpers');

var _abbrHeader = _interopRequireDefault(require('./styled/abbrHeader'));

function DayOfWeek(_ref) {
    var locale = _ref.locale;
    return _react['default'].createElement(
        'thead',
        null,
        _react['default'].createElement(
            'tr',
            null,
            _react['default'].createElement(
                _headerDays['default'],
                {
                    scope: 'col',
                },
                _react['default'].createElement(
                    _abbrHeader['default'],
                    {
                        title: (0, _helpers.getFormattedDayName)(
                            new Date(2019, 9, 27),
                            'long',
                            locale,
                        ),
                    },
                    (0, _helpers.getFormattedDayName)(new Date(2019, 9, 27), 'short', locale),
                ),
            ),
            _react['default'].createElement(
                _headerDays['default'],
                {
                    scope: 'col',
                },
                _react['default'].createElement(
                    _abbrHeader['default'],
                    {
                        title: (0, _helpers.getFormattedDayName)(
                            new Date(2019, 9, 28),
                            'long',
                            locale,
                        ),
                    },
                    (0, _helpers.getFormattedDayName)(new Date(2019, 9, 28), 'short', locale),
                ),
            ),
            _react['default'].createElement(
                _headerDays['default'],
                {
                    scope: 'col',
                },
                _react['default'].createElement(
                    _abbrHeader['default'],
                    {
                        title: (0, _helpers.getFormattedDayName)(
                            new Date(2019, 9, 29),
                            'long',
                            locale,
                        ),
                    },
                    (0, _helpers.getFormattedDayName)(new Date(2019, 9, 29), 'short', locale),
                ),
            ),
            _react['default'].createElement(
                _headerDays['default'],
                {
                    scope: 'col',
                },
                _react['default'].createElement(
                    _abbrHeader['default'],
                    {
                        title: (0, _helpers.getFormattedDayName)(
                            new Date(2019, 9, 30),
                            'long',
                            locale,
                        ),
                    },
                    (0, _helpers.getFormattedDayName)(new Date(2019, 9, 30), 'short', locale),
                ),
            ),
            _react['default'].createElement(
                _headerDays['default'],
                {
                    scope: 'col',
                },
                _react['default'].createElement(
                    _abbrHeader['default'],
                    {
                        title: (0, _helpers.getFormattedDayName)(
                            new Date(2019, 9, 31),
                            'long',
                            locale,
                        ),
                    },
                    (0, _helpers.getFormattedDayName)(new Date(2019, 9, 31), 'short', locale),
                ),
            ),
            _react['default'].createElement(
                _headerDays['default'],
                {
                    scope: 'col',
                },
                _react['default'].createElement(
                    _abbrHeader['default'],
                    {
                        title: (0, _helpers.getFormattedDayName)(
                            new Date(2019, 10, 1),
                            'long',
                            locale,
                        ),
                    },
                    (0, _helpers.getFormattedDayName)(new Date(2019, 10, 1), 'short', locale),
                ),
            ),
            _react['default'].createElement(
                _headerDays['default'],
                {
                    scope: 'col',
                },
                _react['default'].createElement(
                    _abbrHeader['default'],
                    {
                        title: (0, _helpers.getFormattedDayName)(
                            new Date(2019, 10, 2),
                            'long',
                            locale,
                        ),
                    },
                    (0, _helpers.getFormattedDayName)(new Date(2019, 10, 2), 'short', locale),
                ),
            ),
        ),
    );
}

DayOfWeek.propTypes = {
    locale: _propTypes.PropTypes.string,
};
DayOfWeek.defaultProps = {
    locale: undefined,
};
