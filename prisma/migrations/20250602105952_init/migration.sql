/*
  Warnings:

  - Added the required column `created_by_id` to the `task_workflow_status_permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `task_workflow_status_permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `task_workflow_status_permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task_workflow_status_permission" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sort" BIGINT DEFAULT 0,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;
