/*
  Warnings:

  - You are about to drop the column `task_id ` on the `expenses` table. All the data in the column will be lost.
  - Added the required column `expense_type_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_task_id _fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_task_id_fkey";

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "task_id ",
ADD COLUMN     "expense_type_id" TEXT NOT NULL,
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_expense_type_id_fkey" FOREIGN KEY ("expense_type_id") REFERENCES "expense_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
