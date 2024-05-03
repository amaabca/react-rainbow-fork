import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _regeneratorRuntime from '@babel/runtime/regenerator';

var PageCheckboxItem = require('./checkbox');

var PageCheckboxGroup = (function() {
    function PageCheckboxGroup(rootElement) {
        _classCallCheck(this, PageCheckboxGroup);

        this.rootElement = rootElement;
    }

    _createClass(PageCheckboxGroup, [
        {
            key: 'getItem',
            value: (function() {
                var _getItem = _asyncToGenerator(
                    _regeneratorRuntime.mark(function _callee(itemPosition) {
                        var items;
                        return _regeneratorRuntime.wrap(
                            function _callee$(_context) {
                                while (1) {
                                    switch ((_context.prev = _context.next)) {
                                        case 0:
                                            _context.next = 2;
                                            return $(this.rootElement).$$(
                                                '[data-id="input-checkbox_container"]',
                                            );

                                        case 2:
                                            items = _context.sent;

                                            if (!items[itemPosition]) {
                                                _context.next = 5;
                                                break;
                                            }

                                            return _context.abrupt(
                                                'return',
                                                new PageCheckboxItem(
                                                    ''
                                                        .concat(
                                                            this.rootElement,
                                                            ' [data-id="input-checkboxgroup_container"]:nth-child(',
                                                        )
                                                        .concat(itemPosition + 1, ')'),
                                                ),
                                            );

                                        case 5:
                                            return _context.abrupt('return', null);

                                        case 6:
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

                function getItem(_x) {
                    return _getItem.apply(this, arguments);
                }

                return getItem;
            })(),
        },
    ]);

    return PageCheckboxGroup;
})();

module.exports = PageCheckboxGroup;
