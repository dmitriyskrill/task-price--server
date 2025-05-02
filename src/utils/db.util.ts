function includeRelationsWithOnlyId(relations: string[]) {
	return relations.reduce((acc, relation) => {
		acc[relation] = { select: { id: true } };
		return acc;
	}, {} as Record<string, any>);
}

export { includeRelationsWithOnlyId }