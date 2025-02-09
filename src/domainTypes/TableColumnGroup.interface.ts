import { ITypicalFields } from './TypicalFields.interface'
import { ITableColumn } from '@/domainTypes/TableColumn.interface'

/* Группировка колонок для отображения */
export interface ITableColumnGroup extends ITypicalFields {
	endpoint: string

	tableColumnList: ITableColumn[]
}
