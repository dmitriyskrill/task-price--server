-- AlterTable
ALTER TABLE "TableColumnChild" ADD COLUMN     "sort" BIGINT;

-- AlterTable
ALTER TABLE "TableColumnGroup" ADD COLUMN     "sort" BIGINT DEFAULT 0;

-- AlterTable
ALTER TABLE "task_date_graph" ADD COLUMN     "sort" BIGINT DEFAULT 0;

-- AlterTable
ALTER TABLE "task_day_graph" ADD COLUMN     "sort" BIGINT DEFAULT 0;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "sort" BIGINT DEFAULT 0;

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sort" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT NOT NULL,
    "isTrash" BOOLEAN NOT NULL DEFAULT false,
    "dateAddingToTrash" TIMESTAMP(3),
    "shortName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "codeId" TEXT NOT NULL,
    "isHourUnit" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Unit_key_key" ON "Unit"("key");

-- CreateIndex
CREATE INDEX "Unit_key_idx" ON "Unit"("key");
