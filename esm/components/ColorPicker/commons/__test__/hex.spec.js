import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { Hex } from '..';
describe('<Hex />', function() {
    it('should fire onChange with object containing the new color', function() {
        var onChangeMockFn = jest.fn();
        var context = {
            hex: '#ffffff',
            onChange: onChangeMockFn,
        };
        var wrapper = mount(
            React.createElement(
                Provider,
                {
                    value: context,
                },
                React.createElement(Hex, null),
            ),
        );
        wrapper
            .find('input[type="text"]')
            .first()
            .simulate('change', {
                target: {
                    value: '000000',
                },
            });
        wrapper.update();
        expect(onChangeMockFn).toHaveBeenCalledWith({
            hex: '#000000',
            rgba: [0, 0, 0, 1],
            hsv: [0, 0, 0],
        });
    });
    it('should not fire onChange when value is not valid color', function() {
        var onChangeMockFn = jest.fn();
        var context = {
            hex: '#ffffff',
            onChange: onChangeMockFn,
        };
        var wrapper = mount(
            React.createElement(
                Provider,
                {
                    value: context,
                },
                React.createElement(Hex, null),
            ),
        );
        wrapper
            .find('input[type="text"]')
            .first()
            .simulate('change', {
                target: {
                    value: 'foo',
                },
            });
        wrapper.update();
        expect(
            wrapper
                .find('input[type="text"]')
                .first()
                .prop('value'),
        ).toBe('foo');
        expect(onChangeMockFn).not.toHaveBeenCalled();
    });
    it('should change value when fire blur event', function() {
        var context = {
            hex: '#ffffff',
        };
        var wrapper = mount(
            React.createElement(
                Provider,
                {
                    value: context,
                },
                React.createElement(Hex, null),
            ),
        );
        wrapper
            .find('input[type="text"]')
            .first()
            .simulate('change', {
                target: {
                    value: 'foo',
                },
            });
        wrapper.update();
        expect(
            wrapper
                .find('input[type="text"]')
                .first()
                .prop('value'),
        ).toBe('foo');
        wrapper
            .find('input[type="text"]')
            .first()
            .simulate('blur');
        wrapper.update();
        expect(
            wrapper
                .find('input[type="text"]')
                .first()
                .prop('value'),
        ).toBe('ffffff');
    });
    it('should not change value when component is focused', function() {
        var context = {
            hex: '#ffffff',
        };
        var wrapper = mount(
            React.createElement(
                Provider,
                {
                    value: context,
                },
                React.createElement(Hex, null),
            ),
        );
        expect(
            wrapper
                .find('input[type="text"]')
                .first()
                .prop('value'),
        ).toBe('ffffff');
        wrapper.setProps({
            value: {
                hex: '#000000',
            },
        });
        wrapper.update();
        expect(
            wrapper
                .find('input[type="text"]')
                .first()
                .prop('value'),
        ).toBe('000000');
        wrapper
            .find('input[type="text"]')
            .first()
            .simulate('focus');
        wrapper.setProps({
            value: {
                hex: '#eeeeee',
            },
        });
        wrapper.update();
        expect(
            wrapper
                .find('input[type="text"]')
                .first()
                .prop('value'),
        ).toBe('000000');
    });
});
