import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _regeneratorRuntime from '@babel/runtime/regenerator';

var PageSelect = (function() {
    function PageSelect(rootElement) {
        _classCallCheck(this, PageSelect);

        this.rootElement = rootElement;
    }

    _createClass(PageSelect, [
        {
            key: 'click',
            value: (function() {
                var _click = _asyncToGenerator(
                    _regeneratorRuntime.mark(function _callee() {
                        return _regeneratorRuntime.wrap(
                            function _callee$(_context) {
                                while (1) {
                                    switch ((_context.prev = _context.next)) {
                                        case 0:
                                            _context.next = 2;
                                            return $(this.rootElement)
                                                .$('select')
                                                .click();

                                        case 2:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            },
                            _callee,
                            this,
                        );
                    }),
                );

                function click() {
                    return _click.apply(this, arguments);
                }

                return click;
            })(),
        },
        {
            key: 'clickLabel',
            value: (function() {
                var _clickLabel = _asyncToGenerator(
                    _regeneratorRuntime.mark(function _callee2() {
                        return _regeneratorRuntime.wrap(
                            function _callee2$(_context2) {
                                while (1) {
                                    switch ((_context2.prev = _context2.next)) {
                                        case 0:
                                            _context2.next = 2;
                                            return $(this.rootElement)
                                                .$('label')
                                                .click();

                                        case 2:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            },
                            _callee2,
                            this,
                        );
                    }),
                );

                function clickLabel() {
                    return _clickLabel.apply(this, arguments);
                }

                return clickLabel;
            })(),
        },
        {
            key: 'hasFocusSelect',
            value: (function() {
                var _hasFocusSelect = _asyncToGenerator(
                    _regeneratorRuntime.mark(function _callee3() {
                        return _regeneratorRuntime.wrap(
                            function _callee3$(_context3) {
                                while (1) {
                                    switch ((_context3.prev = _context3.next)) {
                                        case 0:
                                            return _context3.abrupt(
                                                'return',
                                                $(this.rootElement)
                                                    .$('select')
                                                    .isFocused(),
                                            );

                                        case 1:
                                        case 'end':
                                            return _context3.stop();
                                    }
                                }
                            },
                            _callee3,
                            this,
                        );
                    }),
                );

                function hasFocusSelect() {
                    return _hasFocusSelect.apply(this, arguments);
                }

                return hasFocusSelect;
            })(),
        },
        {
            key: 'isSelectedItem',
            value: (function() {
                var _isSelectedItem = _asyncToGenerator(
                    _regeneratorRuntime.mark(function _callee4(itemPosition) {
                        var items;
                        return _regeneratorRuntime.wrap(
                            function _callee4$(_context4) {
                                while (1) {
                                    switch ((_context4.prev = _context4.next)) {
                                        case 0:
                                            _context4.next = 2;
                                            return $(this.rootElement).$$('option');

                                        case 2:
                                            items = _context4.sent;

                                            if (!items[itemPosition]) {
                                                _context4.next = 5;
                                                break;
                                            }

                                            return _context4.abrupt(
                                                'return',
                                                items[itemPosition].isSelected(),
                                            );

                                        case 5:
                                            return _context4.abrupt('return', false);

                                        case 6:
                                        case 'end':
                                            return _context4.stop();
                                    }
                                }
                            },
                            _callee4,
                            this,
                        );
                    }),
                );

                function isSelectedItem(_x) {
                    return _isSelectedItem.apply(this, arguments);
                }

                return isSelectedItem;
            })(),
        },
    ]);

    return PageSelect;
})();

module.exports = PageSelect;
