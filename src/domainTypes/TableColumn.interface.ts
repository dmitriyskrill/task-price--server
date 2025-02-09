import { ITableColumnGroup } from './TableColumnGroup.interface'

export interface ITableColumn {
	endpoint?: string // Default: 'lkTableColumn'
	sort?: number // Default: 0
	name?: string
	key?: string // Должно быть уникальным
	width?: number // Default: 30
	isShow?: boolean // Default: false
	isFixed?: boolean // Default: false
	cellType?: string
	children?: {
		name?: string
		tooltipInfo?: string
		widthPercent?: number
		key?: string
	}[] // Массив объектов дочерних колонок

	tableColumnGroupList: ITableColumnGroup[]
}