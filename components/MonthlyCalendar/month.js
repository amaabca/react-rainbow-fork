'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = Month;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _helpers = require('../Calendar/helpers');

var _week = _interopRequireDefault(require('./week'));

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj['default'] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function Month(props) {
    var firstDayMonth = props.firstDayMonth,
        selectedDate = props.selectedDate,
        minDate = props.minDate,
        maxDate = props.maxDate,
        onSelectDate = props.onSelectDate;
    var date = new Date(firstDayMonth);
    var lastDayMonth = (0, _react.useMemo)(
        function() {
            return (0, _helpers.getLastDayMonth)(firstDayMonth);
        },
        [firstDayMonth],
    );
    var weeks = [];

    function Weeks() {
        var dayOfWeek = date.getDay();
        var daysAfter = 6 - dayOfWeek;

        while (date <= lastDayMonth || (0, _helpers.addDays)(date, -dayOfWeek) <= lastDayMonth) {
            var startDate = (0, _helpers.addDays)(date, -dayOfWeek);
            var endDate = (0, _helpers.addDays)(date, daysAfter);
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(11, 59, 59, 999);
            weeks.push(
                _react['default'].createElement(_week['default'], {
                    selectedDate: selectedDate,
                    startDate: startDate,
                    endDate: endDate,
                    minDate: minDate,
                    maxDate: maxDate,
                    firstDayMonth: firstDayMonth,
                    key: date.getTime(),
                    onSelectDate: onSelectDate,
                }),
            );
            date = (0, _helpers.addDays)(date, 7);
        }

        return weeks;
    }

    return _react['default'].createElement(
        'tbody',
        null,
        _react['default'].createElement(Weeks, null),
    );
}

Month.propTypes = {
    firstDayMonth: _propTypes['default'].instanceOf(Date),
    minDate: _propTypes['default'].instanceOf(Date),
    maxDate: _propTypes['default'].instanceOf(Date),
    selectedDate: _propTypes['default'].oneOfType([
        _propTypes['default'].instanceOf(Date),
        _propTypes['default'].string,
    ]),
    onSelectDate: _propTypes['default'].func,
};
Month.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    selectedDate: undefined,
    onSelectDate: function onSelectDate() {},
};
