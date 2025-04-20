import { IUser } from './User.interface'
export interface ITypicalFields {
	id: string
	name: string

	sort: bigint


	// Хранение истории изменения элементов на начальном этапе разработке избыточна,
	// Но понять ключевые моменты когда и кем создано и как давно обновлялась для
	// пользователя будет полезна
	createdAt: Date
	createdById: string

	updatedAt: Date
	updatedById: string

	// Не всегда можно разрешить пользователю удалять элементы,
	// но убрать их из визуального отображения полезно
	isTrash: boolean
	dateAddingToTrash: Date
}


/* Подсказка как реализовать в Prisma

model YourModel {
  id          String      @id @default(autoincrement())
  name        String
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")
}

@default(now()): Указывает, что при создании записи значение поля createdAt будет установлено в текущую дату и время.
@updatedAt: Автоматически обновляет значение updatedAt каждый раз, когда запись изменяется.
@map("created_at") и @map("updated_at"): Это опционально. Если вы хотите соответствовать именованию полей в PostgreSQL (например, snake_case), используйте эти аннотации.

Убедитесь, что PostgreSQL правильно работает с временными зонами
Рекомендуется убедиться, что PostgreSQL настроен для работы с временными метками в UTC. В PostgreSQL по умолчанию используется тип timestamp with time zone для хранения дат:

Если вы используете DateTime в Prisma, он автоматически сопоставляется с timestamp with time zone.
Убедитесь, что PostgreSQL настроен правильно:

sql
Копировать
Редактировать
SHOW timezone
-- Должен возвращать 'UTC' или вашу предпочитаемую временную зону
*/