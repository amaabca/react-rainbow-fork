import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import RadioButtonGroup from '../index';
var options = [
    {
        value: 'radioOne',
        label: 'Radio One',
    },
    {
        value: 'radioTwo',
        label: 'Radio Two',
    },
    {
        value: 'radioThree',
        label: 'Radio Three',
    },
];
describe('<RadioButtonGroup/>', function() {
    it(
        'should be accessible when both all options and the group have a label',
        _asyncToGenerator(
            _regeneratorRuntime.mark(function _callee() {
                var html, results;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch ((_context.prev = _context.next)) {
                            case 0:
                                expect.assertions(1);
                                html = ReactDOMServer.renderToString(
                                    React.createElement(RadioButtonGroup, {
                                        label: 'RadioButtonGroup Label',
                                        options: options,
                                    }),
                                );
                                _context.next = 4;
                                return axe(html);

                            case 4:
                                results = _context.sent;
                                expect(results).toHaveNoViolations();

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee);
            }),
        ),
    );
});
