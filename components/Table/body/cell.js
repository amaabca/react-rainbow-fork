'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = Cell;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _columns = require('../helpers/columns');

var _enumerableCell = _interopRequireDefault(require('./enumerableCell'));

var _selectableCell = _interopRequireDefault(require('./selectableCell'));

var _editableCell = _interopRequireDefault(require('./editableCell'));

var _actionsCell = _interopRequireDefault(require('./actionsCell'));

var _cell = _interopRequireDefault(require('./styled/cell'));

var _cellContent = _interopRequireDefault(require('./styled/cellContent'));

function CellValue(props) {
    var CellComponent = props.component,
        value = props.value,
        rowData = props.rowData,
        isEditable = props.isEditable,
        restColumnProps = props.restColumnProps,
        onChange = props.onChange,
        field = props.field,
        rowIndex = props.rowIndex,
        type = props.type,
        cellAlignment = props.cellAlignment;

    if (CellComponent) {
        return _react['default'].createElement(
            CellComponent,
            (0, _extends2['default'])({}, restColumnProps, {
                value: value,
                row: rowData,
                index: rowIndex,
                isEditable: isEditable,
                onChange: onChange,
                type: type,
                cellAlignment: cellAlignment,
            }),
        );
    }

    var editableResult =
        typeof isEditable === 'function'
            ? isEditable({
                  row: rowData,
                  value: value,
                  index: rowIndex,
              })
            : isEditable;

    if (editableResult) {
        return _react['default'].createElement(_editableCell['default'], {
            value: value,
            onChange: onChange,
            row: rowData,
            field: field,
            cellAlignment: cellAlignment,
        });
    }

    return _react['default'].createElement(
        'span',
        {
            title: value,
        },
        value,
    );
}

CellValue.propTypes = {
    component: _propTypes['default'].func,
    value: _propTypes['default'].any,
    rowData: _propTypes['default'].object,
    restColumnProps: _propTypes['default'].object.isRequired,
    isEditable: _propTypes['default'].bool,
    onChange: _propTypes['default'].func,
    field: _propTypes['default'].string,
    rowIndex: _propTypes['default'].number.isRequired,
    type: _propTypes['default'].string,
    cellAlignment: _propTypes['default'].string,
};
CellValue.defaultProps = {
    component: undefined,
    value: undefined,
    rowData: {},
    isEditable: false,
    onChange: function onChange() {},
    field: undefined,
    type: undefined,
    cellAlignment: undefined,
};

function Cell(props) {
    var header = props.header,
        component = props.component,
        value = props.value,
        columnType = props.columnType,
        isFirst = props.isFirst,
        columnChildren = props.columnChildren,
        rowIndex = props.rowIndex,
        rowsLength = props.rowsLength,
        rowData = props.rowData,
        isSelected = props.isSelected,
        isDisabled = props.isDisabled,
        tableId = props.tableId,
        onSelectRow = props.onSelectRow,
        onDeselectRow = props.onDeselectRow,
        inputType = props.inputType,
        restColumnProps = props.restColumnProps,
        isEditable = props.isEditable,
        onChange = props.onChange,
        cellAlignment = props.cellAlignment,
        field = props.field;

    var getHeaderLabel = function getHeaderLabel() {
        if (typeof header === 'string') {
            return header;
        }

        return undefined;
    };

    if (columnType === _columns.WITH_ENUMERABLE) {
        return _react['default'].createElement(_enumerableCell['default'], null);
    }

    if (columnType === 'action') {
        return _react['default'].createElement(_actionsCell['default'], {
            columnChildren: columnChildren,
            rowIndex: rowIndex,
            rowsLength: rowsLength,
            rowData: rowData,
        });
    }

    if (columnType === _columns.SELECTABLE_CHECKBOX) {
        return _react['default'].createElement(_selectableCell['default'], {
            isSelected: isSelected,
            isDisabled: isDisabled,
            tableId: tableId,
            onSelectRow: onSelectRow,
            onDeselectRow: onDeselectRow,
            inputType: inputType,
        });
    }

    if (isFirst) {
        return _react['default'].createElement(
            _cell['default'],
            {
                scope: 'row',
                tabIndex: -1,
                'data-label': getHeaderLabel(),
                isEditable: isEditable,
                cellAlignment: cellAlignment,
                component: component,
            },
            _react['default'].createElement(
                _cellContent['default'],
                {
                    component: component,
                    isEditable: isEditable,
                },
                _react['default'].createElement(CellValue, {
                    component: component,
                    value: value,
                    rowData: rowData,
                    restColumnProps: restColumnProps,
                    isEditable: isEditable,
                    onChange: onChange,
                    field: field,
                    rowIndex: rowIndex,
                    type: columnType,
                    cellAlignment: cellAlignment,
                }),
            ),
        );
    }

    return _react['default'].createElement(
        _cell['default'],
        {
            as: 'td',
            role: 'gridcell',
            tabIndex: -1,
            'data-label': getHeaderLabel(),
            isEditable: isEditable,
            cellAlignment: cellAlignment,
        },
        _react['default'].createElement(
            _cellContent['default'],
            {
                component: component,
                isEditable: isEditable,
            },
            _react['default'].createElement(CellValue, {
                component: component,
                value: value,
                rowData: rowData,
                restColumnProps: restColumnProps,
                isEditable: isEditable,
                onChange: onChange,
                field: field,
                rowIndex: rowIndex,
                type: columnType,
                cellAlignment: cellAlignment,
            }),
        ),
    );
}

Cell.propTypes = {
    header: _propTypes['default'].oneOfType([
        _propTypes['default'].node,
        _propTypes['default'].string,
    ]),
    component: _propTypes['default'].func,
    value: _propTypes['default'].any,
    isFirst: _propTypes['default'].bool,
    columnType: _propTypes['default'].string,
    isSelected: _propTypes['default'].bool,
    isDisabled: _propTypes['default'].bool,
    tableId: _propTypes['default'].string.isRequired,
    onSelectRow: _propTypes['default'].func,
    onDeselectRow: _propTypes['default'].func,
    inputType: _propTypes['default'].string,
    columnChildren: _propTypes['default'].oneOfType([
        _propTypes['default'].arrayOf(_propTypes['default'].node),
        _propTypes['default'].object,
    ]),
    rowsLength: _propTypes['default'].number,
    rowIndex: _propTypes['default'].number,
    rowData: _propTypes['default'].object,
    restColumnProps: _propTypes['default'].object.isRequired,
    isEditable: _propTypes['default'].bool,
    onChange: _propTypes['default'].func,
    cellAlignment: _propTypes['default'].string,
    field: _propTypes['default'].string,
};
Cell.defaultProps = {
    header: undefined,
    component: undefined,
    value: undefined,
    isFirst: false,
    columnType: undefined,
    isSelected: false,
    isDisabled: false,
    onSelectRow: function onSelectRow() {},
    onDeselectRow: function onDeselectRow() {},
    inputType: 'checkbox',
    columnChildren: undefined,
    rowsLength: undefined,
    rowIndex: undefined,
    rowData: {},
    isEditable: false,
    onChange: function onChange() {},
    cellAlignment: undefined,
    field: undefined,
};
