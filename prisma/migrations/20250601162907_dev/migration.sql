/*
  Warnings:

  - You are about to drop the column `table_column_id` on the `TableColumnGroup` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TableColumnGroup" DROP CONSTRAINT "TableColumnGroup_table_column_id_fkey";

-- AlterTable
ALTER TABLE "TableColumnGroup" DROP COLUMN "table_column_id";

-- CreateTable
CREATE TABLE "_TableColumnToTableColumnGroup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TableColumnToTableColumnGroup_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TableColumnToTableColumnGroup_B_index" ON "_TableColumnToTableColumnGroup"("B");

-- AddForeignKey
ALTER TABLE "_TableColumnToTableColumnGroup" ADD CONSTRAINT "_TableColumnToTableColumnGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "TableColumn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TableColumnToTableColumnGroup" ADD CONSTRAINT "_TableColumnToTableColumnGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "TableColumnGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
