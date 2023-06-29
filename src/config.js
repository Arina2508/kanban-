const LIST_TYPES = {
	BACKLOG: 'backlog',
	IN_PROGRESS: 'inProgress',
	READY: 'Ready',
	FINISHED: 'Finished'
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.FINISHED]: 'Finished'
}

const LIST_COLORS = {
	[LIST_TYPES.BACKLOG]: '#fff',
	[LIST_TYPES.IN_PROGRESS]: '#fff',
	[LIST_TYPES.READY]: '#fff',
	[LIST_TYPES.FINISHED]: '#fff'
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }
