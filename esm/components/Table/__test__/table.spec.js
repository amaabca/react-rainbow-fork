import React from 'react';
import { mount } from 'enzyme';
import Table from '../index';
import Column from '../../Column';
import { ESCAPE_KEY, ENTER_KEY } from '../../../libs/constants';
jest.mock('../helpers/columns/getEnumerableWidth', function() {
    return jest.fn(function() {
        return 50;
    });
});
var data = [
    {
        name: 'a',
        number: 23,
    },
];
var tableData = [
    {
        name: 'Pepe',
        email: 'pepe@gmail.com',
        id: '1234qwerty',
    },
    {
        name: 'John',
        email: 'john@gmail.com',
        id: '5678asdfgh',
    },
    {
        name: 'Josep',
        email: 'josep@gmail.com',
        id: '9012zxcvbn',
    },
];
var eventMap = {};
document.addEventListener = jest.fn(function(event, callback) {
    eventMap[event] = callback;
});
var preventDefault = jest.fn();
describe('<Table />', function() {
    it('should not render anything if a string keyField is not passed', function() {
        var values = [undefined, null, '', 0, 123, {}, []];
        values.forEach(function(value) {
            var component = mount(
                React.createElement(
                    Table,
                    {
                        data: data,
                        keyField: value,
                    },
                    React.createElement(Column, {
                        field: 'name',
                        header: 'Name',
                    }),
                ),
            );
            expect(component.children().length).toBe(0);
        });
    });
    it('should return a table with one column', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        var header = component.find('th[scope="col"]');
        var cell = component.find('th[scope="row"]');
        expect(header.text()).toBe('Name');
        expect(cell.text()).toBe('a');
    });
    it('should not add a column when showCheckboxColumn and showRowNumberColumn are not passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(0);
        expect(component.find('th[scope="row"]').text()).toBe('a');
        component.setProps({
            children: [
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'number',
                }),
            ],
        });
        component.update();
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(1);
        expect(component.find('th[scope="row"]').text()).toBe('a');
        expect(component.find('td[role="gridcell"]').text()).toBe('23');
    });
    it('should add a column when showCheckboxColumn is passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                    showCheckboxColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(1);
        component.setProps({
            children: [
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'number',
                }),
            ],
        });
        component.update();
        expect(component.find('th[scope="row"]').length).toBe(1);
        expect(component.find('td[role="gridcell"]').length).toBe(2);
    });
    it('should update the columns state when add a column and (showCheckboxColumn and showRowNumberColumn) are not passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                headerAlignment: undefined,
                sortable: false,
                computedWidth: 50,
                type: 'text',
                isFirstDataColumn: true,
                isEditable: false,
                onChange: expect.any(Function),
            },
        ]);
        component.setProps({
            children: [
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'number',
                    sortable: true,
                }),
            ],
        });
        component.update();
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                headerAlignment: undefined,
                sortable: false,
                computedWidth: 50,
                type: 'text',
                isFirstDataColumn: true,
                isEditable: false,
                onChange: expect.any(Function),
            },
            {
                field: 'number',
                sortable: true,
                computedWidth: 50,
                type: 'text',
                isFirstDataColumn: false,
                isEditable: false,
                onChange: expect.any(Function),
                headerAlignment: undefined,
            },
        ]);
    });
    it('should update the columns state when add a column and showCheckboxColumn is passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                    showCheckboxColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().columns).toEqual([
            {
                computedWidth: 52,
                type: 'SELECTABLE_CHECKBOX',
                width: 52,
            },
            {
                field: 'name',
                header: 'Name',
                headerAlignment: undefined,
                sortable: false,
                computedWidth: 50,
                type: 'text',
                isFirstDataColumn: true,
                isEditable: false,
                onChange: expect.any(Function),
            },
        ]);
        component.setProps({
            children: [
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    headerAlignment: 'right',
                }),
                React.createElement(Column, {
                    field: 'number',
                    sortable: true,
                }),
            ],
        });
        component.update();
        expect(component.state().columns).toEqual([
            {
                computedWidth: 52,
                type: 'SELECTABLE_CHECKBOX',
                width: 52,
            },
            {
                field: 'name',
                header: 'Name',
                headerAlignment: 'right',
                sortable: false,
                computedWidth: 50,
                type: 'text',
                isFirstDataColumn: true,
                isEditable: false,
                onChange: expect.any(Function),
            },
            {
                field: 'number',
                sortable: true,
                computedWidth: 50,
                type: 'text',
                isFirstDataColumn: false,
                isEditable: false,
                onChange: expect.any(Function),
                headerAlignment: undefined,
            },
        ]);
    });
    it('should not update the columns state when the props changed are others than children', function() {
        var columnsState = [
            {
                field: 'name',
                header: 'Name',
                headerAlignment: undefined,
                sortable: false,
                computedWidth: 50,
                type: 'text',
                isFirstDataColumn: true,
                isEditable: false,
                onChange: expect.any(Function),
            },
        ];
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().columns).toEqual(columnsState);
        component.setProps({
            data: [
                {
                    email: 'john.doe@gmail.com',
                },
            ],
            sortedBy: 'email',
            sortDirection: 'asc',
        });
        component.update();
        expect(component.state().columns).toEqual(columnsState);
    });
    it('should set the right table width when resize for first time', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'number',
                    header: 'Number',
                }),
            ),
        );
        var resizeBar = component.find('span.rainbow-table_header-resize-bar');
        expect(component.state().tableWidth).toBe(100);
        resizeBar.at(0).simulate('mousedown', {
            clientX: 100,
        });
        eventMap.mousemove({
            clientX: 232,
            preventDefault: preventDefault,
        });
        eventMap.mouseup({
            preventDefault: preventDefault,
        });
        expect(component.state().tableWidth).toBe(232);
    });
    it('should store the right columns in state when resize a column', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'number',
                    header: 'Number',
                }),
            ),
        );
        var resizeBar = component.find('span.rainbow-table_header-resize-bar');
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                headerAlignment: undefined,
                computedWidth: 50,
                sortable: false,
                type: 'text',
                isFirstDataColumn: true,
                isEditable: false,
                onChange: expect.any(Function),
            },
            {
                field: 'number',
                header: 'Number',
                headerAlignment: undefined,
                computedWidth: 50,
                sortable: false,
                type: 'text',
                isFirstDataColumn: false,
                isEditable: false,
                onChange: expect.any(Function),
            },
        ]);
        resizeBar.at(0).simulate('mousedown', {
            clientX: 100,
        });
        eventMap.mousemove({
            clientX: 232,
            preventDefault: preventDefault,
        });
        eventMap.mouseup({
            preventDefault: preventDefault,
        });
        expect(component.state().columns).toEqual([
            {
                field: 'name',
                header: 'Name',
                headerAlignment: undefined,
                computedWidth: 182,
                isResized: true,
                sortable: false,
                type: 'text',
                isFirstDataColumn: true,
                isEditable: false,
                onChange: expect.any(Function),
            },
            {
                field: 'number',
                header: 'Number',
                headerAlignment: undefined,
                computedWidth: 50,
                sortable: false,
                type: 'text',
                isFirstDataColumn: false,
                isEditable: false,
                onChange: expect.any(Function),
            },
        ]);
    });
    it('should set the right table width when resize for second time', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'number',
                    header: 'Number',
                }),
            ),
        );
        var resizeBar = component.find('span.rainbow-table_header-resize-bar');
        expect(component.state().tableWidth).toBe(100);
        resizeBar.at(0).simulate('mousedown', {
            clientX: 60,
        });
        eventMap.mousemove({
            clientX: 120,
            preventDefault: preventDefault,
        });
        eventMap.mouseup({
            preventDefault: preventDefault,
        });
        expect(component.state().tableWidth).toBe(160);
        resizeBar.at(0).simulate('mousedown', {
            clientX: 120,
        });
        eventMap.mousemove({
            clientX: -10,
            preventDefault: preventDefault,
        });
        eventMap.mouseup({
            preventDefault: preventDefault,
        });
        expect(component.state().tableWidth).toBe(100);
    });
    it('should call onSort with the right data when a sortable column header is clicked', function() {
        var onSortMock = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                    onSort: onSortMock,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    sortable: true,
                }),
                React.createElement(Column, {
                    field: 'number',
                    header: 'Number',
                }),
                ',',
            ),
        );
        var tableHeader = component.find('div.rainbow-table_header-container');
        tableHeader.at(0).simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'asc');
    });
    it('should not call onSort when a non sortable column header is clicked', function() {
        var onSortMock = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                    onSort: onSortMock,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    sortable: true,
                }),
                React.createElement(Column, {
                    field: 'number',
                    header: 'Number',
                }),
                ',',
            ),
        );
        var tableHeader = component.find('div.rainbow-table_header-container');
        tableHeader.at(1).simulate('click');
        expect(onSortMock).not.toHaveBeenCalled();
    });
    it('should call onSort the first time with sortDireciton as "desc" and the second time as "asc" when defaultSortDirection is set to "desc"', function() {
        var sortedBy;
        var sortDirection;
        var onSortMock = jest.fn(function(event, field, nextSortDirection) {
            sortedBy = field;
            sortDirection = nextSortDirection;
        });
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                    onSort: onSortMock,
                    defaultSortDirection: 'desc',
                    sortDirection: sortDirection,
                    sortedBy: sortedBy,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    sortable: true,
                }),
            ),
        );
        var tableHeader = component.find('div.rainbow-table_header-container');
        tableHeader.simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'desc');
        component.setProps({
            sortedBy: sortedBy,
            sortDirection: sortDirection,
        });
        tableHeader.simulate('click');
        expect(onSortMock).toHaveBeenCalledWith(expect.any(Object), 'name', 'asc');
    });
    it('should set the right rows initially', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    keyField: 'id',
                    showCheckboxColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
    });
    it('should set the right rows initially when there are selected columns', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    selectedRows: ['5678asdfgh', '9012zxcvbn'],
                    maxRowSelection: 2,
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: true,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
    });
    it('should set the right rows initially when maxRowSelection is 1', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    maxRowSelection: 1,
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
    });
    it('should set the bulkSelection initially to "none" when there are not selected rows', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().bulkSelection).toBe('none');
    });
    it('should set the bulkSelection initially to "some" when there are one row selected', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    selectedRows: ['1234qwerty'],
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().bulkSelection).toBe('some');
    });
    it('should set the bulkSelection initially to "all" when all rows are selected', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    selectedRows: ['1234qwerty', '5678asdfgh', '9012zxcvbn'],
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().bulkSelection).toBe('all');
    });
    it('should set the right state when change the maxRowSelection', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    maxRowSelection: 2,
                    showCheckboxColumn: true,
                    selectedRows: ['1234qwerty', '5678asdfgh'],
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: true,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('all');
        component.setProps({
            maxRowSelection: 3,
        });
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('some');
    });
    it('should set the right state when change the selectedRows', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    selectedRows: ['1234qwerty'],
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('some');
        component.setProps({
            selectedRows: ['1234qwerty', '9012zxcvbn'],
        });
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(component.state().bulkSelection).toBe('some');
    });
    it('should fire onRowSelection with new selected data when change the selectedRows', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    onRowSelection: onRowSelectionMockFn,
                    selectedRows: ['1234qwerty'],
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
        });
        component.setProps({
            selectedRows: ['1234qwerty', '9012zxcvbn'],
        });
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '9012zxcvbn': true,
        });
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                id: '1234qwerty',
                name: 'Pepe',
                email: 'pepe@gmail.com',
            },
            {
                id: '9012zxcvbn',
                name: 'Josep',
                email: 'josep@gmail.com',
            },
        ]);
    });
    it('should call onRowSelection with the right data when select all rows and there are selected rows', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    selectedRows: ['1234qwerty'],
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        var headCheckbox = component
            .find('PrimitiveCheckbox[label="select all rows"]')
            .find('input');
        headCheckbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([]);
    });
    it('should call onRowSelection with the right data when select all rows and there are not selected rows', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        var headCheckbox = component
            .find('PrimitiveCheckbox[label="select all rows"]')
            .find('input');
        headCheckbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'Pepe',
                email: 'pepe@gmail.com',
                id: '1234qwerty',
            },
            {
                name: 'John',
                email: 'john@gmail.com',
                id: '5678asdfgh',
            },
            {
                name: 'Josep',
                email: 'josep@gmail.com',
                id: '9012zxcvbn',
            },
        ]);
    });
    it('should call onRowSelection with the right data when select a single row and there are selected rows', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    selectedRows: ['1234qwerty'],
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        var checkbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(2);
        checkbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'Pepe',
                email: 'pepe@gmail.com',
                id: '1234qwerty',
            },
            {
                name: 'Josep',
                email: 'josep@gmail.com',
                id: '9012zxcvbn',
            },
        ]);
    });
    it('should call onRowSelection with the right data when select a single row with shiftKey pressed', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        var firstCheckbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(0);
        var lastCheckbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(2);
        firstCheckbox.simulate('click');
        expect(component.instance().lastSelectedRowKey).toBe('1234qwerty');
        lastCheckbox.simulate('click', {
            shiftKey: true,
        });
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'Pepe',
                email: 'pepe@gmail.com',
                id: '1234qwerty',
            },
            {
                name: 'John',
                email: 'john@gmail.com',
                id: '5678asdfgh',
            },
            {
                name: 'Josep',
                email: 'josep@gmail.com',
                id: '9012zxcvbn',
            },
        ]);
    });
    it('should call onRowSelection with the right data when select a single row and maxRowSelection is 1', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    maxRowSelection: 1,
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        var radio = component
            .find('Input[label="select row"]')
            .find('input')
            .at(1);
        radio.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'radio',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                name: 'John',
                email: 'john@gmail.com',
                id: '5678asdfgh',
            },
        ]);
    });
    it('should call onRowSelection with the right data when deselect a single row', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    selectedRows: ['1234qwerty', '5678asdfgh'],
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        var checkbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(0);
        checkbox.simulate('click');
        expect(component.state().rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(onRowSelectionMockFn).toHaveBeenCalledWith([
            {
                id: '5678asdfgh',
                email: 'john@gmail.com',
                name: 'John',
            },
        ]);
        expect(component.instance().lastSelectedRowKey).toBe('1234qwerty');
    });
    it('should set the right indexes when data prop changes', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: [],
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        component.setProps({
            data: tableData,
        });
        expect(component.instance().indexes).toEqual({
            '1234qwerty': {
                rowIndex: 0,
            },
            '5678asdfgh': {
                rowIndex: 1,
            },
            '9012zxcvbn': {
                rowIndex: 2,
            },
        });
    });
    it('should set the right state when data prop changes', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: [],
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        component.setProps({
            data: tableData,
        });

        var _component$instance = component.instance(),
            state = _component$instance.state;

        expect(state.rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(state.bulkSelection).toBe('none');
    });
    it('should set the right state when data prop changes and have selected rows', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: [],
                    showCheckboxColumn: true,
                    selectedRows: ['5678asdfgh'],
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        component.setProps({
            data: tableData,
        });

        var _component$instance2 = component.instance(),
            state = _component$instance2.state;

        expect(state.rows).toEqual([
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '1234qwerty',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: true,
                key: '5678asdfgh',
            },
            {
                inputType: 'checkbox',
                isDisabled: false,
                isSelected: false,
                key: '9012zxcvbn',
            },
        ]);
        expect(state.bulkSelection).toBe('some');
    });
    it('should set the initial selectedRowsKeys to empty object when not pass selectedRows', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'ID',
                }),
            ),
        );
        expect(component.instance().selectedRowsKeys).toEqual({});
    });
    it('should set the right initial selectedRowsKeys when pass selectedRows', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    keyField: 'id',
                    selectedRows: ['1234qwerty', '5678asdfgh', 'wrong-key'],
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'ID',
                }),
            ),
        );
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '5678asdfgh': true,
        });
    });
    it('should not reset selectedRowsKeys state when pass new data prop', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'ID',
                }),
            ),
        );
        var checkbox = component
            .find('Input[label="select row"]')
            .find('input')
            .at(1);
        checkbox.simulate('click');
        expect(component.instance().selectedRowsKeys).toEqual({
            '5678asdfgh': true,
        });
        component.setProps({
            data: [
                {
                    name: 'Pepe',
                    id: '1234qwerty',
                },
                {
                    name: 'John',
                    id: '5678asdfgh',
                },
                {
                    name: 'Josep',
                    id: '9012zxcvbn',
                },
            ],
        });
        expect(component.instance().selectedRowsKeys).toEqual({
            '5678asdfgh': true,
        });
    });
    it('should fire onRowSelection when pass new data prop that does not contains prev selected data', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'ID',
                }),
            ),
        );
        var checkbox2 = component
            .find('Input[label="select row"]')
            .find('input')
            .at(1);
        checkbox2.simulate('click');
        expect(component.instance().selectedRowsKeys).toEqual({
            '5678asdfgh': true,
        });
        expect(onRowSelectionMockFn.mock.calls[0][0]).toEqual([
            {
                id: '5678asdfgh',
                email: 'john@gmail.com',
                name: 'John',
            },
        ]);
        component.setProps({
            data: [
                {
                    name: 'Pepe',
                    id: '1234qwerty',
                },
                {
                    name: 'Josep',
                    id: '9012zxcvbn',
                },
            ],
        });
        expect(component.instance().selectedRowsKeys).toEqual({});
        expect(onRowSelectionMockFn.mock.calls[1][0]).toEqual([]);
    });
    it('should not change bulkSelection state when select all rows and then pass new data prop that remove one row', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: tableData,
                    showCheckboxColumn: true,
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'ID',
                }),
            ),
        );
        var headCheckbox = component
            .find('PrimitiveCheckbox[label="select all rows"]')
            .find('input');
        headCheckbox.simulate('click');
        expect(component.state('bulkSelection')).toBe('all');
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '5678asdfgh': true,
            '9012zxcvbn': true,
        });
        component.setProps({
            data: [
                {
                    name: 'Pepe',
                    id: '1234qwerty',
                },
                {
                    name: 'Josep',
                    id: '9012zxcvbn',
                },
            ],
        });
        expect(component.state('bulkSelection')).toBe('all');
        expect(component.instance().selectedRowsKeys).toEqual({
            '1234qwerty': true,
            '9012zxcvbn': true,
        });
    });
    it('should not fire onRowSelection when set data and selectedRows after mount the component', function() {
        var onRowSelectionMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: [],
                    showCheckboxColumn: true,
                    onRowSelection: onRowSelectionMockFn,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'ID',
                }),
            ),
        );
        component.setProps({
            data: tableData,
            selectedRows: ['1234qwerty', '5678asdfgh', '9012zxcvbn'],
        });
        expect(onRowSelectionMockFn).not.toHaveBeenCalled();
    });
    it('should set input type to "checkbox" when there is only one row', function() {
        var singleData = [
            {
                name: 'John Doe',
            },
        ];
        var component = mount(
            React.createElement(
                Table,
                {
                    keyField: 'id',
                    data: singleData,
                    showCheckboxColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
            ),
        );
        var input = component.find('Input[label="select row"]').find('input');
        expect(input.prop('type')).toBe('checkbox');
    });
    it('should render the right amount of columns headers with the right props', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var thElements = component.find('thead').find('th');
        expect(thElements.length).toBe(3);
        thElements.forEach(function(th) {
            return expect(th.props()).toEqual(
                expect.objectContaining({
                    'aria-label': th.text(),
                    scope: 'col',
                    tabIndex: -1,
                }),
            );
        });
    });
    it('should render the right amount of columns headers with the right props when showCheckboxColumn is passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                    showCheckboxColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var thElements = component.find('thead').find('th');
        expect(thElements.length).toBe(4);
        thElements.forEach(function(th, index) {
            if (index === 0) {
                expect(th.props()).toEqual(
                    expect.objectContaining({
                        scope: 'col',
                        tabIndex: -1,
                    }),
                );
            } else {
                expect(th.props()).toEqual(
                    expect.objectContaining({
                        'aria-label': th.text(),
                        scope: 'col',
                        tabIndex: -1,
                    }),
                );
            }
        });
    });
    it('should render the right amount of columns headers with the right props when showRowNumberColumn is passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                    showRowNumberColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var thElements = component.find('thead').find('th');
        expect(thElements.length).toBe(4);
        thElements.forEach(function(th, index) {
            if (index === 0) {
                expect(th.props()).toEqual(
                    expect.objectContaining({
                        scope: 'col',
                        tabIndex: -1,
                    }),
                );
            } else {
                expect(th.props()).toEqual(
                    expect.objectContaining({
                        'aria-label': th.text(),
                        scope: 'col',
                        tabIndex: -1,
                    }),
                );
            }
        });
    });
    it('should render the right amount of columns headers with the right props when showCheckboxColumn and showRowNumberColumn are passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                    showCheckboxColumn: true,
                    showRowNumberColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var thElements = component.find('thead').find('th');
        expect(thElements.length).toBe(5);
        thElements.forEach(function(th, index) {
            if (index === 0 || index === 1) {
                expect(th.props()).toEqual(
                    expect.objectContaining({
                        scope: 'col',
                        tabIndex: -1,
                    }),
                );
            } else {
                expect(th.props()).toEqual(
                    expect.objectContaining({
                        'aria-label': th.text(),
                        scope: 'col',
                        tabIndex: -1,
                    }),
                );
            }
        });
    });
    it('should render the right amount of body cells with the right props', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var firstRowChildren = component
            .find('tbody')
            .find('tr')
            .at(0)
            .children();
        expect(firstRowChildren.length).toBe(3);
        firstRowChildren.forEach(function(element, index) {
            if (index === 0) {
                expect(element.find('th').props()).toEqual(
                    expect.objectContaining({
                        scope: 'row',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            } else {
                expect(element.find('td').props()).toEqual(
                    expect.objectContaining({
                        role: 'gridcell',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            }
        });
    });
    it('should render the right amount of body cells with the right props when showCheckboxColumn is passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                    showCheckboxColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var firstRowChildren = component
            .find('tbody')
            .find('tr')
            .at(0)
            .children();
        expect(firstRowChildren.length).toBe(4);
        firstRowChildren.forEach(function(element, index) {
            if (index === 0) {
                expect(element.find('td').props()).toEqual(
                    expect.objectContaining({
                        role: 'gridcell',
                        tabIndex: -1,
                    }),
                );
            } else if (index === 1) {
                expect(element.find('th').props()).toEqual(
                    expect.objectContaining({
                        scope: 'row',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            } else {
                expect(element.find('td').props()).toEqual(
                    expect.objectContaining({
                        role: 'gridcell',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            }
        });
    });
    it('should render the right amount of body cells with the right props when showRowNumberColumn is passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                    showRowNumberColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var firstRowChildren = component
            .find('tbody')
            .find('tr')
            .at(0)
            .children();
        expect(firstRowChildren.length).toBe(4);
        firstRowChildren.forEach(function(element, index) {
            if (index === 0) {
                expect(element.find('td').props()).toEqual(
                    expect.objectContaining({
                        role: 'gridcell',
                        tabIndex: -1,
                    }),
                );
            } else if (index === 1) {
                expect(element.find('th').props()).toEqual(
                    expect.objectContaining({
                        scope: 'row',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            } else {
                expect(element.find('td').props()).toEqual(
                    expect.objectContaining({
                        role: 'gridcell',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            }
        });
    });
    it('should render the right amount of body cells with the right props when showCheckboxColumn and showRowNumberColumn are passed', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'id',
                    showCheckboxColumn: true,
                    showRowNumberColumn: true,
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                }),
                React.createElement(Column, {
                    field: 'email',
                    header: 'Email',
                }),
                React.createElement(Column, {
                    field: 'id',
                    header: 'User Id',
                }),
            ),
        );
        var firstRowChildren = component
            .find('tbody')
            .find('tr')
            .at(0)
            .children();
        expect(firstRowChildren.length).toBe(5);
        firstRowChildren.forEach(function(element, index) {
            if (index === 0 || index === 1) {
                expect(element.find('td').props()).toEqual(
                    expect.objectContaining({
                        role: 'gridcell',
                        tabIndex: -1,
                    }),
                );
            } else if (index === 2) {
                expect(element.find('th').props()).toEqual(
                    expect.objectContaining({
                        scope: 'row',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            } else {
                expect(element.find('td').props()).toEqual(
                    expect.objectContaining({
                        role: 'gridcell',
                        tabIndex: -1,
                        'data-label': expect.any(String),
                    }),
                );
            }
        });
    });
    it('should return a table with EditableCell', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                }),
            ),
        );
        expect(component.find('EditableCell').exists()).toBe(true);
    });
    it('should render a span with the received value of the data inside the EditableCell', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var span = editableCell.find('span');
        expect(span.text().includes('a')).toBe(true);
    });
    it('should render an input with the received value when click inside the EditableCell', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var div = editableCell.find('div');
        div.simulate('click');
        var editableCellAfterClick = component.find('EditableCell');
        expect(editableCellAfterClick.find('input').prop('value')).toBe('a');
    });
    it('should render a button when click inside the EditableCell', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var div = editableCell.find('div');
        div.simulate('click');
        var editableCellAfterClick = component.find('EditableCell');
        expect(editableCellAfterClick.find('button').exists()).toBe(true);
    });
    it('should unmount the input when blur', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var div = editableCell.find('div');
        div.simulate('click');
        var editableCellAfterClick = component.find('EditableCell');
        var input = editableCellAfterClick.find('input');
        input.simulate('change', {
            target: {
                value: 'b',
            },
        });
        input.simulate('blur');
        var editableCellAfterBlur = component.find('EditableCell');
        var inputAfterBlur = editableCellAfterBlur.find('input');
        expect(inputAfterBlur.exists()).toBe(false);
    });
    it('should call onChangeMockFn when blur', function() {
        var onChangeMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                    onChange: onChangeMockFn,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var div = editableCell.find('div');
        div.simulate('click');
        var editableCellAfterClick = component.find('EditableCell');
        var input = editableCellAfterClick.find('input');
        input.simulate('change', {
            target: {
                value: 'b',
            },
        });
        input.simulate('blur');
        expect(onChangeMockFn.mock.calls.length).toBe(1);
        expect(onChangeMockFn).toBeCalledWith({
            value: 'b',
            row: expect.any(Object),
        });
    });
    it('should clear the input when click in button clear', function() {
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var div = editableCell.find('div');
        div.simulate('click');
        var editableCellAfterClick = component.find('EditableCell');
        var button = editableCellAfterClick.find('button');
        button.simulate('mouseDown');
        var editableCellAfterClearClick = component.find('EditableCell');
        var input = editableCellAfterClearClick.find('input');
        expect(input.prop('value')).toBe('');
    });
    it('should unmount the input when onKey ENTER and call the onChange', function() {
        var onChangeMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                    onChange: onChangeMockFn,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var div = editableCell.find('div');
        div.simulate('click');
        var editableCellAfterClick = component.find('EditableCell');
        var input = editableCellAfterClick.find('input');
        input.simulate('change', {
            target: {
                value: 'b',
            },
        });
        input.simulate('keydown', {
            keyCode: ENTER_KEY,
        });
        var editableCellAfterKeyDown = component.find('EditableCell');
        var inputAfterKeyDown = editableCellAfterKeyDown.find('input');
        expect(inputAfterKeyDown.exists()).toBe(false);
        expect(onChangeMockFn).toBeCalledWith({
            value: 'b',
            row: expect.any(Object),
        });
    });
    it('should unmount the input when onKey ESCAPE and not call the onChange', function() {
        var onChangeMockFn = jest.fn();
        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                    onChange: onChangeMockFn,
                }),
            ),
        );
        var editableCell = component.find('EditableCell');
        var div = editableCell.find('div');
        div.simulate('click');
        var editableCellAfterClick = component.find('EditableCell');
        var input = editableCellAfterClick.find('input');
        input.simulate('change', {
            target: {
                value: 'b',
            },
        });
        input.simulate('keydown', {
            keyCode: ESCAPE_KEY,
        });
        var editableCellAfterKeyDown = component.find('EditableCell');
        var inputAfterKeyDown = editableCellAfterKeyDown.find('input');
        expect(inputAfterKeyDown.exists()).toBe(false);
        expect(onChangeMockFn).not.toHaveBeenCalled();
    });
    it('should render a CustomComponent with the isEditable and onChange props', function() {
        var onChangeFn = function onChangeFn() {};

        var CustomComponent = function CustomComponent() {
            return React.createElement('span', null, 'Hola Mundo');
        };

        var component = mount(
            React.createElement(
                Table,
                {
                    data: data,
                    keyField: 'name',
                },
                React.createElement(Column, {
                    field: 'name',
                    header: 'Name',
                    isEditable: true,
                    onChange: onChangeFn,
                    component: CustomComponent,
                }),
            ),
        );
        var customComponent = component.find('CustomComponent');
        expect(customComponent.prop('isEditable')).toBe(true);
        expect(customComponent.prop('onChange')).toEqual(onChangeFn);
    });
});
