import React, { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from '../theme';

const data = [
  {
    _id: '01',
    title: '01',
    expanded: true,
    children: [
      {
        _id: '01.01',
        title: '01.01',
        expanded: true,
      },
      {
        _id: '01.02',
        title: '01.02',
        expanded: true,
      },
      {
        _id: '01.03',
        title: '01.03',
        expanded: true,
        children: [
          {
            _id: '01.03.01',
            title: '01.03.01',
            expanded: true,
          }
        ]
      }
    ]
  },
  {
    _id: '02',
    title: '02',
    expanded: true,
    children: [
      {
        _id: '02.01',
        title: '02.01',
        expanded: true,
      }
    ]
  },
  {
    _id: '03',
    title: '03',
    expanded: true,
    children: [
      {
        _id: '03.01',
        title: '03.01',
        expanded: true,
      }
    ]
  },
  {
    _id: '04',
    title: 'Folder 01',
    expanded: true,
    children: [
      {
        _id: '04.01',
        title: 'Category inside folder',
        expanded: true,
      }
    ]
  }
];

const Tree = () => {
  const [treeData, setTreeData] = useState(data);
  const [treeData2, setTreeData2] = useState(data);
  const dndType = 'my-dnd-type';

  return (
    <div>
      <div style={{ height: 400 }}>
        <h1>Folder 01</h1>
        <SortableTree
          treeData={treeData}
          onChange={treeData => {
            console.log(treeData);
            setTreeData(treeData)
          }}
          onMoveNode={(data) => {
            console.log(data);
            // call BE with
            //
          }}
          theme={FileExplorerTheme}
          dndType={dndType}
          maxDepth={6}
        />
      </div>
      <div style={{ height: 400 }}>
        <h1>Folder 02</h1>
        <SortableTree
          treeData={treeData2}
          onChange={treeData => setTreeData2(treeData)}
          theme={FileExplorerTheme}
          dndType={dndType}
          maxDepth={6}
        />
      </div>
    </div>
  );
}

export default Tree;