'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _ = _interopRequireDefault(require('..'));

describe('<VerticalItem when href is passed/>', function() {
    it('should pass the right props to anchor element', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                label: 'item 1',
                name: 'item1',
                href: '/page/to/go',
            }),
        );
        expect(component.find('a').props()).toEqual(
            expect.objectContaining({
                href: '/page/to/go',
                'aria-current': undefined,
                onClick: expect.any(Function),
            }),
        );
    });
    it('should set the aria-current as page in anchor element when the item is selected', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                href: '/page/to/go',
                label: 'item 1',
                name: 'item1',
                selectedItem: 'item1',
            }),
        );
        expect(component.find('a').prop('aria-current')).toBe('page');
    });
    it('should render the label passed', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                href: '/page/to/go',
                label: 'item label',
                name: 'item1',
            }),
        );
        expect(component.find('a').text()).toBe('item label');
    });
    it('should fire an event onClick when the item is clicked', function() {
        var onClickMockFn = jest.fn();
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                href: '/page/to/go',
                label: 'item 1',
                name: 'item35',
                onClick: onClickMockFn,
                onSelect: function onSelect() {},
            }),
        );
        component.find('a').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object));
    });
    it('should fire an event onSelect when the item is clicked', function() {
        var onSelectMockFn = jest.fn();
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                href: '/page/to/go',
                label: 'item 1',
                name: 'item35',
                onSelect: onSelectMockFn,
            }),
        );
        component.find('a').simulate('click');
        expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'item35');
    });
});
describe('<VerticalItem when href is not passed/>', function() {
    it('should pass the right props to button element', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                label: 'item 1',
                name: 'item1',
            }),
        );
        expect(component.find('button').props()).toEqual(
            expect.objectContaining({
                'aria-current': undefined,
                onClick: expect.any(Function),
            }),
        );
    });
    it('should set the aria-current as page in button element when the item is selected', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                label: 'item 1',
                name: 'item1',
                selectedItem: 'item1',
            }),
        );
        expect(component.find('button').prop('aria-current')).toBe('page');
    });
    it('should render the label passed', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                label: 'item label',
                name: 'item1',
            }),
        );
        expect(component.find('button').text()).toBe('item label');
    });
    it('should fire an event onClick when the item is clicked', function() {
        var onClickMockFn = jest.fn();
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                label: 'item 1',
                name: 'item35',
                onClick: onClickMockFn,
                onSelect: function onSelect() {},
            }),
        );
        component.find('button').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object));
    });
    it('should fire an event onSelect when the item is clicked', function() {
        var onSelectMockFn = jest.fn();
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_['default'], {
                label: 'item 1',
                name: 'item35',
                onSelect: onSelectMockFn,
            }),
        );
        component.find('button').simulate('click');
        expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'item35');
    });
});
