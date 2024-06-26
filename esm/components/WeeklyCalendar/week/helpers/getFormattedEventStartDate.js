import getFormattedEventTime from './getFormattedEventTime';
export default function getFormattedEventStartDate(startDate, locale) {
    var startDateParts = new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }).formatToParts(startDate);
    return getFormattedEventTime(startDateParts);
}
