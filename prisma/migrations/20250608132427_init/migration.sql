/*
  Warnings:

  - You are about to drop the column `codeId` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `dateAddingToTrash` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `isHourUnit` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `isTrash` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `shortName` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Unit` table. All the data in the column will be lost.
  - Added the required column `code_id` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_id` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_name` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by_id` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Unit_key_idx";

-- DropIndex
DROP INDEX "Unit_key_key";

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "codeId",
DROP COLUMN "createdAt",
DROP COLUMN "createdById",
DROP COLUMN "dateAddingToTrash",
DROP COLUMN "fullName",
DROP COLUMN "isHourUnit",
DROP COLUMN "isTrash",
DROP COLUMN "key",
DROP COLUMN "shortName",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedById",
ADD COLUMN     "code_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "date_adding_to_trash" TIMESTAMP(3),
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "is_hour_type" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_trash" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "short_name" TEXT NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT NOT NULL,
ALTER COLUMN "sort" SET DEFAULT 0;
