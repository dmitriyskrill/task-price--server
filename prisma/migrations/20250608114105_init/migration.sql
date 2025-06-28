/*
  Warnings:

  - The values [CREATE_Many,PATCH_Many,UPDATE_Many,DELETE_Many] on the enum `OperationType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OperationType_new" AS ENUM ('CREATE', 'CREATE_MANY', 'READ', 'PATCH', 'PATCH_MANY', 'UPDATE', 'UPDATE_MANY', 'DELETE', 'DELETE_MANY');
ALTER TABLE "task_workflow_status_permission" ALTER COLUMN "operation" TYPE "OperationType_new" USING ("operation"::text::"OperationType_new");
ALTER TYPE "OperationType" RENAME TO "OperationType_old";
ALTER TYPE "OperationType_new" RENAME TO "OperationType";
DROP TYPE "OperationType_old";
COMMIT;
