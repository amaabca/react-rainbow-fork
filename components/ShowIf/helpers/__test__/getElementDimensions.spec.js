'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _getElementDimensions = _interopRequireDefault(require('../getElementDimensions'));

describe('getElementDimensions', function() {
    it('should return the right dimensions', function() {
        var dimensions = {
            width: 50,
            height: 50,
        };
        var element = {
            style: {
                position: 'relative',
                display: 'none',
                visibility: 'hidden',
            },
            getBoundingClientRect: function getBoundingClientRect() {
                return dimensions;
            },
        };
        expect((0, _getElementDimensions['default'])(element)).toEqual(dimensions);
    });
    it('should modify the styles to get client rect correctly', function() {
        var dimensions = {
            width: 50,
            height: 50,
        };
        var element = {
            style: {
                position: 'relative',
                display: 'none',
                visibility: 'hidden',
            },
            getBoundingClientRect: function getBoundingClientRect() {
                var _this$style = this.style,
                    position = _this$style.position,
                    visibility = _this$style.visibility,
                    display = _this$style.display;

                if (position === 'absolute' && visibility === 'hidden' && display === 'block') {
                    return dimensions;
                }

                return undefined;
            },
        };
        (0, _getElementDimensions['default'])(element);
        expect(element.style).toEqual({
            position: 'relative',
            display: 'none',
            visibility: 'hidden',
        });
    });
    it('should leave the element styles as passed', function() {
        var dimensions = {
            width: 50,
            height: 50,
        };
        var element = {
            style: {
                position: 'relative',
                display: 'none',
                visibility: 'hidden',
            },
            getBoundingClientRect: function getBoundingClientRect() {
                return dimensions;
            },
        };
        (0, _getElementDimensions['default'])(element);
        expect(element.style).toEqual({
            position: 'relative',
            display: 'none',
            visibility: 'hidden',
        });
    });
    it('should return undefined when there is no element', function() {
        expect((0, _getElementDimensions['default'])(null)).toBe(undefined);
    });
});
