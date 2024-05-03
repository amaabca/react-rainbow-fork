import addDays from '../addDays';
describe('addDays', function() {
    it('should return a date 3 days after', function() {
        var date = new Date(2019, 2, 1);
        expect(addDays(date, 3).getDate()).toBe(4);
    });
});
