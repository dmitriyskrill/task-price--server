/*
  Warnings:

  - Added the required column `description` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" ADD COLUMN     "description" TEXT NOT NULL;
