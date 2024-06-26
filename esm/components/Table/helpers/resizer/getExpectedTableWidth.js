import getMinExpectedTableWidth from './getMinExpectedTableWidth';
import hasNoFlexibleColumns from './hasNoFlexibleColumns';
export default function getExpectedTableWidth(domTableWidth, widthsMeta) {
    var minExpectedTableWidth = getMinExpectedTableWidth(widthsMeta);
    return hasNoFlexibleColumns(widthsMeta)
        ? minExpectedTableWidth
        : Math.max(minExpectedTableWidth, domTableWidth);
}
