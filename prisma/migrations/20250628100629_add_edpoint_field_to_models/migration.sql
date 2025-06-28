/*
  Warnings:

  - Added the required column `endpoint` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endpoint` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endpoint` to the `task_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endpoint` to the `task_day_graph` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expense_date_graph" ADD COLUMN     "endpoint" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "expense_day_graph" ADD COLUMN     "endpoint" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_date_graph" ADD COLUMN     "endpoint" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_day_graph" ADD COLUMN     "endpoint" TEXT NOT NULL;
