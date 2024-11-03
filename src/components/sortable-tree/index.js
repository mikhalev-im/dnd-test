import React from 'react';
import 'react-sortable-tree/style.css';

// Option 1: render folders inside single tree
import Option1 from './single-tree';
// Option 2: render folders as independent trees, move categories between trees
// pros: easy max depth validation
import Option2 from './multiple-trees';

const Tree = () => {
  return (
    // <Option1 />
    <Option2 />
  )
}

export default Tree;