import getFirstDayOfWeek from './getFirstDayOfWeek';
import { normalizeDate } from '../../Calendar/helpers';
export default function getCurrentWeek(currentWeek, minDate, maxDate) {
    var week = getFirstDayOfWeek(normalizeDate(currentWeek));
    week.setHours(0, 0, 0, 0);

    if (minDate) {
        var minWeek = getFirstDayOfWeek(minDate);
        minWeek.setHours(0, 0, 0, 0);
        return new Date(Math.max(week, minWeek));
    }

    if (maxDate) {
        var maxWeek = getFirstDayOfWeek(maxDate);
        maxWeek.setHours(0, 0, 0, 0);
        return new Date(Math.min(week, maxWeek));
    }

    return week;
}
