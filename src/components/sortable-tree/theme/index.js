import nodeContentRenderer from './node-content-renderer-custom';
import treeNodeRenderer from './tree-node-renderer';

const theme = {
  nodeContentRenderer,
  treeNodeRenderer,
  // The width of the blocks containing the lines representing the structure of the tree
  scaffoldBlockPxWidth: 30,
  rowHeight: 25,
  // Size in px of the region near the edges that initiates scrolling on dragover
  slideRegionSize: 50,
};

export default theme;
