'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _ = _interopRequireDefault(require('..'));

describe('<Pagination />', function() {
    it('should disable the previous button if the active page is the first', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                pages: 5,
                activePage: 1,
            }),
        );
        var navButtons = component.find('NavigationButton');
        expect(navButtons.get(0).props.disabled).toBe(true);
    });
    it('should disable the next button if the active page is the last', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                pages: 5,
                activePage: 5,
            }),
        );
        var navButtons = component.find('NavigationButton');
        expect(navButtons.get(1).props.disabled).toBe(true);
    });
    it('should set aria-label to pagination', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                pages: 5,
                activePage: 1,
            }),
        );
        expect(component.find('nav').prop('aria-label')).toBe('pagination');
    });
    it('should call the onClick function with the right arguments when the previous page button is clicked', function() {
        var onChangeMockFn = jest.fn();
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                pages: 5,
                activePage: 5,
                onChange: onChangeMockFn,
            }),
        );
        var previousButton = component.find('button[data-id="previous-page-button"]');
        previousButton.simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(expect.any(Object), 4);
    });
    it('should call the onClick function with the right arguments when the next page button is clicked', function() {
        var onChangeMockFn = jest.fn();
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                pages: 5,
                activePage: 1,
                onChange: onChangeMockFn,
            }),
        );
        var previousButton = component.find('button[data-id="next-page-button"]');
        previousButton.simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(expect.any(Object), 2);
    });
});
