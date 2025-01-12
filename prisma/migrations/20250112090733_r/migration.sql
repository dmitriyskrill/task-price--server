/*
  Warnings:

  - Changed the type of `amount` on the `task_date_graph` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `amount` on the `task_day_graph` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "task_date_graph" DROP COLUMN "amount",
ADD COLUMN     "amount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "task_day_graph" DROP COLUMN "amount",
ADD COLUMN     "amount" INTEGER NOT NULL;
