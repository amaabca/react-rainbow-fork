'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _pickerModal = _interopRequireDefault(require('../pickerModal'));

var value = new Date('06/01/2019 20:48:34');
jest.mock('../helpers/extractDate', function() {
    return jest.fn(function() {
        return '10/24/2019';
    });
});
var todayAt12AM = new Date('10/24/2019 12:00 AM');
describe('<DateTimePickerModal/>', function() {
    it('should set Modal isOpen prop to true', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_pickerModal['default'], {
                isOpen: true,
                formatStyle: 'medium',
            }),
        );
        expect(component.find('Modal').props().isOpen).toBe(true);
    });
    it('should pass right value to Calendar component', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_pickerModal['default'], {
                isOpen: true,
                value: value,
            }),
        );
        expect(component.find('Calendar').props().value).toBe(value);
    });
    it('should pass the right time to TimeSelect component', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_pickerModal['default'], {
                isOpen: true,
                value: value,
            }),
        );
        expect(component.find('TimeSelect').props().value).toBe('08:48 PM');
    });
    xit('should set 12:00 AM to TimeSelect when value is null and date is changed', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_pickerModal['default'], {
                isOpen: true,
            }),
        );
        component
            .find('Calendar')
            .find('tbody')
            .find('button')
            .at(5)
            .simulate('click');
        expect(component.find('TimeSelect').props().value).toBe('12:00 AM');
    });
    xit('should fire OnChange when Ok button is clicked', function() {
        var onChangeMockFn = jest.fn();
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_pickerModal['default'], {
                isOpen: true,
                onChange: onChangeMockFn,
            }),
        );
        component
            .find('Calendar')
            .find('tbody')
            .find('button')
            .at(5)
            .simulate('click');
        component
            .find('TimeSelect')
            .find('Button')
            .at(1)
            .simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(todayAt12AM);
    });
});
