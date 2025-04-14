/*
  Warnings:

  - You are about to drop the column `cellType` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `dateAddingToTrash` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `isFixed` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `isShow` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `isTrash` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `TableColumn` table. All the data in the column will be lost.
  - You are about to drop the column `break_interval` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `intervals_count` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `work_interval` on the `user` table. All the data in the column will be lost.
  - Added the required column `created_by_id` to the `TableColumn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `TableColumn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `TableColumn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TableColumn" DROP COLUMN "cellType",
DROP COLUMN "createdAt",
DROP COLUMN "createdById",
DROP COLUMN "dateAddingToTrash",
DROP COLUMN "isFixed",
DROP COLUMN "isShow",
DROP COLUMN "isTrash",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedById",
ADD COLUMN     "cell_type" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "is_editable" BOOLEAN DEFAULT false,
ADD COLUMN     "is_fixed" BOOLEAN DEFAULT false,
ADD COLUMN     "is_show" BOOLEAN DEFAULT false,
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "break_interval",
DROP COLUMN "intervals_count",
DROP COLUMN "work_interval",
ADD COLUMN     "created_by_id" TEXT,
ADD COLUMN     "patronymic" TEXT,
ADD COLUMN     "surname" TEXT,
ADD COLUMN     "updated_by_id" TEXT;
