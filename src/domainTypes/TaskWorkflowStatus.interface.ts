import type { ITableColumnGroup } from './TableColumnGroup.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

export interface ITaskWorkflowStatus extends ITypicalFields{
	shortName: string

	isShowMenuBtnInPlanExpenseRow?: boolean
	isShowDeleteBtnInTaskRow?: boolean
	isShowOpenLikeMainBtnInTaskRow?: boolean
	isShowExpenseCreateMenuAtControlHead?: boolean
	isShowTaskCreateMenuAtControlHead?: boolean
	isShowPlanElementByDefault?: boolean
	isShowFactElementByDefault?: boolean
	isCreateFactElementAfterSelectedThisStatus?: boolean

	validWorkflowStatuses: ITaskWorkflowStatus[]
	validForWorkflowStatuses: ITaskWorkflowStatus[]

	tableColumnGroup: ITableColumnGroup
	admissibleTableColumnGroups?: ITableColumnGroup[]

}
