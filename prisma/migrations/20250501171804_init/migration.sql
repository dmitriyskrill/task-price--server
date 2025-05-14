/*
  Warnings:

  - You are about to drop the column `tableColumnId` on the `TableColumnGroup` table. All the data in the column will be lost.
  - Added the required column `table_column_id` to the `TableColumnGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TableColumnGroup" DROP CONSTRAINT "TableColumnGroup_tableColumnId_fkey";

-- AlterTable
ALTER TABLE "TableColumnGroup" DROP COLUMN "tableColumnId",
ADD COLUMN     "table_column_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ElementStatus" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "width" INTEGER DEFAULT 30,
    "sort" BIGINT DEFAULT 0,
    "is_show" BOOLEAN DEFAULT false,
    "is_fixed" BOOLEAN DEFAULT false,
    "is_editable" BOOLEAN DEFAULT false,
    "cell_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "table_column_group_id" TEXT NOT NULL,
    "isShowMenuBtnInPlanExpenseRow" BOOLEAN,
    "isShowDeleteBtnInTaskRow" BOOLEAN,
    "isShowOpenLikeMainBtnInTaskRow" BOOLEAN,
    "isShowExpenseCreateMenuAtControlHead" BOOLEAN,
    "isShowTaskCreateMenuAtControlHead" BOOLEAN,
    "isShowPlanElementByDefault" BOOLEAN,
    "isShowFactElementByDefault" BOOLEAN,
    "isCreateFactElementAfterSelectedThisStatus" BOOLEAN,
    "isExpensePlanCreateForbidden" BOOLEAN,
    "isExpensePlanUpdateForbidden" BOOLEAN,
    "isExpensePlanDeleteForbidden" BOOLEAN,
    "isExpenseFactCreateForbidden" BOOLEAN,
    "isExpenseFactUpdateForbidden" BOOLEAN,
    "isExpenseFactDeleteForbidden" BOOLEAN,
    "isExpenseDayGraphPlanCreateForbidden" BOOLEAN,
    "isExpenseDayGraphPlanUpdateForbidden" BOOLEAN,
    "isExpenseDayGraphPlanDeleteForbidden" BOOLEAN,
    "isExpenseDayGraphFactCreateForbidden" BOOLEAN,
    "isExpenseDayGraphFactUpdateForbidden" BOOLEAN,
    "isExpenseDayGraphFactDeleteForbidden" BOOLEAN,
    "isExpenseDateGraphPlanCreateForbidden" BOOLEAN,
    "isExpenseDateGraphPlanUpdateForbidden" BOOLEAN,
    "isExpenseDateGraphPlanDeleteForbidden" BOOLEAN,
    "isExpenseDateGraphFactCreateForbidden" BOOLEAN,
    "isExpenseDateGraphFactUpdateForbidden" BOOLEAN,
    "isExpenseDateGraphFactDeleteForbidden" BOOLEAN,
    "isTaskPlanCreateForbidden" BOOLEAN,
    "isTaskPlanUpdateForbidden" BOOLEAN,
    "isTaskPlanDeleteForbidden" BOOLEAN,
    "isTaskFactCreateForbidden" BOOLEAN,
    "isTaskFactUpdateForbidden" BOOLEAN,
    "isTaskFactDeleteForbidden" BOOLEAN,
    "isTaskDayGraphPlanCreateForbidden" BOOLEAN,
    "isTaskDayGraphPlanUpdateForbidden" BOOLEAN,
    "isTaskDayGraphPlanDeleteForbidden" BOOLEAN,
    "isTaskDayGraphFactCreateForbidden" BOOLEAN,
    "isTaskDayGraphFactUpdateForbidden" BOOLEAN,
    "isTaskDayGraphFactDeleteForbidden" BOOLEAN,
    "isTaskDateGraphPlanCreateForbidden" BOOLEAN,
    "isTaskDateGraphPlanUpdateForbidden" BOOLEAN,
    "isTaskDateGraphPlanDeleteForbidden" BOOLEAN,
    "isTaskDateGraphFactCreateForbidden" BOOLEAN,
    "isTaskDateGraphFactUpdateForbidden" BOOLEAN,
    "isTaskDateGraphFactDeleteForbidden" BOOLEAN,

    CONSTRAINT "ElementStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_admissibleTableColumnGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_admissibleTableColumnGroups_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AdmissibleStatuses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdmissibleStatuses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "ElementStatus_key_key" ON "ElementStatus"("key");

-- CreateIndex
CREATE INDEX "ElementStatus_key_idx" ON "ElementStatus"("key");

-- CreateIndex
CREATE INDEX "_admissibleTableColumnGroups_B_index" ON "_admissibleTableColumnGroups"("B");

-- CreateIndex
CREATE INDEX "_AdmissibleStatuses_B_index" ON "_AdmissibleStatuses"("B");

-- AddForeignKey
ALTER TABLE "ElementStatus" ADD CONSTRAINT "ElementStatus_table_column_group_id_fkey" FOREIGN KEY ("table_column_group_id") REFERENCES "TableColumnGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableColumnGroup" ADD CONSTRAINT "TableColumnGroup_table_column_id_fkey" FOREIGN KEY ("table_column_id") REFERENCES "TableColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_admissibleTableColumnGroups" ADD CONSTRAINT "_admissibleTableColumnGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "ElementStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_admissibleTableColumnGroups" ADD CONSTRAINT "_admissibleTableColumnGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "TableColumnGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdmissibleStatuses" ADD CONSTRAINT "_AdmissibleStatuses_A_fkey" FOREIGN KEY ("A") REFERENCES "ElementStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdmissibleStatuses" ADD CONSTRAINT "_AdmissibleStatuses_B_fkey" FOREIGN KEY ("B") REFERENCES "ElementStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
