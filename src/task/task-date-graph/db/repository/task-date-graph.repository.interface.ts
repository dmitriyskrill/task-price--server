import { TaskDateGraph } from '@prisma/client'
import { TaskDateGraphDto, UpdateTaskDateGraphDto} from '@/task/task-date-graph/dto/task-date-graph.dto'

interface ITaskDateGraphRepository {
	getAll(userId: string): Promise<TaskDateGraph[]>
	getById(id: string): Promise<TaskDateGraph>
	create(dto: TaskDateGraphDto, userId: string): Promise<TaskDateGraph>
	update(dto: UpdateTaskDateGraphDto, taskId: string, userId: string): Promise<TaskDateGraph>
	delete(taskId: string): Promise<TaskDateGraph>
}

export { ITaskDateGraphRepository }