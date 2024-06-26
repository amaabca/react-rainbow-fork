import isScrollPositionAtScrollable from '../isScrollPositionAtScrollable';
describe('isScrollPositionAtScrollable', function() {
    it('should return true when scroll position is at bottom', function() {
        var scrollableRef = {
            scrollHeight: 925,
            scrollTop: 700,
            clientHeight: 225,
        };
        expect(isScrollPositionAtScrollable(scrollableRef)).toBe(true);
    });
    it('should return false when scroll position is not at bottom', function() {
        var scrollableRef = {
            scrollHeight: 925,
            scrollTop: 400,
            clientHeight: 225,
        };
        expect(isScrollPositionAtScrollable(scrollableRef)).toBe(false);
    });
});
