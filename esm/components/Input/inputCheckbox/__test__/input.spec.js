import React from 'react';
import { mount } from 'enzyme';
import InputCheckbox from '..';
import StyledError from '../../styled/errorText';
describe('<InputCheckbox/>', function() {
    it('should set an id in the input element', function() {
        var component = mount(React.createElement(InputCheckbox, null));
        expect(component.find('input').prop('id')).toMatch(/input/);
    });
    it('should set the value passed in the input element', function() {
        var component = mount(
            React.createElement(InputCheckbox, {
                value: 'Input value',
            }),
        );
        expect(component.find('input').prop('value')).toBe('Input value');
    });
    it('should fire an event when the user change the input', function() {
        var onChangeFn = jest.fn();
        var component = mount(
            React.createElement(InputCheckbox, {
                onChange: onChangeFn,
            }),
        );
        component.find('input').simulate('change');
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });
    it('should set the tabIndex passed in the input element', function() {
        var component = mount(
            React.createElement(InputCheckbox, {
                tabIndex: 0,
            }),
        );
        expect(component.find('input').prop('tabIndex')).toBe(0);
    });
    it('should set the disabled passed in the input element', function() {
        var component = mount(
            React.createElement(InputCheckbox, {
                disabled: true,
            }),
        );
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should pass a generated id to the Label component and set the same id to the aria-labelledby for the input when a bottomHelpText is passed', function() {
        var component = mount(
            React.createElement(InputCheckbox, {
                bottomHelpText: 'Help text',
            }),
        );
        expect(component.find('Label').prop('id')).toMatch(/inline-text-label/);
        expect(component.find('input').prop('aria-labelledby')).toMatch(/inline-text-label/);
    });
    it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', function() {
        var component = mount(
            React.createElement(InputCheckbox, {
                error: 'error message',
            }),
        );
        expect(component.find(StyledError).prop('id')).toMatch(/error-message/);
        expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
    });
    it('should pass the right props to the Label component', function() {
        var component = mount(
            React.createElement(InputCheckbox, {
                label: 'custom label',
                disabled: true,
            }),
        );
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            hideLabel: false,
            disabled: true,
            inputId: expect.any(String),
        });
    });
    it('should set checked prop passed in input element', function() {
        var component = mount(
            React.createElement(InputCheckbox, {
                checked: true,
            }),
        );
        expect(component.find('input').prop('checked')).toBe(true);
    });
});
