import React, { Component } from 'react';
import Tree, {
	mutateTree,
	moveItemOnTree,
} from '@atlaskit/tree';

const treeWithTwoBranches = {
	rootId: '1',
	items: {
		'1': {
			id: '1',
			children: ['1-1', '1-2'],
			hasChildren: true,
			isExpanded: true,
			isChildrenLoading: false,
			data: {
				title: 'root',
			},
		},
		'1-1': {
			id: '1-1',
			children: ['1-1-1', '1-1-2'],
			hasChildren: true,
			isExpanded: true,
			isChildrenLoading: false,
			data: {
				title: 'First parent',
			},
		},
		'1-2': {
			id: '1-2',
			children: ['1-2-1', '1-2-2'],
			hasChildren: true,
			isExpanded: true,
			isChildrenLoading: false,
			data: {
				title: 'Second parent',
			},
		},
		'1-1-1': {
			id: '1-1-1',
			children: [],
			hasChildren: false,
			isExpanded: false,
			isChildrenLoading: false,
			data: {
				title: 'Child one',
			},
		},
		'1-1-2': {
			id: '1-1-2',
			children: [],
			hasChildren: false,
			isExpanded: false,
			isChildrenLoading: false,
			data: {
				title: 'Child two',
			},
		},
		'1-2-1': {
			id: '1-2-1',
			children: [],
			hasChildren: false,
			isExpanded: false,
			isChildrenLoading: false,
			data: {
				title: 'Child three',
			},
		},
		'1-2-2': {
			id: '1-2-2',
			children: [],
			hasChildren: false,
			isExpanded: false,
			isChildrenLoading: false,
			data: {
				title: 'Child four',
			},
		},
	},
};

const PADDING_PER_LEVEL = 16;

const SPAN_STYLE = {
  display: 'inline-block',
	width: '16px',
	justifyContent: 'center',
	cursor: 'pointer',
}

const PreTextIcon = ({ children }) => {
  return (
    <span style={SPAN_STYLE}>{children}</span>
  )
}

const getIcon = (
	item,
	onExpand,
	onCollapse,
) => {
	if (item.children && item.children.length > 0) {
		return item.isExpanded ? (
			<PreTextIcon onClick={() => onCollapse(item.id)}>-</PreTextIcon>
		) : (
			<PreTextIcon onClick={() => onExpand(item.id)}>+</PreTextIcon>
		);
	}
	return <PreTextIcon>&bull;</PreTextIcon>;
};

const Item = ({ item, onExpand, onCollapse, provided }) => {
  return (
    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <span>{getIcon(item, onExpand, onCollapse)}</span>
      <span>{item.data ? item.data.title : ''}</span>
    </div>
  );
}

export default class PureTree extends Component {
	state = {
		tree: treeWithTwoBranches,
	};

	onExpand = (itemId) => {
		const { tree } = this.state;
		this.setState({
			tree: mutateTree(tree, itemId, { isExpanded: true }),
		});
	};

	onCollapse = (itemId) => {
		const { tree } = this.state;
		this.setState({
			tree: mutateTree(tree, itemId, { isExpanded: false }),
		});
	};

	onDragEnd = (source, destination) => {
		const { tree } = this.state;

		if (!destination) {
			return;
		}
		const newTree = moveItemOnTree(tree, source, destination);
		this.setState({
			tree: newTree,
		});
	};

	render() {
		const { tree } = this.state;

		return (
			<Tree
				tree={tree}
				renderItem={Item}
				onExpand={this.onExpand}
				onCollapse={this.onCollapse}
				onDragEnd={this.onDragEnd}
				offsetPerLevel={PADDING_PER_LEVEL}
				isDragEnabled
			/>
		);
	}
}