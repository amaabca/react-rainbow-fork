import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import ActivityTimeline from '..';
import TimelineMarker from '../../TimelineMarker';
describe('<ActivityTimeline/>', function() {
    it(
        'should be accessible when label is passed on TimelineMarker',
        _asyncToGenerator(
            _regeneratorRuntime.mark(function _callee() {
                var html, results;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch ((_context.prev = _context.next)) {
                            case 0:
                                expect.assertions(1);
                                html = ReactDOMServer.renderToString(
                                    React.createElement(
                                        ActivityTimeline,
                                        null,
                                        React.createElement(TimelineMarker, {
                                            label: 'User Sign Up.',
                                            datetime: 'Yesterday',
                                            description: 'Lorem ipsum dolor sit amet...',
                                        }),
                                    ),
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
