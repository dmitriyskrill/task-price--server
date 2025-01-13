/*
  Warnings:

  - You are about to drop the column `day` on the `task_date_graph` table. All the data in the column will be lost.
  - Added the required column `date` to the `task_date_graph` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task_date_graph" DROP COLUMN "day",
ADD COLUMN     "date" INTEGER NOT NULL;
