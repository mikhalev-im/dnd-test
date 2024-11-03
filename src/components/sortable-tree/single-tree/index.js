import React, { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from '../theme';

const data = [
  {
    title: '01',
    level: 1,
    children: [
      {
        title: '01.01',
        level: 2,
      },
      {
        title: '01.02',
        level: 2,
      },
      {
        title: '01.03',
        level: 2,
        children: [
          {
            title: '01.03.01',
            level: 3
          }
        ]
      }
    ]
  },
  {
    title: '02',
    level: 1,
    children: [
      { title: '02.01', level: 2 }
    ]
  },
  {
    title: '03',
    level: 1,
    children: [
      { title: '03.01', level: 2 }
    ]
  },
  {
    title: 'Folder 01',
    level: 1,
    children: [
      {
        title: 'Category inside folder',
        level: 2
      }
    ]
  }
];

const Tree = () => {
  const [treeData, setTreeData] = useState(data);

  return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={treeData}
          onChange={treeData => {
            console.log(treeData);
            setTreeData(treeData)
          }}
          theme={FileExplorerTheme}
          maxDepth={6}
        />
      </div>
  );
}

export default Tree;