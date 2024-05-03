export default function getIndexes() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var indexes = {};

    if (Array.isArray(rows)) {
        rows.forEach(function(row, rowIndex) {
            indexes[row.key] = {
                rowIndex: rowIndex,
            };
        });
    }

    return indexes;
}
