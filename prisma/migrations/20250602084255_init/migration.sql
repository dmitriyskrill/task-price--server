/*
  Warnings:

  - Changed the type of `entity` on the `task_workflow_status_permission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `operation` on the `task_workflow_status_permission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "task_workflow_status_permission" DROP COLUMN "entity",
ADD COLUMN     "entity" "EntityType" NOT NULL,
DROP COLUMN "operation",
ADD COLUMN     "operation" "OperationType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "task_workflow_status_permission_workflowStatusId_entity_ope_key" ON "task_workflow_status_permission"("workflowStatusId", "entity", "operation", "ownerId");
