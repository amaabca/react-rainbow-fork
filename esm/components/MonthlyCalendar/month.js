import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { addDays, getLastDayMonth } from '../Calendar/helpers';
import Week from './week';
export default function Month(props) {
    var firstDayMonth = props.firstDayMonth,
        selectedDate = props.selectedDate,
        minDate = props.minDate,
        maxDate = props.maxDate,
        onSelectDate = props.onSelectDate;
    var date = new Date(firstDayMonth);
    var lastDayMonth = useMemo(
        function() {
            return getLastDayMonth(firstDayMonth);
        },
        [firstDayMonth],
    );
    var weeks = [];

    function Weeks() {
        var dayOfWeek = date.getDay();
        var daysAfter = 6 - dayOfWeek;

        while (date <= lastDayMonth || addDays(date, -dayOfWeek) <= lastDayMonth) {
            var startDate = addDays(date, -dayOfWeek);
            var endDate = addDays(date, daysAfter);
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(11, 59, 59, 999);
            weeks.push(
                React.createElement(Week, {
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
            date = addDays(date, 7);
        }

        return weeks;
    }

    return React.createElement('tbody', null, React.createElement(Weeks, null));
}
Month.propTypes = {
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onSelectDate: PropTypes.func,
};
Month.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    selectedDate: undefined,
    onSelectDate: function onSelectDate() {},
};
