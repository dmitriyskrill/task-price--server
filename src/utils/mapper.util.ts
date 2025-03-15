export function mapDtoToEntity<
	TEntity extends Record<string, any>,
	TDto extends Partial<TEntity>
>(
	dto: TDto,
	baseEntity: Partial<TEntity> = {},
	extraFields: Partial<TEntity> = {}
): TEntity {
	const entity: TEntity = { ...baseEntity } as TEntity;

	Object.keys(dto).forEach((key) => {
		const typedKey = key as keyof TEntity;
		if (dto[typedKey] !== undefined) {
			entity[typedKey] = dto[typedKey] as unknown as TEntity[typeof typedKey]
		}
	});

	Object.assign(entity, extraFields);

	return entity;
}

