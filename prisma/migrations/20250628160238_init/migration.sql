/*
  Warnings:

  - You are about to drop the column `font_width` on the `task_type` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "task_type" DROP COLUMN "font_width",
ADD COLUMN     "font_weight" INTEGER NOT NULL DEFAULT 500;

-- CreateTable
CREATE TABLE "expense_type" (
    "id" TEXT NOT NULL,
    "sort" BIGINT DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "updated_by_id" TEXT NOT NULL,
    "is_trash" BOOLEAN NOT NULL DEFAULT false,
    "date_adding_to_trash" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "default_day_additional_factor" INTEGER NOT NULL DEFAULT 1,
    "defaultDateAdditionalFactor" INTEGER NOT NULL DEFAULT 1,
    "default_unit_id" TEXT,
    "is_show_graph_info" BOOLEAN NOT NULL DEFAULT true,
    "bg_color" TEXT NOT NULL DEFAULT 'white',

    CONSTRAINT "expense_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdmissibleExpenseTypeUnit" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdmissibleExpenseTypeUnit_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "expense_type_owner_id_name_key" ON "expense_type"("owner_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "expense_type_owner_id_short_name_key" ON "expense_type"("owner_id", "short_name");

-- CreateIndex
CREATE INDEX "_AdmissibleExpenseTypeUnit_B_index" ON "_AdmissibleExpenseTypeUnit"("B");

-- AddForeignKey
ALTER TABLE "expense_type" ADD CONSTRAINT "expense_type_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense_type" ADD CONSTRAINT "expense_type_default_unit_id_fkey" FOREIGN KEY ("default_unit_id") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdmissibleExpenseTypeUnit" ADD CONSTRAINT "_AdmissibleExpenseTypeUnit_A_fkey" FOREIGN KEY ("A") REFERENCES "expense_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdmissibleExpenseTypeUnit" ADD CONSTRAINT "_AdmissibleExpenseTypeUnit_B_fkey" FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
