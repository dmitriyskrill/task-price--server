import { Task } from '@prisma/client'
import { TaskDto, UpdateTaskDto } from '@/task/db/dto/task.dto'

interface ITaskRepository {
	getAllTasks(): Promise<Task[]>
	getAll(userId: string): Promise<Task[]>
	create(dto: TaskDto, userId: string): Promise<Task>
	update(dto: UpdateTaskDto, taskId: string, userId: string): Promise<Task>
	delete(taskId: string): Promise<Task>
}

export { ITaskRepository }