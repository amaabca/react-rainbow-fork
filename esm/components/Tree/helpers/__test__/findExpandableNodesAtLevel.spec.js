import findExpandableNodesAtLevel from '../findExpandableNodesAtLevel';
var treeNodes = [
    {
        name: 'node-1',
        label: 'tree item',
        level: 1,
        nodePath: [0],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-2',
        label: 'tree item',
        level: 1,
        nodePath: [1],
        isExpanded: undefined,
        hasChildren: undefined,
    },
    {
        name: 'node-3',
        label: 'tree branch',
        level: 1,
        nodePath: [2],
        isExpanded: undefined,
        hasChildren: true,
    },
    {
        name: 'node-4',
        label: 'tree branch',
        level: 1,
        nodePath: [3],
        isExpanded: undefined,
        hasChildren: true,
    },
];
var expandableNodes = [
    {
        name: 'node-3',
        label: 'tree branch',
        level: 1,
        nodePath: [2],
        isExpanded: undefined,
        hasChildren: true,
    },
    {
        name: 'node-4',
        label: 'tree branch',
        level: 1,
        nodePath: [3],
        isExpanded: undefined,
        hasChildren: true,
    },
];
describe('findExpandableNodesAtLevel', function() {
    it('should return all expandable nodes at level 1', function() {
        expect(findExpandableNodesAtLevel(treeNodes, 1)).toEqual(expandableNodes);
    });
});
