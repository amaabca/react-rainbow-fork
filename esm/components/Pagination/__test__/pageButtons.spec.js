import React from 'react';
import { mount } from 'enzyme';
import PageButtons from '../pageButtons';
describe('<PageButtons />', function() {
    it('should render 5 children if pages is grater than 4', function() {
        var component = mount(
            React.createElement(PageButtons, {
                pages: 7,
                onChange: function onChange() {},
                activePage: 3,
            }),
        );
        var buttons = component.find('li');
        expect(buttons.length).toBe(5);
    });
    it('should render as many children as pages if pages is less than 4', function() {
        var component = mount(
            React.createElement(PageButtons, {
                pages: 4,
                onChange: function onChange() {},
                activePage: 3,
            }),
        );
        var buttons = component.find('li');
        expect(buttons.length).toBe(4);
    });
    it('should set aria-current to "page" to the active button element', function() {
        var component = mount(
            React.createElement(PageButtons, {
                pages: 7,
                onChange: function onChange() {},
                activePage: 3,
            }),
        );
        var pageButtons = component.find('button');
        expect(pageButtons.get(2).props['aria-current']).toBe('page');
    });
    it('should set aria-current to undefined to the button element if is not active', function() {
        var component = mount(
            React.createElement(PageButtons, {
                pages: 7,
                onChange: function onChange() {},
                activePage: 3,
            }),
        );
        var pageButtons = component.find('button');
        expect(pageButtons.get(1).props['aria-current']).toBe(undefined);
    });
    it('should set aria-label to the button elements', function() {
        var component = mount(
            React.createElement(PageButtons, {
                pages: 7,
                onChange: function onChange() {},
                activePage: 3,
            }),
        );
        var pageButtons = component.find('button');
        expect(pageButtons.get(1).props['aria-label']).toBe('Goto Page 2');
    });
    it('should call onChange if a page button is clicked', function() {
        var onChangeMockFn = jest.fn();
        var component = mount(
            React.createElement(PageButtons, {
                pages: 1,
                onChange: onChangeMockFn,
                activePage: 1,
            }),
        );
        var button = component.find('button');
        button.simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(expect.any(Object), 1);
    });
});
