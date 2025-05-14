/*
  Warnings:

  - You are about to drop the column `userId` on the `task` table. All the data in the column will be lost.
  - You are about to drop the `ElementStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AdmissibleStatuses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_admissibleTableColumnGroups` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('TASK', 'EXPENSE', 'TASK_DAY_GRAPH', 'TASK_DATE_GRAPH', 'EXPENSE_DAY_GRAPH', 'EXPENSE_DATE_GRAPH', 'SUBTASK');

-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('CREATE', 'CREATE_Many', 'READ', 'PATCH', 'PATCH_Many', 'UPDATE', 'UPDATE_Many', 'DELETE', 'DELETE_Many');

-- DropForeignKey
ALTER TABLE "ElementStatus" DROP CONSTRAINT "ElementStatus_table_column_group_id_fkey";

-- DropForeignKey
ALTER TABLE "_AdmissibleStatuses" DROP CONSTRAINT "_AdmissibleStatuses_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdmissibleStatuses" DROP CONSTRAINT "_AdmissibleStatuses_B_fkey";

-- DropForeignKey
ALTER TABLE "_admissibleTableColumnGroups" DROP CONSTRAINT "_admissibleTableColumnGroups_A_fkey";

-- DropForeignKey
ALTER TABLE "_admissibleTableColumnGroups" DROP CONSTRAINT "_admissibleTableColumnGroups_B_fkey";

-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_userId_fkey";

-- AlterTable
ALTER TABLE "task" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ElementStatus";

-- DropTable
DROP TABLE "_AdmissibleStatuses";

-- DropTable
DROP TABLE "_admissibleTableColumnGroups";

-- CreateTable
CREATE TABLE "task_status" (
    "id" TEXT NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "task_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow" (
    "id" TEXT NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "ownerId" TEXT,

    CONSTRAINT "task_workflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow_status" (
    "id" TEXT NOT NULL,
    "taskWorkflowId" TEXT NOT NULL,
    "taskStatusId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "isShowMenuBtnInPlanExpenseRow" BOOLEAN,
    "isShowDeleteBtnInTaskRow" BOOLEAN,
    "isShowOpenLikeMainBtnInTaskRow" BOOLEAN,
    "isShowExpenseCreateMenuAtControlHead" BOOLEAN,
    "isShowTaskCreateMenuAtControlHead" BOOLEAN,
    "isShowPlanElementByDefault" BOOLEAN,
    "isShowFactElementByDefault" BOOLEAN,
    "isCreateFactElementAfterSelectedThisStatus" BOOLEAN,

    CONSTRAINT "task_workflow_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow_status_permission" (
    "id" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "isPlan" BOOLEAN NOT NULL,
    "workflowStatusId" TEXT NOT NULL,
    "ownerId" TEXT,

    CONSTRAINT "task_workflow_status_permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_workflow_status_transition" (
    "ownId" TEXT NOT NULL,
    "forId" TEXT NOT NULL,

    CONSTRAINT "task_workflow_status_transition_pkey" PRIMARY KEY ("ownId","forId")
);

-- CreateIndex
CREATE UNIQUE INDEX "task_status_ownerId_name_key" ON "task_status"("ownerId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "task_status_ownerId_short_name_key" ON "task_status"("ownerId", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_ownerId_name_key" ON "task_workflow"("ownerId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_ownerId_short_name_key" ON "task_workflow"("ownerId", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_status_taskWorkflowId_taskStatusId_ownerId_key" ON "task_workflow_status"("taskWorkflowId", "taskStatusId", "ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_status_permission_workflowStatusId_entity_ope_key" ON "task_workflow_status_permission"("workflowStatusId", "entity", "operation", "ownerId");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_status" ADD CONSTRAINT "task_status_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow" ADD CONSTRAINT "task_workflow_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_taskWorkflowId_fkey" FOREIGN KEY ("taskWorkflowId") REFERENCES "task_workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_taskStatusId_fkey" FOREIGN KEY ("taskStatusId") REFERENCES "task_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status" ADD CONSTRAINT "task_workflow_status_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_permission" ADD CONSTRAINT "task_workflow_status_permission_workflowStatusId_fkey" FOREIGN KEY ("workflowStatusId") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_permission" ADD CONSTRAINT "task_workflow_status_permission_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_transition" ADD CONSTRAINT "task_workflow_status_transition_ownId_fkey" FOREIGN KEY ("ownId") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_workflow_status_transition" ADD CONSTRAINT "task_workflow_status_transition_forId_fkey" FOREIGN KEY ("forId") REFERENCES "task_workflow_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
