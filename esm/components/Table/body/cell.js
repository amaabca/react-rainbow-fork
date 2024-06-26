import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import { SELECTABLE_CHECKBOX, WITH_ENUMERABLE } from '../helpers/columns';
import EnumerableCell from './enumerableCell';
import SelectableCell from './selectableCell';
import EditableCell from './editableCell';
import ActionsCell from './actionsCell';
import StyledCell from './styled/cell';
import StyledCellContent from './styled/cellContent';

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
        return React.createElement(
            CellComponent,
            _extends({}, restColumnProps, {
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
        return React.createElement(EditableCell, {
            value: value,
            onChange: onChange,
            row: rowData,
            field: field,
            cellAlignment: cellAlignment,
        });
    }

    return React.createElement(
        'span',
        {
            title: value,
        },
        value,
    );
}

CellValue.propTypes = {
    component: PropTypes.func,
    value: PropTypes.any,
    rowData: PropTypes.object,
    restColumnProps: PropTypes.object.isRequired,
    isEditable: PropTypes.bool,
    onChange: PropTypes.func,
    field: PropTypes.string,
    rowIndex: PropTypes.number.isRequired,
    type: PropTypes.string,
    cellAlignment: PropTypes.string,
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
export default function Cell(props) {
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

    if (columnType === WITH_ENUMERABLE) {
        return React.createElement(EnumerableCell, null);
    }

    if (columnType === 'action') {
        return React.createElement(ActionsCell, {
            columnChildren: columnChildren,
            rowIndex: rowIndex,
            rowsLength: rowsLength,
            rowData: rowData,
        });
    }

    if (columnType === SELECTABLE_CHECKBOX) {
        return React.createElement(SelectableCell, {
            isSelected: isSelected,
            isDisabled: isDisabled,
            tableId: tableId,
            onSelectRow: onSelectRow,
            onDeselectRow: onDeselectRow,
            inputType: inputType,
        });
    }

    if (isFirst) {
        return React.createElement(
            StyledCell,
            {
                scope: 'row',
                tabIndex: -1,
                'data-label': getHeaderLabel(),
                isEditable: isEditable,
                cellAlignment: cellAlignment,
                component: component,
            },
            React.createElement(
                StyledCellContent,
                {
                    component: component,
                    isEditable: isEditable,
                },
                React.createElement(CellValue, {
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

    return React.createElement(
        StyledCell,
        {
            as: 'td',
            role: 'gridcell',
            tabIndex: -1,
            'data-label': getHeaderLabel(),
            isEditable: isEditable,
            cellAlignment: cellAlignment,
        },
        React.createElement(
            StyledCellContent,
            {
                component: component,
                isEditable: isEditable,
            },
            React.createElement(CellValue, {
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
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    component: PropTypes.func,
    value: PropTypes.any,
    isFirst: PropTypes.bool,
    columnType: PropTypes.string,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    tableId: PropTypes.string.isRequired,
    onSelectRow: PropTypes.func,
    onDeselectRow: PropTypes.func,
    inputType: PropTypes.string,
    columnChildren: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    rowsLength: PropTypes.number,
    rowIndex: PropTypes.number,
    rowData: PropTypes.object,
    restColumnProps: PropTypes.object.isRequired,
    isEditable: PropTypes.bool,
    onChange: PropTypes.func,
    cellAlignment: PropTypes.string,
    field: PropTypes.string,
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
