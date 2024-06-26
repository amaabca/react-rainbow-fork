import React from 'react';
import { mount } from 'enzyme';
import Content from '../content';
describe('<Content/>', function() {
    it('should return the label when there are not children', function() {
        var component = mount(
            React.createElement(Content, {
                label: 'Label in Content',
            }),
        );
        expect(component.find('span').text()).toBe('Label in Content');
    });
    it('should return the label when children is a falsy value other than zero', function() {
        var falsyValues = [false, null, undefined, NaN, ''];
        falsyValues.forEach(function(falsyValue) {
            var component = mount(
                React.createElement(
                    Content,
                    {
                        label: 'Label in Content',
                    },
                    falsyValue,
                ),
            );
            expect(component.find('span').text()).toBe('Label in Content');
        });
    });
    it('should return the 0 when children is 0', function() {
        var zero = 0;
        var component = mount(
            React.createElement(
                Content,
                {
                    label: 'Label in Content',
                },
                zero,
            ),
        );
        expect(component.find('span').text()).toBe('0');
    });
    it('should return children when label and children are passed', function() {
        var component = mount(
            React.createElement(
                Content,
                {
                    label: 'Label in Content',
                },
                'Children in Content',
            ),
        );
        expect(component.find('span').text()).toBe('Children in Content');
    });
    it('should return children when label is not passed', function() {
        var component = mount(React.createElement(Content, null, 'Children in Content'));
        expect(component.find('span').text()).toBe('Children in Content');
    });
});
