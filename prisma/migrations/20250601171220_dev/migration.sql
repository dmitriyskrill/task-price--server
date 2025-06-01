/*
  Warnings:

  - You are about to drop the `_TableColumnToTableColumnGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TableColumnToTableColumnGroup" DROP CONSTRAINT "_TableColumnToTableColumnGroup_A_fkey";

-- DropForeignKey
ALTER TABLE "_TableColumnToTableColumnGroup" DROP CONSTRAINT "_TableColumnToTableColumnGroup_B_fkey";

-- AlterTable
ALTER TABLE "TableColumn" ADD COLUMN     "tableColumnGroupId" TEXT;

-- DropTable
DROP TABLE "_TableColumnToTableColumnGroup";

-- AddForeignKey
ALTER TABLE "TableColumn" ADD CONSTRAINT "TableColumn_tableColumnGroupId_fkey" FOREIGN KEY ("tableColumnGroupId") REFERENCES "TableColumnGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
