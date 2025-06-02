/*
  Warnings:

  - You are about to drop the column `table_column_id` on the `TableColumnGroup` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `task_status` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `task_workflow` table. All the data in the column will be lost.
  - You are about to drop the column `isCreateFactElementAfterSelectedThisStatus` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isShowDeleteBtnInTaskRow` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isShowExpenseCreateMenuAtControlHead` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isShowFactElementByDefault` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isShowMenuBtnInPlanExpenseRow` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isShowOpenLikeMainBtnInTaskRow` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isShowPlanElementByDefault` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isShowTaskCreateMenuAtControlHead` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `taskStatusId` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `taskWorkflowId` on the `task_workflow_status` table. All the data in the column will be lost.
  - You are about to drop the column `isPlan` on the `task_workflow_status_permission` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `task_workflow_status_permission` table. All the data in the column will be lost.
  - You are about to drop the column `workflowStatusId` on the `task_workflow_status_permission` table. All the data in the column will be lost.
  - The primary key for the `task_workflow_status_transition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `forId` on the `task_workflow_status_transition` table. All the data in the column will be lost.
  - You are about to drop the column `ownId` on the `task_workflow_status_transition` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[owner_id,name]` on the table `task_status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[owner_id,short_name]` on the table `task_status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[owner_id,name]` on the table `task_workflow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[owner_id,short_name]` on the table `task_workflow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[task_workflow_id,task_status_id,owner_id]` on the table `task_workflow_status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[task_workflow_status_id,entity,operation,owner_id]` on the table `task_workflow_status_permission` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tableColumnId` to the `TableColumnGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `task_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_id` to the `task_workflow_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `task_workflow_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_status_id` to the `task_workflow_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_workflow_id` to the `task_workflow_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `task_workflow_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `task_workflow_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_plan` to the `task_workflow_status_permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_workflow_status_id` to the `task_workflow_status_permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `for_id` to the `task_workflow_status_transition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `own_id` to the `task_workflow_status_transition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TableColumnGroup" DROP CONSTRAINT "TableColumnGroup_table_column_id_fkey";

-- DropForeignKey
ALTER TABLE "task_status" DROP CONSTRAINT "task_status_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow" DROP CONSTRAINT "task_workflow_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow_status" DROP CONSTRAINT "task_workflow_status_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow_status" DROP CONSTRAINT "task_workflow_status_taskStatusId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow_status" DROP CONSTRAINT "task_workflow_status_taskWorkflowId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow_status_permission" DROP CONSTRAINT "task_workflow_status_permission_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow_status_permission" DROP CONSTRAINT "task_workflow_status_permission_workflowStatusId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow_status_transition" DROP CONSTRAINT "task_workflow_status_transition_forId_fkey";

-- DropForeignKey
ALTER TABLE "task_workflow_status_transition" DROP CONSTRAINT "task_workflow_status_transition_ownId_fkey";

-- DropIndex
DROP INDEX "task_status_ownerId_name_key";

-- DropIndex
DROP INDEX "task_status_ownerId_short_name_key";

-- DropIndex
DROP INDEX "task_workflow_ownerId_name_key";

-- DropIndex
DROP INDEX "task_workflow_ownerId_short_name_key";

-- DropIndex
DROP INDEX "task_workflow_status_taskWorkflowId_taskStatusId_ownerId_key";

-- DropIndex
DROP INDEX "task_workflow_status_permission_workflowStatusId_entity_ope_key";

-- AlterTable
ALTER TABLE "TableColumnGroup" DROP COLUMN "table_column_id",
ADD COLUMN     "tableColumnId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_status" DROP COLUMN "ownerId",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_workflow" DROP COLUMN "ownerId",
ADD COLUMN     "owner_id" TEXT;

-- AlterTable
ALTER TABLE "task_workflow_status" DROP COLUMN "isCreateFactElementAfterSelectedThisStatus",
DROP COLUMN "isShowDeleteBtnInTaskRow",
DROP COLUMN "isShowExpenseCreateMenuAtControlHead",
DROP COLUMN "isShowFactElementByDefault",
DROP COLUMN "isShowMenuBtnInPlanExpenseRow",
DROP COLUMN "isShowOpenLikeMainBtnInTaskRow",
DROP COLUMN "isShowPlanElementByDefault",
DROP COLUMN "isShowTaskCreateMenuAtControlHead",
DROP COLUMN "ownerId",
DROP COLUMN "taskStatusId",
DROP COLUMN "taskWorkflowId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_create_fact_element_after_selected_this_status" BOOLEAN,
ADD COLUMN     "is_show_delete_btn_in_task_row" BOOLEAN,
ADD COLUMN     "is_show_expense_create_menu_at_control_head" BOOLEAN,
ADD COLUMN     "is_show_fact_element_by_default" BOOLEAN,
ADD COLUMN     "is_show_menu_btn_in_plan_expense_row " BOOLEAN,
ADD COLUMN     "is_show_open_like_main_btn_in_task_row" BOOLEAN,
ADD COLUMN     "is_show_plan_element_by_default" BOOLEAN,
ADD COLUMN     "is_show_task_create_menu_at_control_head" BOOLEAN,
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "owner_id" TEXT NOT NULL,
ADD COLUMN     "sort" BIGINT DEFAULT 0,
ADD COLUMN     "task_status_id" TEXT NOT NULL,
ADD COLUMN     "task_workflow_id" TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_workflow_status_permission" DROP COLUMN "isPlan",
DROP COLUMN "ownerId",
DROP COLUMN "workflowStatusId",
ADD COLUMN     "is_plan" BOOLEAN NOT NULL,
ADD COLUMN     "owner_id" TEXT,
ADD COLUMN     "task_workflow_status_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_workflow_status_transition" DROP CONSTRAINT "task_workflow_status_transition_pkey",
DROP COLUMN "forId",
DROP COLUMN "ownId",
ADD COLUMN     "for_id" TEXT NOT NULL,
ADD COLUMN     "own_id" TEXT NOT NULL,
ADD CONSTRAINT "task_workflow_status_transition_pkey" PRIMARY KEY ("own_id", "for_id");

-- CreateIndex
CREATE UNIQUE INDEX "task_status_owner_id_name_key" ON "task_status"("owner_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "task_status_owner_id_short_name_key" ON "task_status"("owner_id", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_owner_id_name_key" ON "task_workflow"("owner_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_owner_id_short_name_key" ON "task_workflow"("owner_id", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_status_task_workflow_id_task_status_id_owner__key" ON "task_workflow_status"("task_workflow_id", "task_status_id", "owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_status_permission_task_workflow_status_id_ent_key" ON "task_workflow_status_permission"("task_workflow_status_id", "entity", "operation", "owner_id");

-- AddForeignKey
ALTER TABLE "TableColumnGroup" ADD CONSTRAINT "TableColumnGroup_tableColumnId_fkey" FOREIGN KEY ("tableColumnId") REFERENCES "TableColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_status" ADD CONSTRAINT "task_status_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow" ADD CONSTRAINT "task_workflow_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_task_workflow_id_fkey" FOREIGN KEY ("task_workflow_id") REFERENCES "task_workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_task_status_id_fkey" FOREIGN KEY ("task_status_id") REFERENCES "task_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_permission" ADD CONSTRAINT "task_workflow_status_permission_task_workflow_status_id_fkey" FOREIGN KEY ("task_workflow_status_id") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_permission" ADD CONSTRAINT "task_workflow_status_permission_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_transition" ADD CONSTRAINT "task_workflow_status_transition_own_id_fkey" FOREIGN KEY ("own_id") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_transition" ADD CONSTRAINT "task_workflow_status_transition_for_id_fkey" FOREIGN KEY ("for_id") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
