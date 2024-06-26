'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _counter = _interopRequireDefault(require('../counter'));

jest.mock('../../../libs/utils/getSuffixSI', function() {
    return function(total) {
        return ''.concat(total, 'k');
    };
});
describe('<Counter />', function() {
    var avatars = [
        {
            src: 'images/user/user1.jpg',
            assistiveText: 'Jose Leandro',
            title: 'Jose Leandro',
        },
        {
            src: 'images/user/user2.jpg',
            assistiveText: 'Tahimi Leon',
            title: 'Tahimi Leon',
        },
        {
            src: 'images/user/user3.jpg',
            assistiveText: 'Carlos Miguel',
            title: 'Carlos Miguel',
        },
        {
            src: 'images/user/user4.jpg',
            assistiveText: 'Jane Doe',
            title: 'Jane Doe',
        },
    ];
    it('should render the right total number of avatars', function() {
        var component = (0, _enzyme.mount)(
            _react['default'].createElement(_counter['default'], {
                avatars: avatars,
            }),
        );
        expect(component.find(_counter['default']).text()).toBe('4k');
    });
});
