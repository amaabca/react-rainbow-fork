'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = extractDate;

function extractDate(date) {
    if (date) {
        try {
            var options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            };
            var value = typeof date === 'string' ? new Date(date) : date;
            return new Intl.DateTimeFormat('en-US', options).format(value);
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    return '';
}