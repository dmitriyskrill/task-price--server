import { ITableColumnGroup } from './TableColumnGroup.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

export interface ITableColumn extends ITypicalFields {
	key: string // Должно быть уникальным
	width?: number // Default: 30
	isShow?: boolean // Default: false
	isFixed?: boolean // Default: false
	cellType?: string
	children?: ITableColumnChild[] // Массив объектов дочерних колонок

	tableColumnGroupList: ITableColumnGroup[]
}

interface ITableColumnChild extends ITypicalFields {
	tooltipInfo?: string
	widthPercent?: number
	key?: string
}