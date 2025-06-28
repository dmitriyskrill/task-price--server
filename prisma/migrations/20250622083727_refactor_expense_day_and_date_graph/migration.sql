/*
  Warnings:

  - You are about to drop the column `updated_at` on the `expense_date_graph` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `expense_day_graph` table. All the data in the column will be lost.
  - Added the required column `amount` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_id` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskStatusId` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_id` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskStatusId` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expense_date_graph" DROP COLUMN "updated_at",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "taskStatusId" TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "expense_day_graph" DROP COLUMN "updated_at",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "taskStatusId" TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "expense_date_graph" ADD CONSTRAINT "expense_date_graph_taskStatusId_fkey" FOREIGN KEY ("taskStatusId") REFERENCES "task_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_day_graph" ADD CONSTRAINT "expense_day_graph_taskStatusId_fkey" FOREIGN KEY ("taskStatusId") REFERENCES "task_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
