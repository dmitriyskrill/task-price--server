 import { ITableColumnGroup } from './TableColumnGroup.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

export interface ITableColumn extends ITypicalFields {
	key: string // Должно быть уникальным
	width?: number // Default: 30
	isShow?: boolean // Default: false
	isFixed?: boolean // Default: false
	cellType?: string
	isEditable?: boolean
	children?: ITableColumnChild[] // Массив объектов дочерних колонок

	tableColumnGroup?: ITableColumnGroup
}

export interface ITableColumnChild extends ITypicalFields {
	tooltipInfo?: string
	widthPercent?: number
	key?: string
	tableColumnId: string
}