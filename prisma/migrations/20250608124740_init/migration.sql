/*
  Warnings:

  - You are about to drop the column `default_additional_factor` on the `task_type` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "task_type" DROP CONSTRAINT "task_type_default_unit_id_fkey";

-- AlterTable
ALTER TABLE "task_type" DROP COLUMN "default_additional_factor",
ADD COLUMN     "default_default_vat_percent" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "default_day_additional_factor" SET DEFAULT 1,
ALTER COLUMN "defaultDateAdditionalFactor" SET DEFAULT 1,
ALTER COLUMN "default_unit_id" DROP NOT NULL,
ALTER COLUMN "default_profit_percent" SET DEFAULT 1,
ALTER COLUMN "default_general_business_expenses_percent" SET DEFAULT 1,
ALTER COLUMN "default_unforeseen_expenses_percent" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "task_type" ADD CONSTRAINT "task_type_default_unit_id_fkey" FOREIGN KEY ("default_unit_id") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
