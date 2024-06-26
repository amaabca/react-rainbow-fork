import React from 'react';
import { mount } from 'enzyme';
import CheckboxGroup from '../index';
import StyledLabel from '../styled/label';
import CheckboxGroupStyledContentContainer from '../styled/contentContainer';
describe('<CheckboxGroup />', function() {
    it('should set an empty array when the values passed is a "string"', function() {
        var component = mount(
            React.createElement(CheckboxGroup, {
                value: 'admin',
                className: 'custom-class-name',
            }),
        );
        var checkbox = component.find('CheckboxList');
        expect(checkbox.prop('values')).toEqual([]);
    });
    it('should set the right values when the values passed is not a "string"', function() {
        var component = mount(
            React.createElement(CheckboxGroup, {
                value: ['admin', 'user-1'],
                className: 'custom-class-name',
            }),
        );
        var checkbox = component.find('CheckboxList');
        expect(checkbox.prop('values')).toEqual(['admin', 'user-1']);
    });
    it('renders correctly in vertical orientation (default)', function() {
        var options = [
            {
                value: 'admin',
                label: 'Admin',
            },
            {
                value: 'user',
                label: 'User',
            },
        ];
        var component = mount(
            React.createElement(CheckboxGroup, {
                options: options,
            }),
        );
        var elem = component.find(CheckboxGroupStyledContentContainer);
        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe(
            'column',
        );
    });
    it('renders correctly in vertical orientation (explicit)', function() {
        var options = [
            {
                value: 'admin',
                label: 'Admin',
            },
            {
                value: 'user',
                label: 'User',
            },
        ];
        var component = mount(
            React.createElement(CheckboxGroup, {
                options: options,
                orientation: 'vertical',
            }),
        );
        var elem = component.find(CheckboxGroupStyledContentContainer);
        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe(
            'column',
        );
    });
    it('renders correctly in horizontal orientation (explicit)', function() {
        var options = [
            {
                value: 'admin',
                label: 'Admin',
            },
            {
                value: 'user',
                label: 'User',
            },
        ];
        var component = mount(
            React.createElement(CheckboxGroup, {
                options: options,
                orientation: 'horizontal',
            }),
        );
        var elem = component.find(CheckboxGroupStyledContentContainer);
        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('row');
    });
    it('should render a label when label prop is passed', function() {
        var component = mount(
            React.createElement(CheckboxGroup, {
                label: 'CheckboxGroup Label',
            }),
        );
        expect(component.find(StyledLabel).exists()).toBe(true);
    });
    it('should set "left" to labelAlignment prop passed in the Label component', function() {
        var component = mount(
            React.createElement(CheckboxGroup, {
                label: 'CheckboxGroup Label',
                labelAlignment: 'left',
            }),
        );
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
    });
    it('should set "right" to labelAlignment prop passed in the Label component', function() {
        var component = mount(
            React.createElement(CheckboxGroup, {
                label: 'CheckboxGroup Label',
                labelAlignment: 'right',
            }),
        );
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('right');
    });
    it('should set "left" to labelAlignment if prop not passed in the Label component', function() {
        var component = mount(
            React.createElement(CheckboxGroup, {
                label: 'CheckboxGroup Label',
            }),
        );
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
    });
});
