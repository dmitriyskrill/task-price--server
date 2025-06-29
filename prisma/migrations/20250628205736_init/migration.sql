/*
  Warnings:

  - You are about to drop the column `expenseId` on the `expense_date_graph` table. All the data in the column will be lost.
  - You are about to drop the column `expenseId` on the `expense_day_graph` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `isPlan` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `isTrash` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `shortName` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `shortName` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `isFact` on the `task_date_graph` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `task_date_graph` table. All the data in the column will be lost.
  - You are about to drop the column `isFact` on the `task_day_graph` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `task_day_graph` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Unit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expense_id` to the `expense_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expense_id` to the `expense_day_graph` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `day` on the `expense_day_graph` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `created_by_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id ` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_id` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_completed` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_name` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_id` to the `task_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `task_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `task_date_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_id` to the `task_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `task_day_graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `task_day_graph` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "expense_date_graph" DROP CONSTRAINT "expense_date_graph_expenseId_fkey";

-- DropForeignKey
ALTER TABLE "expense_date_graph" DROP CONSTRAINT "expense_date_graph_taskStatusId_fkey";

-- DropForeignKey
ALTER TABLE "expense_day_graph" DROP CONSTRAINT "expense_day_graph_expenseId_fkey";

-- DropForeignKey
ALTER TABLE "expense_day_graph" DROP CONSTRAINT "expense_day_graph_taskStatusId_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_taskId_fkey";

-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_ownerId_fkey";

-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "expense_date_graph" DROP COLUMN "expenseId",
ADD COLUMN     "expense_id" TEXT NOT NULL,
ADD COLUMN     "is_fact" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "taskStatusId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "expense_day_graph" DROP COLUMN "expenseId",
ADD COLUMN     "expense_id" TEXT NOT NULL,
ADD COLUMN     "is_fact" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "day",
ADD COLUMN     "day" INTEGER NOT NULL,
ALTER COLUMN "taskStatusId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "isCompleted",
DROP COLUMN "isPlan",
DROP COLUMN "isTrash",
DROP COLUMN "shortName",
DROP COLUMN "taskId",
DROP COLUMN "updated_at",
DROP COLUMN "userId",
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_fact" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sort" BIGINT DEFAULT 0,
ADD COLUMN     "task_id" TEXT NOT NULL,
ADD COLUMN     "task_id " TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task" DROP COLUMN "isCompleted",
DROP COLUMN "ownerId",
DROP COLUMN "shortName",
DROP COLUMN "updated_at",
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_completed" BOOLEAN NOT NULL,
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "owner_id" TEXT NOT NULL,
ADD COLUMN     "short_name" TEXT NOT NULL,
ADD COLUMN     "sort" BIGINT DEFAULT 0,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_date_graph" DROP COLUMN "isFact",
DROP COLUMN "updated_at",
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_fact" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "task_day_graph" DROP COLUMN "isFact",
DROP COLUMN "updated_at",
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_fact" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Unit_key_key" ON "Unit"("key");

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_task_id _fkey" FOREIGN KEY ("task_id ") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_date_graph" ADD CONSTRAINT "expense_date_graph_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_date_graph" ADD CONSTRAINT "expense_date_graph_taskStatusId_fkey" FOREIGN KEY ("taskStatusId") REFERENCES "task_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_day_graph" ADD CONSTRAINT "expense_day_graph_expense_id_fkey" FOREIGN KEY ("expense_id") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_day_graph" ADD CONSTRAINT "expense_day_graph_taskStatusId_fkey" FOREIGN KEY ("taskStatusId") REFERENCES "task_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
