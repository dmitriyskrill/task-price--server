import type { AdmissibleStatusI } from './AdmissibleStatusI'
import type { TableColumnGroupI } from './TableColumnGroupI'

export interface ElementStatusI {
	name: string
	shortName: string
	isShowMenuBtnInLkPlanExpenseRow?: boolean
	isShowDeleteBtnInLkTaskRow?: boolean
	isShowOpenLikeMainBtnInLkTaskRow?: boolean
	isShowLkExpenseCreateMenuAtControlHead?: boolean
	isShowLkTaskCreateMenuAtControlHead?: boolean
	isShowPlanElementByDefault?: boolean
	isShowFactElementByDefault?: boolean
	isCreateFactElementAfterSelectedThisStatus?: boolean
	admissibleStatuses?: AdmissibleStatusI[]
	lkTableColumnGroup: TableColumnGroupI
	admissibleLkTableColumnGroups?: TableColumnGroupI[]
	isLkExpensePlanCreateForbidden?: boolean
	isLkExpensePlanUpdateForbidden?: boolean
	isLkExpensePlanDeleteForbidden?: boolean
	isLkExpenseFactCreateForbidden?: boolean
	isLkExpenseFactUpdateForbidden?: boolean
	isLkExpenseFactDeleteForbidden?: boolean
	isLkExpenseDayGraphPlanCreateForbidden?: boolean
	isLkExpenseDayGraphPlanUpdateForbidden?: boolean
	isLkExpenseDayGraphPlanDeleteForbidden?: boolean
	isLkExpenseDayGraphFactCreateForbidden?: boolean
	isLkExpenseDayGraphFactUpdateForbidden?: boolean
	isLkExpenseDayGraphFactDeleteForbidden?: boolean
	isLkExpenseDateGraphPlanCreateForbidden?: boolean
	isLkExpenseDateGraphPlanUpdateForbidden?: boolean
	isLkExpenseDateGraphPlanDeleteForbidden?: boolean
	isLkExpenseDateGraphFactCreateForbidden?: boolean
	isLkExpenseDateGraphFactUpdateForbidden?: boolean
	isLkExpenseDateGraphFactDeleteForbidden?: boolean
	isLkTaskPlanCreateForbidden?: boolean
	isLkTaskPlanUpdateForbidden?: boolean
	isLkTaskPlanDeleteForbidden?: boolean
	isLkTaskFactCreateForbidden?: boolean
	isLkTaskFactUpdateForbidden?: boolean
	isLkTaskFactDeleteForbidden?: boolean
	isLkTaskDayGraphPlanCreateForbidden?: boolean
	isLkTaskDayGraphPlanUpdateForbidden?: boolean
	isLkTaskDayGraphPlanDeleteForbidden?: boolean
	isLkTaskDayGraphFactCreateForbidden?: boolean
	isLkTaskDayGraphFactUpdateForbidden?: boolean
	isLkTaskDayGraphFactDeleteForbidden?: boolean
	isLkTaskDateGraphPlanCreateForbidden?: boolean
	isLkTaskDateGraphPlanUpdateForbidden?: boolean
	isLkTaskDateGraphPlanDeleteForbidden?: boolean
	isLkTaskDateGraphFactCreateForbidden?: boolean
	isLkTaskDateGraphFactUpdateForbidden?: boolean
	isLkTaskDateGraphFactDeleteForbidden?: boolean
}
