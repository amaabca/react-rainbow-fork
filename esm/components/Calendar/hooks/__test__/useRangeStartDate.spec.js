import { renderHook } from '@testing-library/react-hooks';
import useRangeStartDate from '../useRangeStartDate';
describe('useRangeStartDate', function() {
    it('should return true', function() {
        var date = new Date(2019, 0, 1);
        var range = [new Date(2019, 0, 1), new Date(2019, 0, 15)];

        var _renderHook = renderHook(function() {
                return useRangeStartDate(date, range);
            }),
            result = _renderHook.result;

        expect(result.current).toBe(true);
    });
    it('should return false', function() {
        var date = new Date(2019, 0, 13);
        var ranges = [
            null,
            undefined,
            [],
            [new Date(2019, 0, 17)],
            [new Date(2019, 0, 1), new Date(2019, 0, 15)],
        ];
        ranges.forEach(function(range) {
            var _renderHook2 = renderHook(function() {
                    return useRangeStartDate(date, range);
                }),
                result = _renderHook2.result;

            expect(result.current).toBe(false);
        });
    });
});
