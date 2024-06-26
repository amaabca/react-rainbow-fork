import { useMemo, useRef } from 'react';
import { normalizeDate, isSameDay } from '../../helpers';
export default function useNormalizedValue(value) {
    var normalizedValue = useRef(null);
    return useMemo(
        function() {
            if (isSameDay(value, normalizedValue.current)) return normalizedValue.current;
            normalizedValue.current = normalizeDate(value);
            return normalizedValue.current;
        },
        [value],
    );
}
