/*
  Warnings:

  - You are about to drop the column `endpoint` on the `expense_date_graph` table. All the data in the column will be lost.
  - You are about to drop the column `taskStatusId` on the `expense_date_graph` table. All the data in the column will be lost.
  - You are about to drop the column `endpoint` on the `expense_day_graph` table. All the data in the column will be lost.
  - You are about to drop the column `taskStatusId` on the `expense_day_graph` table. All the data in the column will be lost.
  - You are about to drop the column `endpoint` on the `task_date_graph` table. All the data in the column will be lost.
  - You are about to drop the column `endpoint` on the `task_day_graph` table. All the data in the column will be lost.
  - Added the required column `owner_id` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `task_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `task_day_graph` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "expense_date_graph" DROP CONSTRAINT "expense_date_graph_taskStatusId_fkey";

-- DropForeignKey
ALTER TABLE "expense_day_graph" DROP CONSTRAINT "expense_day_graph_taskStatusId_fkey";

-- AlterTable
ALTER TABLE "expense_date_graph" DROP COLUMN "endpoint",
DROP COLUMN "taskStatusId",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "expense_day_graph" DROP COLUMN "endpoint",
DROP COLUMN "taskStatusId",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_date_graph" DROP COLUMN "endpoint",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_day_graph" DROP COLUMN "endpoint",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "expense_date_graph" ADD CONSTRAINT "expense_date_graph_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_day_graph" ADD CONSTRAINT "expense_day_graph_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_date_graph" ADD CONSTRAINT "task_date_graph_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_day_graph" ADD CONSTRAINT "task_day_graph_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
